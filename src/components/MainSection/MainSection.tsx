import "./MainSection.scss";
import main_image from "../../images/main_section_image.png";

export default function MainSection() {
  return (
    <div className="main_section">
      <div className="main_section__header">
        <div className="main_section__header__title">
          <p>Mindful Browsing Begins Here</p>
          <p id="blue">Recenter</p>
        </div>
        <div className="main_section__header__subtitle">
          <p>
            Recenter is a browser extension that helps you reshape your browsing
            habits.
          </p>
        </div>
        <div className="main_section__header__button">
          <div className="main_section__header__button__container">
            <div>
              <a
                href="https://chromewebstore.google.com/detail/recenter/jebgcaelmhfoelfjcaiiccamkembanoo"
                target="_blank"
                rel="noreferrer"
              >
                Get it from Chrome WebStore
              </a>
            </div>
          </div>
          <div className="main_section__header__button__container">
            <div>
              <a
                href="https://github.com/CominiLearning/recenter"
                target="_blank"
                rel="noreferrer"
              >
                Get it from Github Repo
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="main_section__image_container">
        <img src={main_image} alt=""></img>
      </div>
    </div>
  );
}
