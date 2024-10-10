import {
  IconAdjustmentsHorizontal,
  IconCalendar,
  IconDotsVertical,
  IconFileExport
} from "@tabler/icons-react";
import React from "react";
import SellerListFirst from "../Reusesable/SellerListFirst";
import Pagination3 from "../Reusesable/Pagination3";
import Search from "../Reusesable/Search";
import Pagination5 from "../Reusesable/Pagination5";
 
const SellerList = () => {
  let SellerDetail = [
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "deactivated",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "active",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "logged out",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "active",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "active",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "active",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "deactivated",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "active",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "active",
    },
    {
      img: "/images/sellers/1.jpg",
      seller_name: "jini patel",
      seller_id: 302012,
      seller_type: "Artisan",
      store_name: "fashion queen",
      store_location: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      membership: "basic",
      orders: 300,
      contact_info: "+91-7634009810 jinipatel01@gmail.com",
      account_status: "logged out",
    },
  ];
  let salestoppers = [
    {
      img: "/images/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen">
      <div className="bg-white rounded-2xl p-7">
        <SellerListFirst />
        <Search />
        <div className="border border-light-gray rounded-lg overflow-x-auto mb-14">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                <th className="px-3 py-3 w-2.5">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </th>
                <th className="py-3 px-2 w-36 text-nowrap">seller name</th>
                <th className="py-3 px-2 w-24 text-nowrap">seller id</th>
                <th className="py-3 px-2 w-28 text-nowrap">seller type</th>
                <th className="py-3 px-2 w-40 text-nowrap">store name</th>
                <th className="py-3 px-2 w-56 text-nowrap">store location</th>
                <th className="py-3 px-2 w-32 text-nowrap">membership</th>
                <th className="py-3 px-2 w-24 text-nowrap">orders</th>
                <th className="py-3 px-2 w-52">contact info</th>
                <th className="py-3 px-2 w-40 text-nowrap">account status</th>
                <th className="py-3 px-2">action</th>
              </tr>
            </thead>

            <tbody>
              {SellerDetail.map(
                (
                  {
                    img,
                    seller_name,
                    seller_id,
                    seller_type,
                    store_name,
                    store_location,
                    membership,
                    orders,
                    contact_info,
                    account_status,
                  },
                  i
                ) => (
                  <tr className="border-b border-b-light-gray">
                    <td className="px-3 w-2.5">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                    </td>
                    <td className="flex items-center capitalize font-semibold py-3 px-2 w-36 text-nowrap">
                      <img
                        src={img}
                        alt=""
                        className="h-12 w-12 border rounded-xl mr-2"
                      />
                      {seller_name}
                    </td>
                    <td className="text-brown font-semibold py-3 px-2 w-24 text-nowrap">
                      {seller_id}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-28 text-nowrap">
                      {seller_type}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-40 text-nowrap">
                      {store_name}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-56 text-nowrap">
                      {store_location}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-32 text-nowrap text-center">
                      {membership}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-24 text-nowrap text-center">
                      {orders}
                    </td>
                    <td className="py-3 px-4 text-gray-500 font-semibold w-52">
                      {contact_info}
                    </td>
                    <td className="py-3 px-2 capitalize font-semibold w-40 text-nowrap">
                      <div
                        className={`${
                          account_status === "deactivated" &&
                          "text-orange-700 bg-orange-100 w-28 border rounded-xl text-center"
                        } ${
                          account_status === "active" &&
                          "text-green-700 bg-green-100 w-16 border rounded-xl text-center"
                        } ${
                          account_status === "logged out" &&
                          "text-gray-700 bg-gray-100 border rounded-xl text-center w-28"
                        }`}
                      >
                        {account_status}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <IconDotsVertical className="h-8 w-8 text-gray-500" />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <Pagination5/>
        </div>
        <div className="2xl:flex mb-16 w-full">
          <div className="border border-light-gray rounded-lg overflow-x-auto 2xl:w-3/5 mr-6 w-full mb-6">
            <div className="flex justify-between p-4">
              <p className="capitalize text-xl font-bold text-black/70 mb-2">
                sales toppers
              </p>
              <div className="flex">
                <div className="flex border border-light-gray rounded-md items-center mr-4">
                  <IconCalendar className="h-6 w-6 text-gray-500 ml-2" />
                  <p className="capitalize px-2 text-gray-500 font-medium">
                    selected dates
                  </p>
                </div>
                <div className="flex border border-light-gray rounded-md items-center">
                  <IconAdjustmentsHorizontal className="h-6 w-6 text-gray-500 ml-2" />
                  <p className="capitalize px-2 text-gray-500 font-medium">
                    filters
                  </p>
                </div>
              </div>
            </div>
            <table className="w-full border-t border-light-gray">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left w-full">
                  <th className="py-3 px-2 w-52 text-nowrap">store name</th>
                  <th className="py-3 px-2 w-1/5 text-nowrap">seller id</th>
                  <th className="py-3 px-2 w-1/5 text-nowrap">seller type</th>
                  <th className="py-3 px-2 w-1/5 text-nowrap">seller name</th>
                  <th className="py-3 px-2 w-1/5 text-nowrap">orders</th>
                </tr>
              </thead>
              <tbody>
                {salestoppers.map(
                  (
                    {
                      img,
                      store_name,
                      seller_id,
                      seller_type,
                      seller_name,
                      orders,
                    },
                    i
                  ) => (
                    <tr className="border-b border-b-light-gray">
                      <td className="py-3 px-2 w-52 text-nowrap flex items-center font-semibold text-black/80 capitalize">
                        <img
                          src={img}
                          alt=""
                          className="h-12 w-12 border rounded-xl mr-2"
                        />
                        {store_name}
                      </td>
                      <td className="py-3 px-2 w-1/5 text-nowrap font-semibold text-brown capitalize">
                        {seller_id}
                      </td>
                      <td className="py-3 px-2 w-1/5 text-nowrap font-semibold text-black/80 capitalize">
                        {seller_type}
                      </td>
                      <td className="py-3 px-2 w-1/5 text-nowrap font-semibold text-black/80 capitalize">
                        {seller_name}
                      </td>
                      <td className="py-3 px-2 w-1/5 text-nowrap font-semibold text-black/80 capitalize">
                        {orders}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Pagination3 />
          </div>
          <div className="2xl:w-2/5 w-full border border-light-gray rounded-lg">
            <div className="flex justify-between p-4">
              <div className="block">
                <p className="text-xl font-semibold capitalize">
                  sellers by location
                </p>
                <p className="capitalize text-base font-semibold text-dark-gray">
                  sellers registered by location
                </p>
              </div>
              <div className="flex">
                <div className="flex border border-light-gray rounded-md items-center mr-3">
                  <IconAdjustmentsHorizontal className="h-6 w-6 text-gray-500 ml-2" />
                  <p className="capitalize px-2 text-gray-500 font-medium">
                    filters
                  </p>
                </div>
                <div className="bg-brown/20 flex p-2 rounded-lg">
                  <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
                  <p className="capitalize text-lg font-semibold text-gray-500">
                    export
                  </p>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    Maharashtra
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">678</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-10 font-semibold text-sm">
                    +12%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    Madhya pradesh
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">500</p>
                  <p className="bg-red-100 text-red-700 rounded-xl text-center w-9 font-semibold text-sm">
                    -5%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    karnataka
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">500</p>
                  <p className="bg-gray-100 text-gray-700 rounded-xl text-center w-8 font-semibold text-sm">
                    0%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    tamil nadu
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">456</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-10 font-semibold text-sm">
                    +19%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    delhi
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">189</p>
                  <p className="bg-red-100 text-red-700 rounded-xl text-center w-10 font-semibold text-sm">
                    -25%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    uttar pradesh
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">700</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-10 font-semibold text-sm">
                    +11%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    rajasthan
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">700</p>
                  <p className="bg-red-100 text-red-700 rounded-xl text-center w-10 font-semibold text-sm">
                    -12%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    punjab
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">300</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-9 font-semibold text-sm">
                    +7%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="font-semibold text-black text-lg capitalize">
                    haryana
                  </p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2 font-semibold">300</p>
                  <p className="bg-gray-100 text-gray-700 rounded-xl text-center w-8 font-semibold text-sm">
                    0%
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerList;
