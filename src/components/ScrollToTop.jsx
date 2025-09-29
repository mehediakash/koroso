import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // scroll to the top-left corner
  }, [pathname]); // runs on route/path change

  return null; // nothing to render
}
