import "./Home.scss";
import DocsMainSection from "../../components/DocsMainSection/DocsMainSection";
import JourneySection from "../../components/JourneySection/JourneySection";
import FAQSection from "../../components/FAQSection/FAQSection";

export default function Home() {
  return (
    <div className="home_page">
      <DocsMainSection></DocsMainSection>
      <JourneySection></JourneySection>
      <FAQSection></FAQSection>
    </div>
  );
}
