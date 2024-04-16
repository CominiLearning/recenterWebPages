import "./NavbarLanding.scss";
import { FaBars } from "react-icons/fa6";
import logo from "../../../images/recenter_logo.png";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import useToggle from "../../../hooks/useToggle";

export default function NavbarLanding() {
  const [menuExpanded, setMenuExpanded] = useToggle(false);

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
          <a href="#features" className="navbar_landing__right__items__item" id="item">
            Features
          </a>
          <Link to="/docs" className="navbar_landing__right__items__item" id="item">
            Help & Documentation
          </Link>
          <a
            href="https://chromewebstore.google.com/detail/recenter/jebgcaelmhfoelfjcaiiccamkembanoo"
            rel="noreferrer"
            target="_blank"
            className="navbar_landing__right__items__item"
            id="item"
          >
            Download
          </a>
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
          <a href="#home" className="navbar_landing__menu_expanded__items__item">
            Home
          </a>
          <a href="#features" className="navbar_landing__menu_expanded__items__item">
            Features
          </a>
          <Link to="/docs" className="navbar_landing__menu_expanded__items__item">
            Help & Documentation
          </Link>
          <a
            href="https://github.com/CominiLearning/recenter"
            target="_blank"
            rel="noreferrer"
            className="navbar_landing__menu_expanded__items__item"
          >
            Download
          </a>
        </div>
        <div className="navbar_landing__menu_expanded__line"></div>
      </div>
    </div>
  );
}
