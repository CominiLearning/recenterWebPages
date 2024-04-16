import { FaAngleDown } from "react-icons/fa";
import NewFeature from "../NewFeature/NewFeature";
import QuickLinks from "../QuickLinks/QuickLinks";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import "./DocsMainSection.scss";
import bgImage from "../../images/documentation/main_section.png";

export default function DocsMainSection() {
  return (
    <div
      className="docs_main_section"
      style={{
        background: `url(${bgImage})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="docs_main_section__content">
        <NewFeature></NewFeature>
        <WelcomeSection></WelcomeSection>
        <QuickLinks></QuickLinks>
        <div className="docs_main_section__content__explore">
          <div className="docs_main_section__content__explore__text">Explore</div>
          <div className="docs_main_section__content__explore__icon">
            <FaAngleDown />
          </div>
        </div>
      </div>
    </div>
  );
}
