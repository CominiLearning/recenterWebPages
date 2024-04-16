import { useLocation } from "react-router-dom";
import FooterLanding from "./FooterLanding/FooterLanding";
import FooterDocs from "./FooterDocs/FooterDocs";

export default function Footer() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <FooterLanding></FooterLanding>;
  }
  return <FooterDocs></FooterDocs>;
}
