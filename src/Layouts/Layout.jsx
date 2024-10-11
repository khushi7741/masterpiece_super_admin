import {
  IconAddressBook,
  IconBell,
  IconChevronDown,
  IconClipboardText,
  IconEdit,
  IconFilePencil,
  IconInputSearch,
  IconLogout,
  IconMenu2,
  IconReportMoney,
  IconSearch,
  IconSpeakerphone,
  IconTimelineEventFilled,
  IconUserFilled,
  IconUsersGroup,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Svgdashboard from "../Svg/Svgdashboard";
import Svguser from "../Svg/Svguser";
import Svgcustomer from "../Svg/Svgcustomer";
import Svgfeedback from "../Svg/Svgfeedback";
import Svgproduct from "../Svg/Svgproduct";
import Svgcontent from "../Svg/IconContent";
import Svgblogs from "../Svg/IconBlogs";
import Svgtag from "../Svg/Svgtag";
import { Svgsales } from "../Svg/Svgsales";
import Svgplan from "../Svg/Svgplan";
import Svgads from "../Svg/IconAds";
import Svglogout from "../Svg/Svglogout";
import Svgcustomerreview from "../Svg/Svgcustomerreview";
import Svgportalfeedback from "../Svg/Svgportalfeedback";
import Svgpagecontent from "../Svg/Svgpagecontent";
import Svgposition from "../Svg/Svgposition";
import Svgprofile from "../Svg/Svgprofile";
import Svgproductlist from "../Svg/Svgproductlist";
import Svgproductmapping from "../Svg/Svgproductmapping";
import Svgcut from "../Svg/Svgcut";
import Svgoutfits from "../Svg/Svgoutfits";
import Svgfabric from "../Svg/Svgfabric";
import Svgratecard from "../Svg/Svgratecard";

const Layout = ({ children }) => {
  return (
    <div className="flex w-full">
      <div className="xl:w-2/12 lg:w-1/4 lg:block hidden h-auto">
        <div className="bg-brown h-full">
          <div className="flex items-center h-16 bg-white">
            <Link to="" className="flex items-center text-lg font-bold">
              <img
                src="images/logo.png"
                alt="logo"
                className="w-full h-full pl-5 pr-2"
              />
            </Link>
            <p className="text-3xl font-bold w-full">Masterpiece</p>
          </div>
          <div className="pt-8">
            <ul className="flex flex-col">
              <li className="flex flex-col">
                <Link
                  to=""
                  className="bg-white mx-4 rounded-lg py-2 pl-3 flex items-center gap-2"
                >
                  <Svgdashboard />
                  <span className="text-black lg:inline hidden text-xl capitalize font-semibold">
                    dashboard
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-3"
                >
                    <Svguser />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    sellers
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-3"
                >
                  <Svgcustomer />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    customers
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center justify-between"
                >
                  <div className="flex text-nowrap items-center gap-2">
                    <Svgfeedback />
                    <span className="text-white lg:inline hidden text-xl capitalize">
                      feedback & review
                    </span>
                  </div>
                  <div>
                    <IconChevronDown className="h-6 w-6" />
                  </div>
                </Link>
                <ul className="ml-12">
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgcustomerreview />
                      <span className="text-white font-semibold text-lg capitalize">
                        customer review
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                     <Svgportalfeedback />
                      <span className="text-white font-semibold text-lg capitalize">
                        portal feedback
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center justify-between"
                >
                  <div className="flex text-nowrap items-center gap-2">
                    <Svgproduct />
                    <span className="text-white lg:inline hidden text-xl capitalize">
                      product manager
                    </span>
                  </div>
                  <div>
                    <IconChevronDown className="h-6 w-6" />
                  </div>
                </Link>
                <ul className="ml-12">
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgproductlist />
                      <span className="text-white font-semibold text-lg capitalize">
                        producy list
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgproductmapping />
                      <span className="text-white font-semibold text-lg capitalize">
                        product mapping
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgcut />
                      <span className="text-white font-semibold text-lg capitalize">
                        cuts
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgoutfits />
                      <span className="text-white font-semibold text-lg capitalize">
                        outfits details
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                     <Svgfabric />
                      <span className="text-white font-semibold text-lg capitalize">
                        fabric estimator
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                     <Svgratecard />
                      <span className="text-white font-semibold text-lg capitalize">
                        rate card
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center justify-between"
                >
                  <div className="flex gap-2 items-center">
                    <Svgcontent />
                    <span className="text-white lg:inline hidden text-xl capitalize">
                      content manager
                    </span>
                  </div>
                  <div>
                    <IconChevronDown className="h-6 w-6" />
                  </div>
                </Link>
                <ul className="ml-12">
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                     <Svgpagecontent />
                      <span className="text-white font-semibold text-lg capitalize">
                        page content
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgposition />
                      <span className="text-white font-semibold text-lg capitalize">
                        position manager
                      </span>
                    </Link>
                  </li>
                  <li className="">
                    <Link
                      to=""
                      className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                    >
                      <Svgprofile />
                      <span className="text-white font-semibold text-lg capitalize">
                        profile pinning
                      </span>
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                >
                  <Svgblogs />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    blogs overview
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                >
                 <Svgtag />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    tag manager
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                >
                  <Svgsales />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    sales report
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                >
                  <Svgplan />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    plan manager
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                >
                 <Svgads />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    aDS manager
                  </span>
                </Link>
              </li>
              <li className="flex flex-col">
                <Link
                  to=""
                  className="text-white text-sm py-2.5 px-6 flex items-center gap-2"
                >
                  <Svglogout />
                  <span className="text-white lg:inline hidden text-xl capitalize">
                    logout
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="xl:w-5/6 lg:w-3/4 h-full w-full">
        <div className="flex h-16 items-center bg-white">
          <div className="flex justify-between w-full items-center">
            <div className="cursor-pointer">
              <IconMenu2 className="text-dark-gray h-10 w-10" />
            </div>
            <div className="flex pr-6">
              <div className="items-center justify-center relative xl:flex pr-3 hidden">
                <input
                  type="text"
                  placeholder="Search anything..."
                  className="bg-light-gray/40 pl-5 py-2 rounded-md placeholder:font-semibold placeholder:text-black outline-none text-black"
                />
                <div>
                  <IconSearch className="h-7 w-7 text-dark-gray absolute right-5 top-3" />
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="ml-2 mr-4">
                  <div className="relative flex justify-center border border-brown rounded-full px-2 py-2">
                    <IconBell className="h-8 w-8 text text-brown" />
                    <span className="bg-brown rounded-full border text-xs px-1 text-white absolute right-2 top-1">
                      3
                    </span>
                  </div>
                </div>
                <div className="border-dark-gray/50 border-2 h-10 rounded mr-5"></div>
                <div className="flex items-center">
                  <div className="pr-3">
                    <img
                      src="images/1.jpg"
                      alt="1"
                      className="h-10 rounded-full border"
                    />
                  </div>
                  <div className="block text-sm text-black pr-3">
                    <p className="font-semibold">jenny Diaz</p>
                    <p className="text-sm font-semibold text-dark-gray">
                      Admin
                    </p>
                  </div>
                  <div>
                    <span className="block">
                      <IconChevronDown className="h-5 w-5 text-dark-gray font-semibold" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex h-full w-full bg-gray-200/50">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
