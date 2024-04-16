import Banner from "../../components/Banner/Banner";
import ContentSection from "../../components/ContentSection/ContentSection";
import "./Essentials.scss";
import { content, banner, sidebarLinks } from "../../texts/essentials";
import Sidebar from "../../components/Sidebar/Sidebar";

export default function Essentials() {
  console.log(content, banner);

  return (
    <div className="essentials_page">
      <Banner {...banner}></Banner>
      <div className="essentials_page__main">
        <div className="essentials_page__main__sidebar">
          <Sidebar links={sidebarLinks}></Sidebar>
        </div>
        <div className="essentials_page__main__content">
          {content.map((section, index) => {
            return <ContentSection key={index} card={section}></ContentSection>;
          })}
        </div>
      </div>
    </div>
  );
}
