import { FaAngleRight } from "react-icons/fa";
import "./QuickLinks.scss";
import { useNavigate } from "react-router-dom";

export default function QuickLinks() {
  const quickLinks = [
    {
      name: "Getting Started",
      link: "/docs",
      icon: require("../../images/documentation/icons/pages.svg").default,
    },
    {
      name: "The Essentials",
      link: "/docs/essentials",
      icon: require("../../images/documentation/icons/stacks.svg").default,
    },
    {
      name: "Alerts & Information",
      link: "/docs/alerts",
      icon: require("../../images/documentation/icons/megaphone.svg").default,
    },
    {
      name: "Frequency Asked",
      link: "/docs/faq",
      icon: require("../../images/documentation/icons/help.svg").default,
    },
  ];

  const navigate = useNavigate();

  const handleClick = (link: string) => {
    navigate(link);
  };

  return (
    <div className="quick_links">
      {quickLinks.map((link, index) => {
        return (
          <div
            className="quick_links__link_box"
            key={index}
            onClick={() => {
              handleClick(link.link);
            }}
          >
            <div className="quick_links__link_box__left">
              <div className="quick_links__link_box__left__circle">
                <img src={link.icon} alt="icon"></img>
              </div>
            </div>
            <div className="quick_links__link_box__middle">{link.name}</div>
            <div className="quick_links__link_box__right">
              <FaAngleRight></FaAngleRight>
            </div>
          </div>
        );
      })}
    </div>
  );
}
