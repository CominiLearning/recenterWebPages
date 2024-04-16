import { faqItems } from "../../texts/faqItems";
import FAQItem from "../FAQItem/FAQItem";
import "./FAQSection.scss";

export default function FAQSection() {

  return (
    <div className="faq_section">
      <div className="faq_section__title">
        <div className="faq_section__title__blue">Frequently Asked</div>
        <div className="faq_section__title__black">Questions</div>
      </div>
      <div className="faq_section__items">
        {faqItems.map((item, index) => (
          <FAQItem key={index} {...item}></FAQItem>
        ))}
      </div>
    </div>
  );
}
