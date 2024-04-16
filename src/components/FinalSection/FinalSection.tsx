import "./FinalSection.scss";

export default function FinalSection() {
  return (
    <div className="final_section">
      <div className="final_section__title">
        <div>
          Your Future Of <span>Mindful Browsing</span>
          Is One Click Away
        </div>
      </div>
      <div className="final_section__button">
        <div className="final_section__button__container">
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
        <div className="final_section__button__container">
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
  );
}
