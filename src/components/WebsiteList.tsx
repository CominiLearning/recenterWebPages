import { useEffect, useState } from "react";
import "./WebsiteList.scss";
import useMeasure from "react-use-measure";
import { animate, useMotionValue, motion } from "framer-motion";

export default function WebsiteList() {
  const [websites, setWebsites] = useState<string[]>([]);
  const [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  useEffect(() => {
    if (!width) return;
    if (!xTranslation) return;
    const finalPosition = -width / 2 - 8;
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: "linear",
      duration: 25,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 0,
    });
    return () => {
      if (controls) {
        controls.stop();
      }
    };
  }, [xTranslation, width]);

  useEffect(() => {
    async function fetchWebsites() {
      const websites: string[] = [];
      for (let i = 1; i <= 10; i++) {
        const icon = await import(`../images/logos/${i}.png`);
        websites.push(icon.default);
      }
      setWebsites(websites);
    }
    fetchWebsites();
  }, []);

  return (
    <div className="website_list">
      <div className="website_list__title">
        Works with all your favorite websites
      </div>
      <motion.div
        className="website_list__items"
        ref={ref}
        style={{ x: xTranslation }}
      >
        {[...websites, ...websites].map((website, index) => (
          <div className="website_list__items__item" key={index}>
            <img src={website} alt={`website ${index}`} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
