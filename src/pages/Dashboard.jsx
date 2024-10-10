import React from "react";
import {
  IconCoinFilled,
  IconCrown,
  IconEdit,
  IconManFilled,
  IconMenu4,
  IconShoppingBag,
  IconSpeakerphone,
  IconTruckDelivery,
  IconUsers,
  IconUsersGroup,
  IconWomanFilled,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Timefilter from "../components/Timefilter";
import SellInfo from "../components/SellInfo";
import Verifysellers from "../components/Verifysellers";
import PersonalInfo from "../components/PersonalInfo";
import StoreInfo from "../components/StoreInfo";
import Totalorder from "../components/Totalorder";
import Userinfo from "../components/Userinfo";
import UserInfo2 from "../components/UserInfo2";
import Base from "../components/Base";
import Coinsummary from "../components/Coinsummary";
import Adssummary from "../components/Adssummary";
import Contact from "../components/Contact";


const Dashboard = () => {
  return (
    <div className="p-7 w-full h-full min-h-screen">
     <Timefilter />
      <div className="w-full flex xl:flex-row flex-col gap-x-5">
        <div className="xl:w-1/2 w-full ">
          <div className="p-5 mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden overflow-x-auto">
            <p className="font-bold text-2xl text-black/80 capitalize mb-7">
              customer panel
            </p>
            <div className="flex gap-x-3 mb-4">
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconUsersGroup className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total users
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconEdit className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total reviews
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconMenu4 className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total enquiries
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 mb-4">
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconUsers className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total referrals
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full pt-2 p-2">
                        <IconEdit className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        real creations
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconTruckDelivery className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        home deliveries
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:w-1/2 w-full">
          <div className="p-5 mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden overflow-x-auto">
            <div className="flex w-full">
              <p className="font-bold text-2xl text-black/80 capitalize pr-4">
                seller panel
              </p>
              <div className="mb-4 bg-white rounded-md border border-light-gray overflow-hidden">
                <div className="px-1 py-2">
                  <Link
                    to=""
                    className="pl-4 pr-3 capitalize font-semibold text-black bg-brown/30 py-1 rounded text-base"
                  >
                    all
                  </Link>
                  <Link
                    to=""
                    className="px-2 capitalize font-semibold text-dark-gray text-base"
                  >
                    tailor
                  </Link>
                  <Link
                    to=""
                    className="px-2 capitalize font-semibold text-dark-gray text-base"
                  >
                    boutique
                  </Link>
                  <Link
                    to=""
                    className="px-2 pr-2 capitalize font-semibold text-dark-gray text-base"
                  >
                    designer
                  </Link>
                  <Link
                    to=""
                    className="px-2 capitalize font-semibold text-dark-gray text-base"
                  >
                    artisan
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 mb-4">
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconUsersGroup className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total sellers
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        12000
                      </p>
                      <div className="w-8 bg-light-gray  border rounded-xl">
                        <p className="text-sm text-dark-gray font-bold pl-1.5">
                          0%
                        </p>
                      </div>
                    </div>
                    <div className="border-dark-gray/50 border h-20 rounded mx-2"></div>
                    <div className="block pt-2">
                      <div className="flex pb-2">
                        <IconManFilled className="h-8 w-8 text-brown" />
                        <span className="text-base text-dark-gray font-semibold">
                          3000
                        </span>
                      </div>
                      <div className="flex">
                        <IconWomanFilled className="h-8 w-8 text-brown" />
                        <span className="text-base text-dark-gray font-semibold">
                          3000
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconShoppingBag className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total orders
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        23000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconSpeakerphone className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total ads
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        3000
                      </p>
                      <div className="w-12 bg-red-200/50  border rounded-xl">
                        <p className="text-sm text-red-700 font-bold pl-1">
                          +25%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-x-3 mb-4">
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconUsers className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        total referrals
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        20000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +10%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconCoinFilled className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        coins purchased
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        3000
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +15%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full rounded-3xl border shadow-md">
                <div className="rounded-lg overflow-hidden p-4">
                  <div className="flex">
                    <div className="mr-4">
                      <div className="bg-gray-200 border rounded-full p-2">
                        <IconCrown className="h-8 w-8 text-brown" />
                      </div>
                    </div>
                    <div className="block">
                      <p className="capitalize text-base text-dark-gray font-semibold mb-1 text-nowrap">
                        memberships
                      </p>
                      <p className="text-2xl text-blue font-semibold mb-1">
                        100k
                      </p>
                      <div className="w-12 bg-green-200/50  border rounded-xl">
                        <p className="text-sm text-green-700 font-bold pl-1">
                          +15%
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SellInfo />
      <Verifysellers />
      <PersonalInfo />
      <StoreInfo />
      <Totalorder />
      <Userinfo />
      <UserInfo2 />
      <Base />
      <Coinsummary/>
      <Adssummary />
      <Contact />
    </div>
  );
};

export default Dashboard;
