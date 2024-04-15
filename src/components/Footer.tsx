import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__content">
        <div className="footer__content__left">Recenter</div>
        <div className="footer__content__right">
          <div className="footer__content__right__items">
            <a href="#features" className="footer__content__right__items__item">
              Features
            </a>
            <a
              href="https://chromewebstore.google.com/detail/recenter/jebgcaelmhfoelfjcaiiccamkembanoo"
              rel="noreferrer"
              target="_blank"
              className="footer__content__right__items__item"
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
