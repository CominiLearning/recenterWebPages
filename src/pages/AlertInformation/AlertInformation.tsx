import Banner from "../../components/Banner/Banner";
import ContentSection from "../../components/ContentSection/ContentSection";
import "./AlertInformation.scss";
import { content, banner, sidebarLinks } from "../../texts/alertInformation";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function AlertInformation() {
  return (
    <div className="alert_information_page">
      <Banner {...banner}></Banner>
      <div className="alert_information_page__main">
        <div className="alert_information_page__main__sidebar">
          <Sidebar links={sidebarLinks}></Sidebar>
        </div>
        <div className="alert_information_page__main__content">
          {content.map((section, index) => {
            return <ContentSection key={index} card={section}></ContentSection>;
          })}
        </div>
      </div>
    </div>
  );
}
