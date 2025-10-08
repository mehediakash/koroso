const AmenitiesCard = require("../models/AmenitiesCard");
const User = require("../models/User");
const { stripe } = require("../config/stripe");

// Helper: calculate bonus
const calculateBonus = (amount) => {
  if (amount >= 2500) return Math.floor(amount * 0.1);
  if (amount >= 1000) return Math.floor(amount * 0.05);
  return 0;
};

// 1️⃣ Purchase or reload Amenities Card
exports.purchaseCard = async (req, res, next) => {
  try {
    const residentId = req.user._id;
    let { amount, currency = "usd", paymentMethodId } = req.body;

    if (!amount || !paymentMethodId) return res.status(400).json({ error: "Amount and paymentMethodId required" });

    amount = Number(amount);
    if (![500, 1000, 2500].includes(amount)) return res.status(400).json({ error: "Invalid purchase amount" });

    const bonusAmount = calculateBonus(amount);
    const totalAmount = amount + bonusAmount;

    // 2️⃣ Create PaymentIntent
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // cents
      currency,
      payment_method: paymentMethodId,
      confirm: true,
      metadata: { residentId: residentId.toString(), type: "amenities-card" },
    });

    // 3️⃣ Save AmenitiesCard record
    const card = new AmenitiesCard({
      resident: residentId,
      amount,
      bonusAmount,
      totalAmount,
      paymentIntentId: paymentIntent.id,
      status: "completed",
    });
    await card.save();

    // 4️⃣ Update user balance (optional: store in user document)
    const user = await User.findById(residentId);
    user.amenitiesBalance = (user.amenitiesBalance || 0) + totalAmount;
    await user.save();

    res.status(200).json({
      success: true,
      message: "Amenities Card purchased successfully",
      data: { amount, bonusAmount, totalAmount, balance: user.amenitiesBalance },
    });
  } catch (err) {
    console.error(err);

    // Check if Stripe error
    if (err.type === "StripeCardError") {
      return res.status(402).json({ error: err.message });
    }

    res.status(500).json({ error: err.message });
  }
};
