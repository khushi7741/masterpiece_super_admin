import React from "react";
import Userinfo from "../components/Userinfo";
import SellInfo from "../components/SellInfo";
import Verifysellers from "../components/Verifysellers";
import UserInfo2 from "../components/UserInfo2";
import Base from "../components/Base";
import Coinsummary from "../components/Coinsummary";
import Adssummary from "../components/Adssummary";
import Contact from "../components/Contact";
import PersonalInfo from "../components/PersonalInfo";
import StoreInfo from "../components/StoreInfo";
import Totalorder from "../components/Totalorder";

const SellerInfo = () => {
  return (
    <div className="p-7 w-full h-full min-h-screen">
      <div className="flex 2xl:flex-row flex-col gap-3 w-full">
        <div className="2xl:w-1/3 w-full">
          <Userinfo />
          <UserInfo2 />
          <Base />
          <Coinsummary />
          <Adssummary />
          <Contact />
        </div>
        <div className="2xl:w-2/3 w-full">
          <SellInfo />
          <Verifysellers />
          <PersonalInfo/>
          <StoreInfo/>
          <Totalorder/>
        </div>
      </div>
    </div>
  );
};

export default SellerInfo;
