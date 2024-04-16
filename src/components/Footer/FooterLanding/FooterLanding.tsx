import { Link } from "react-router-dom";
import "./FooterLanding.scss";

export default function FooterLanding() {
  return (
    <div className="footer_landing">
      <div className="footer_landing__content">
        <div className="footer_landing__content__left">Recenter</div>
        <div className="footer_landing__content__right">
          <div className="footer_landing__content__right__items">
            <a href="#features" className="footer_landing__content__right__items__item">
              Features
            </a>
            <Link to="/docs" className="footer_landing__content__right__items__item">
              Help & Documentation
            </Link>
            <a
              href="https://chromewebstore.google.com/detail/recenter/jebgcaelmhfoelfjcaiiccamkembanoo"
              rel="noreferrer"
              target="_blank"
              className="footer_landing__content__right__items__item"
              id="item"
            >
              Download
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
