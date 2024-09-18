import React from "react";
import Header from "./header/Header";
import DownManuber from "./downManuber/DownManuber";
import Trusted from "./trusted/Trusted";
import Banner from "./banner/Banner";
import Zoho from "./zoho/Zoho";
import Logo from "./logo/Logo";
import Card from "./card/Card";
import RedManuber from "./redManuber/RedManuber";
import WhiteDashBoard from "./whiteDashBoard/WhiteDashBoard";
import Oder from "./oder/Oder";
import Unified from "./unified/Unified";
import Inventory from "./inventory/Inventory";
import Pricing from "./pricing/Pricing";
import PricingList from "./pricingList/PricingLast";
import Explore from "./explore/Explore";
import Around from "./around/Around";
import Footer from "./footer/Footer";
import CopyRight from "./copyRight/CopyRight";

const All = () => {
  return (
    <div>
      <Header />
      <DownManuber />
      <Trusted />
      <Banner />
      <Logo />
      <Card />
      <RedManuber />
      <WhiteDashBoard />
      <Oder />
      <Zoho />
      <Unified />
      <Inventory />
      <Pricing />
      <PricingList />
      <Explore />
      <Around />
      <Footer />
      <CopyRight />
    </div>
  );
};

export default All;
