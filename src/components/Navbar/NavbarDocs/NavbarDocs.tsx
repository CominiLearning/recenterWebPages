import "./NavbarDocs.scss";
import logo from "../../../../src/images/recenter_logo.png";
import { Link, useLocation } from "react-router-dom";

export default function NavbarDocs() {
  const location = useLocation();

  const middleLinks = [
    {
      name: "Home",
      href: "/",
      isSelected: location.pathname === "/",
    },
    {
      name: "Getting Started",
      href: "/docs",
      isSelected: location.pathname === "/docs",
    },
    {
      name: "Essentials",
      href: "/docs/essentials",
      isSelected: location.pathname === "/docs/essentials",
    },
    {
      name: "Alerts",
      href: "/docs/alerts",
      isSelected: location.pathname === "/docs/alerts",
    },
    {
      name: "FAQs",
      href: "/docs/faqs",
      isSelected: location.pathname === "/docs/faqs",
    },
  ];

  return (
    <div className="navbar_2">
      <div className="navbar_2__left">
        <div className="navbar_2__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar_2__left__text">Recenter</div>
      </div>
      <div className="navbar_2__middle">
        <div className="navbar_2__middle__items">
          {middleLinks.map((link) => {
            return (
              <Link
                to={link.href}
                className="navbar_2__middle__items__item"
                key={link.name}
                id={link.isSelected ? "selected" : ""}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="navbar_2__right">
        <div className="navbar_2__right__items">
          <a
            href="https://github.com/CominiLearning/recenter"
            rel="noreferrer"
            target="_blank"
            className="navbar_2__right__items__item"
            id="item"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
