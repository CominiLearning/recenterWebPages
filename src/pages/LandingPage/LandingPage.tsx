import "./LandingPage.scss";
import GettingStarted from "../../components/GettingStarted/GettingStarted";
import MainSection from "../../components/MainSection/MainSection";
import WebsiteList from "../../components/WebsiteList/WebsiteList";
import Features from "../../components/Features/Features";
import FinalSection from "../../components/FinalSection/FinalSection";
import { features } from "../../texts/features";

export default function LandingPage() {
  return (
    <div className="landing_page">
      <MainSection></MainSection>
      <WebsiteList></WebsiteList>
      <GettingStarted></GettingStarted>
      {features.map((feature, index) => {
        return (
          <Features
            key={index}
            type={feature.type}
            image={feature.image}
            feature={feature.feature}
            title={feature.title}
            description={feature.description}
          ></Features>
        );
      })}
      <FinalSection></FinalSection>
    </div>
  );
}
