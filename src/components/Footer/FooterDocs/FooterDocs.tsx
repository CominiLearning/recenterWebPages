import "./FooterDocs.scss";
import logo from "../../../../src/images/recenter_logo.png";
import { Link } from "react-router-dom";

export default function FooterDocs() {
  const middleLinks = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Getting Started",
      href: "/docs",
    },
    {
      name: "Essentials",
      href: "/docs/essentials",
    },
    {
      name: "Alerts",
      href: "/docs/alerts",
    },
    {
      name: "FAQs",
      href: "/docs/faqs",
    },
  ];

  return (
    <div className="footer_docs">
      <div className="footer_docs__left">
        <div className="footer_docs__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="footer_docs__left__text">Recenter</div>
      </div>
      <div className="footer_docs__middle">
        <div className="footer_docs__middle__items">
          {middleLinks.map((link) => {
            return (
              <Link
                to={link.href}
                className="footer_docs__middle__items__item"
                key={link.name}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="footer_docs__right">
        <div className="footer_docs__right__items">
          <a
            href="https://github.com/CominiLearning/recenter"
            rel="noreferrer"
            target="_blank"
            className="footer_docs__right__items__item"
            id="item"
          >
            Download
          </a>
        </div>
      </div>
    </div>
  );
}
