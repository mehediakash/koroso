import './App.css';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";

import Home from "./pages/home";
import RootLayout from './components/Layout/RootLayout';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import Contact from './pages/Contact';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/contact.html" element={<Contact />} />
        <Route path="/privacy.html" element={<Privacy />} />
        <Route path="/terms.html" element={<Terms />} />
      </Route>
    )
  );

  return (
    <>
   
      <RouterProvider router={router} />
    </>
  );
}

export default App;
