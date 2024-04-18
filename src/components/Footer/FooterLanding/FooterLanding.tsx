import { Link } from "react-router-dom";
import "./FooterLanding.scss";

export default function FooterLanding() {
  const links = [
    {
      name: "Features",
      href: "#features",
      type: "anchor",
      isExpanded: false,
      isExternal: false,
    },
    {
      name: "Documentation",
      href: "/docs",
      type: "link",
      isExpanded: false,
      isExternal: false,
    },
    {
      name: "Download",
      href: "https://chromewebstore.google.com/detail/recenter/jebgcaelmhfoelfjcaiiccamkembanoo",
      type: "anchor",
      isExpanded: false,
      isExternal: true,
    },
    {
      name: "Privacy",
      href: "/privacy",
      type: "link",
      isExpanded: false,
      isExternal: false,
    },
    {
      name: "T&C",
      href: "/terms",
      type: "link",
      isExpanded: false,
      isExternal: false,
    },
  ];
  return (
    <div className="footer_landing">
      <div className="footer_landing__content">
        <div className="footer_landing__content__left">Recenter</div>
        <div className="footer_landing__content__right">
          <div className="footer_landing__content__right__items">
            {links.map((link) => {
              if (link.type === "anchor") {
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    target={link.isExternal ? "_blank" : ""}
                    rel="noreferrer"
                    className="footer_landing__content__right__items__item"
                  >
                    {link.name}
                  </a>
                );
              } else {
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="footer_landing__content__right__items__item"
                  >
                    {link.name}
                  </Link>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
