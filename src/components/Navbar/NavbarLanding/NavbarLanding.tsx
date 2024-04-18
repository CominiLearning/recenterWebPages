import "./NavbarLanding.scss";
import { FaBars } from "react-icons/fa6";
import logo from "../../../images/recenter_logo.png";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useToggle from "../../../hooks/useToggle";

export default function NavbarLanding() {
  const [menuExpanded, setMenuExpanded] = useToggle(false);

  const links = [
    {
      name: "Home",
      href: "/",
      type: "link",
      isExpanded: true,
      isExternal: false,
    },
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
    <div className="navbar_landing">
      <div className="navbar_landing__left">
        <div className="navbar_landing__left__logo">
          <img src={logo} alt="logo"></img>
        </div>
        <div className="navbar_landing__left__text">Recenter</div>
      </div>
      <div className="navbar_landing__right">
        <div className="navbar_landing__right__items">
          {links.map((link) => {
            if(link.isExpanded) {
              return "";
            }
            if(link.type === "link") {
              return (
                <Link
                  to={link.href}
                  className="navbar_landing__right__items__item"
                  key={link.name}
                  id="item"
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : ""}
                rel={link.isExternal ? "noreferrer" : ""}
                className="navbar_landing__right__items__item"
                key={link.name}
                id="item"
              >
                {link.name}
              </a>
            );
          })}
          <div className="navbar_landing__right__items__item" id="icon">
            <FaBars onClick={setMenuExpanded}></FaBars>
          </div>
        </div>
      </div>
      <div className={"navbar_landing__menu_expanded" + (menuExpanded ? " show" : "")}>
        <div className="navbar_landing__menu_expanded__title">
          <div className="navbar_landing__menu_expanded__title__left">Recenter</div>
          <div className="navbar_landing__menu_expanded__title__right">
            <IoClose onClick={setMenuExpanded}></IoClose>
          </div>
        </div>
        <div className="navbar_landing__menu_expanded__items">
          {links.map((link) => {
            if(link.type === "link") {
              return (
                <Link
                  to={link.href}
                  className="navbar_landing__menu_expanded__items__item"
                  key={link.name}
                >
                  {link.name}
                </Link>
              );
            }
            return (
              <a
                href={link.href}
                target={link.isExternal ? "_blank" : ""}
                rel={link.isExternal ? "noreferrer" : ""}
                className="navbar_landing__menu_expanded__items__item"
                key={link.name}
              >
                {link.name}
              </a>
            );
          })}
        </div>
        <div className="navbar_landing__menu_expanded__line"></div>
      </div>
    </div>
  );
}
