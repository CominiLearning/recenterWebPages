import { useLocation } from "react-router-dom";
import NavbarLanding from "./NavbarLanding/NavbarLanding";
import NavbarDocs from "./NavbarDocs/NavbarDocs";

export default function Navbar() {
  const location = useLocation();

  if (location.pathname === "/") {
    return <NavbarLanding />;
  }

  return <NavbarDocs />;
}
