import { FC } from "react";
import AboutTitleSection from "./views/about-title-section/AboutTitleSection";
import OurMissionSection from "./views/our-mission-section/OurMissionSection";
import WhatWeOfferSection from "./views/what-we-offer-section/WhatWeOfferSection";
import OurStorySection from "./views/our-story-section/OurStorySection";
import JoinUsSection from "./views/join-us-section/JoinUsSection";

const About: FC = () => {
  return (
    <section className="m-auto mt-[40px] w-[900px]">
      <AboutTitleSection />
      <OurMissionSection/>
      <WhatWeOfferSection/>
      <OurStorySection />
      <JoinUsSection />
    </section>
  );
};

export default About;
