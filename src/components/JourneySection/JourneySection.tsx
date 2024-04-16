import { journeyCards } from "../../texts/journeyCards";
import JourneyCard from "../JourneyCard/JourneyCard";
import "./JourneySection.scss";
import bgImage from "../../images/documentation/journey.png";

export default function JourneySection() {

  return (
    <div className="journey_section">
      <div className="journey_section__title">
        <div className="journey_section__title__blue">Making the best of</div>
        <div className="journey_section__title__black">
          Your Recenter Journey
        </div>
      </div>
      <div
        className="journey_section__cards"
        style={{
          background: `url(${bgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "50% 35%",
          backgroundRepeat: "no-repeat",
        }}
      >
        {journeyCards.map((card, index) => (
          <JourneyCard {...card} key={index}></JourneyCard>
        ))}
      </div>
    </div>
  );
}
