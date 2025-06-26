import React from "react";
import HeroSlider from "../components/HeroSlider";
import HomeCourseCard from "../components/HomeCourseCard";
import AboutTop from "../components/AboutTop";
import WhyChooseUs from "../components/WhyChooseUs";
import HomeContact from "../components/HomeContact";
import FooterBanner from "../components/FooterBanner";
function Home() {
  return (
    <div>
      <HeroSlider />
      <div className="px-4 py-12 sm:px-8 lg:px-16 bg-white">
        <AboutTop />
      </div>
      <WhyChooseUs />
      <HomeCourseCard />
      <HomeContact />
      <FooterBanner />
    </div>
  );
}

export default Home;
