import './App.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import Home from "./pages/home";
import RootLayout from './components/Layout/RootLayout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import { Helmet } from "react-helmet";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
    )
  );

  return (
    <>
      {/* Global SEO for all pages (can override per page inside components) */}
      <Helmet>
        <title>OTIS | Oromo Tech & Innovation Society</title>
        <meta
          name="description"
          content="OTIS connects students, professionals, and organizations through mentorship, events, and community programs."
        />
        <meta
          name="keywords"
          content="OTIS, Oromo Tech, mentorship, events, community, summit, hackathon"
        />
      </Helmet>

      {/* Router */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
