import "./App.scss";
import GettingStarted from "./components/GettingStarted";
import MainSection from "./components/MainSection";
import Navbar from "./components/Navbar";
import WebsiteList from "./components/WebsiteList";
import Features from "./components/Features";
import FinalSection from "./components/FinalSection";
import Footer from "./components/Footer";

interface FeatureItem {
  type: number;
  image: string;
  feature: string;
  title: JSX.Element | string;
  description: string;
}

export default function App() {
  const features: FeatureItem[] = [
    {
      type: 0,
      image: require("./images/features/1.png"),
      feature: "Know Where Your Time Goes",
      title: (
        <>
          <span>The First Step Is</span> Realization
        </>
      ),
      description: `You may not know how much time you are spending on Reddit when you mindlessly click over "for just a minute". They add up, and there are big context switching costs too.`,
    },
    {
      type: 1,
      image: require("./images/features/2.png"),
      feature: "Get Jolted Into Action",
      title: (
        <>
          <span>Daily & Hourly</span> Recaps
        </>
      ),
      description: `Pie-charts tell you one thing, but these recaps will really jolt you into action :) Did you really spend that much time on that inane thing? Yes, you did!`,
    },
    {
      type: 0,
      image: require("./images/features/3.png"),
      feature: "Tag Sites You Want To Avoid",
      title: (
        <>
          Intelligent<span> Website Tagging</span>
        </>
      ),
      description:
        "We use some AI magic to figure out which sites are likely to be productive, which sites are time sinks. You can also tell us.",
    },
    {
      type: 1,
      image: require("./images/features/4.png"),
      feature: "Recenter, Rebalance",
      title: (
        <>
          Tailor It To <span> Your Needs</span>
        </>
      ),
      description:
        "Focus is not all or none. Set meaningful limits for each of your usual distractors.",
    },
    {
      type: 0,
      image: require("./images/features/5.png"),
      feature: "Recenter is Proactive, not Reactive",
      title: (
        <>
          Helps You Before You <span>Wander & Meander</span>
        </>
      ),
      description:
        "Stay ahead of distractions with proactive alerts, guiding you back to focus before you stray.",
    },
    {
      type: 1,
      image: require("./images/features/6.png"),
      feature: "Every Small Win Counts",
      title: (
        <>
          Celebrate With <span> Badges</span>
        </>
      ),
      description:
        "Transform your journey back to balance and focus into a game. Badges to help acknowledge your daily and weekly wins.",
    },
    {
      type: 0,
      image: require("./images/features/7.png"),
      feature: "Tons of Tweaks",
      title: (
        <>
          <span>Simple Outside, </span> Sophisticated Inside
        </>
      ),
      description:
        "Tons of tweaks to make this work the way you want it to. Want some feature? Tell us!",
    },
  ];

  return (
    <div className="app_container">
      <div className="app_container__content">
        <div className="app_container__content__blue_line"></div>
        <Navbar />
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
      <Footer></Footer>
    </div>
  );
}
