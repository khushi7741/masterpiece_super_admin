import {
  IconAdjustmentsHorizontal,
  IconCalendar,
  IconDotsVertical,
  IconFileExport,
} from "@tabler/icons-react";
import React from "react";
import SellerListFirst from "../Reusesable/SellerListFirst";
import Pagination3 from "../Reusesable/Pagination3";
import Search from "../Reusesable/Search";
import Pagination5 from "../Reusesable/Pagination5";

const SellerList = () => {
  const HandleExport = () => {};
  const HandleFilters = () => {}; 
  let SellerDetail = [
    {
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/Admin/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/Admin/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/Admin/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
    {
      img: "/images/Admin/sellers/1.jpg",
      store_name: "fashion queen",
      seller_id: 302012,
      seller_type: "artisan",
      seller_name: "jini patel",
      orders: 3000,
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen capitalize font-semibold">
      <div className="bg-white rounded-2xl p-7">
        <SellerListFirst />
        <Search />
        <div className="border border-light-gray rounded-lg mb-14">
          <div className="overflow-x-auto scrollbar-x-custom">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
                  <th className="px-3 py-3 w-2.5">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th className="py-3 px-2 w-36">seller name</th>
                  <th className="py-3 px-2 w-24">seller id</th>
                  <th className="py-3 px-2 w-28">seller type</th>
                  <th className="py-3 px-2 w-40">store name</th>
                  <th className="py-3 px-2 w-56">store location</th>
                  <th className="py-3 px-2 w-32">membership</th>
                  <th className="py-3 px-2 w-24">orders</th>
                  <th className="py-3 px-2 w-52 !text-wrap">contact info</th>
                  <th className="py-3 px-2 w-40">account status</th>
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
                    <tr className="border-b border-b-light-gray text-nowrap text-gray-500">
                      <td className="px-3 w-2.5">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                      </td>
                      <td className="flex items-center py-3 px-2 w-36">
                        <img
                          src={img}
                          alt="girl"
                          className="h-12 w-12 border rounded-xl mr-2"
                        />
                        {seller_name}
                      </td>
                      <td className="text-brown py-3 px-2 w-24">{seller_id}</td>
                      <td className="py-3 px-2 w-28">{seller_type}</td>
                      <td className="py-3 px-2 w-40">{store_name}</td>
                      <td className="py-3 px-2 w-56">{store_location}</td>
                      <td className="py-3 px-2 w-32 text-center">
                        {membership}
                      </td>
                      <td className="py-3 px-2 w-24 text-center">{orders}</td>
                      <td className="py-3 px-4 w-52 !text-wrap">
                        {contact_info}
                      </td>
                      <td className="py-3 px-2 w-40 text-center">
                        <div
                          className={`${
                            account_status === "deactivated" &&
                            "text-orange-700 bg-orange-100 w-28 border rounded-xl "
                          } ${
                            account_status === "active" &&
                            "text-green-700 bg-green-100 w-16 border rounded-xl"
                          } ${
                            account_status === "logged out" &&
                            "text-gray-700 bg-gray-100 border rounded-xl w-28"
                          }`}
                        >
                          {account_status}
                        </div>
                      </td>
                      <td className="py-3 px-2">
                        <IconDotsVertical className="h-6 w-6" />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <Pagination5 />
        </div>
        <div className="2xl:flex mb-16 w-full">
          <div className="border border-light-gray rounded-lg 2xl:w-3/5 mr-6 w-full mb-6">
            <div className="flex justify-between p-4 text-gray-500 font-medium">
              <p className="text-xl font-bold text-black/70 mb-2">
                sales toppers
              </p>
              <div className="flex">
                <div className="flex border border-light-gray rounded-md items-center mr-4">
                  <IconCalendar className="h-6 w-6 ml-2" />
                  <p className="px-2">selected dates</p>
                </div>
                <button onClick={HandleFilters} className="flex border border-light-gray rounded-md items-center p-1.5 font-medium px-2 text-gray-500"><IconAdjustmentsHorizontal className="h-6 w-6 mr-2" /> filters</button>
              </div>
            </div>
            <div className="overflow-x-auto scrollbar-x-custom">
              <table className="w-full border-t border-light-gray">
                <thead>
                  <tr className="bg-gray-100 text-black/70 text-lg text-left w-full text-nowrap">
                    <th className="py-3 px-2 w-52">store name</th>
                    <th className="py-3 px-2 w-1/5">seller id</th>
                    <th className="py-3 px-2 w-1/5">seller type</th>
                    <th className="py-3 px-2 w-1/5">seller name</th>
                    <th className="py-3 px-2 w-1/5">orders</th>
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
                      <tr className="border-b border-b-light-gray text-nowrap text-black/80">
                        <td className="py-3 px-2 w-52 flex items-center">
                          <img
                            src={img}
                            alt="girl"
                            className="h-12 w-12 border rounded-xl mr-2"
                          />
                          {store_name}
                        </td>
                        <td className="py-3 px-2 w-1/5 text-brown">
                          {seller_id}
                        </td>
                        <td className="py-3 px-2 w-1/5">{seller_type}</td>
                        <td className="py-3 px-2 w-1/5">{seller_name}</td>
                        <td className="py-3 px-2 w-1/5">{orders}</td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
            <Pagination3 />
          </div>
          <div className="2xl:w-2/5 w-full border border-light-gray rounded-lg">
            <div className="flex justify-between p-4">
              <div className="block">
                <p className="text-xl">sellers by location</p>
                <p className="text-dark-gray">sellers registered by location</p>
              </div>
              <div className="flex">
              <button onClick={HandleFilters} className="flex border border-light-gray rounded-md items-center p-1.5 font-medium px-2 text-gray-500"><IconAdjustmentsHorizontal className="h-6 w-6 mx-2" /> filters</button>
                <div className="flex items-end text-gray-500">
                  <button
                    onClick={HandleExport}
                    className="bg-brown/20 flex p-1.5 rounded-lg text-lg text-gray-500"
                  >
                    <IconFileExport className="h-7 w-6 mr-1" /> export
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4">
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">Maharashtra</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">678</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-10 text-sm">
                    +12%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">Madhya pradesh</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">500</p>
                  <p className="bg-red-100 text-red-700 rounded-xl text-center w-9 text-sm">
                    -5%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">karnataka</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">500</p>
                  <p className="bg-gray-100 text-gray-700 rounded-xl text-center w-8 text-sm">
                    0%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">tamil nadu</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">456</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-10 text-sm">
                    +19%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">delhi</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">189</p>
                  <p className="bg-red-100 text-red-700 rounded-xl text-center w-10 text-sm">
                    -25%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">uttar pradesh</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">700</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-10 text-sm">
                    +11%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">rajasthan</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">700</p>
                  <p className="bg-red-100 text-red-700 rounded-xl text-center w-10 text-sm">
                    -12%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">punjab</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">300</p>
                  <p className="bg-green-100 text-green-700 rounded-xl text-center w-9 text-sm">
                    +7%
                  </p>
                </div>
              </div>
              <div className="flex justify-between mb-2">
                <div className="flex items-center">
                  <div className="bg-gray-300 border rounded-lg p-5 mr-2"></div>
                  <p className="text-black text-lg">haryana</p>
                </div>
                <div className="flex items-center">
                  <p className="mr-2">300</p>
                  <p className="bg-gray-100 text-gray-700 rounded-xl text-center w-8 text-sm">
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
