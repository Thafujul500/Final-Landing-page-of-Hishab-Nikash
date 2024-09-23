import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import DownHero from "../downHero/DownHero";
import Banner from "../banner/Banner";
import Logo from "../logo/Logo";
import Team from "../team/Team";
import Accordion from "../accordion/Accordion";
import RedManuber from "../redManuber/RedManuber";
import WhiteDashBoard from "../whiteDashBoard/WhiteDashBoard";
import Feature from "../feature/Feature";
import Marquee from "../marquee/Marquee";
import Store from "../store/Store";
import Package from "../Package/Pricing";
import DownPackage from "../downPackage/DownPackage";
import Carousel from "../carousel/Explore";
import Footer from "../footer/Footer";
import CopyRight from "../copyRight/CopyRight";
import Contract from "../contract/Contract";
import Schedule from "../Schedule/Schedule";

const All = () => {
  return (
    <div>
      <Header />
      <Hero />
      <DownHero />
      {/* <Banner />
      <Logo /> */}
      <Team />
      <RedManuber />
      <WhiteDashBoard />
      <Feature />
      <Accordion />
      <Marquee />
      <Store />
      <Package />
      <DownPackage />
      <Carousel />
      <Schedule />
      <Contract />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default All;
