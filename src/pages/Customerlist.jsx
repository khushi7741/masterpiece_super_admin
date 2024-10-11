import React from "react";
import Pagination5 from "../Reusesable/Pagination5";
import {
  IconChevronRight,
  IconDotsVertical,
  IconFileExport,
} from "@tabler/icons-react";
import Search from "../Reusesable/Search";
import { Link } from "react-router-dom";

const Customerlist = () => {
  let customerdetail = [
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "deactivated",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "active",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "active",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "deactivated",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "logged out",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "active",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "deactivated",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "logged out",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "active",
      joined: "29 dec 2024",
    },
    {
      img: "/images/sellers/1.jpg",
      customer_name: "jini patel",
      customer_id: 302012,
      customer_details: "+91-7634009810 jinipatel01@gmail.com",
      customer_address: "22, lorem ipsum Mumbai, Maharashtra - 30071",
      refferals: 300,
      preferred: "kurta",
      orders: 300,
      reviews: 100,
      status: "deactivated",
      joined: "29 dec 2024",
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen">
      <div className="bg-white rounded-2xl p-7">
        <div className="flex mb-6 justify-between">
          <div className="block">
            <p className="capitalize text-2xl font-bold text-black/70 mb-2">
              customer list
            </p>
            <div className="flex">
              <Link to="" className="text-brown text-base capitalize">
                dashboard
              </Link>
              <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
              <Link
                to=""
                className="capitalize text-base text-dark-gray font-semibold"
              >
                customer list
              </Link>
            </div>
          </div>
          <div className="flex items-end">
            <div className="bg-brown/20 flex p-1.5 rounded-lg">
              <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
              <p className="capitalize text-lg font-semibold text-gray-500">
                export
              </p>
            </div>
          </div>
        </div>
        <Search />
        <div className="border border-light-gray rounded-lg mb-14">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                  <th className="px-3 py-3 w-2.5">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th className="py-3 px-2 w-36 text-nowrap">customer name</th>
                  <th className="py-3 px-2 w-24 text-nowrap">customer id</th>
                  <th className="py-3 px-2 w-52">customer details</th>
                  <th className="py-3 px-2 w-56 text-nowrap">
                    customer address
                  </th>
                  <th className="py-3 px-2 w-24 text-nowrap">refferals</th>
                  <th className="py-3 px-2 w-32 text-nowrap">preferred</th>
                  <th className="py-3 px-2 w-24 text-nowrap">orders</th>
                  <th className="py-3 px-2 w-24 text-nowrap">reviews</th>
                  <th className="py-3 px-2 w-40 text-nowrap">status</th>
                  <th className="py-3 px-2 w-28 text-nowrap">joined</th>
                  <th className="py-3 px-2">action</th>
                </tr>
              </thead>

              <tbody>
                {customerdetail.map(
                  (
                    {
                      img,
                      customer_name,
                      customer_id,
                      customer_details,
                      customer_address,
                      refferals,
                      preferred,
                      orders,
                      reviews,
                      status,
                      joined,
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
                        {customer_name}
                      </td>
                      <td className="text-brown font-semibold py-3 px-2 w-24 text-nowrap">
                        {customer_id}
                      </td>
                      <td className="py-3 px-4 text-gray-500 font-semibold w-52">
                        {customer_details}
                      </td>
                      <td className="py-3 px-2 text-gray-500 font-semibold w-56">
                        {customer_address}
                      </td>
                      <td className="py-3 px-2 text-gray-500 font-semibold w-24 text-nowrap text-center">
                        {refferals}
                      </td>
                      <td className="py-3 px-2 text-gray-500 font-semibold w-32 text-nowrap text-center capitalize">
                        {preferred}
                      </td>
                      <td className="py-3 px-2 text-gray-500 font-semibold w-24 text-nowrap text-center">
                        {orders}
                      </td>
                      <td className="py-3 px-2 text-gray-500 font-semibold w-24 text-nowrap text-center">
                        {reviews}
                      </td>
                      <td className="py-3 px-2 capitalize font-semibold w-40 text-nowrap">
                        <div
                          className={`${
                            status === "deactivated" &&
                            "text-orange-700 bg-orange-100 w-28 border rounded-xl text-center"
                          } ${
                            status === "active" &&
                            "text-green-700 bg-green-100 w-16 border rounded-xl text-center"
                          } ${
                            status === "logged out" &&
                            "text-gray-700 bg-gray-100 border rounded-xl text-center w-28"
                          }`}
                        >
                          {status}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-gray-500 font-semibold w-40 text-nowrap capitalize">
                        {joined}
                      </td>
                      <td className="py-3 px-2">
                        <IconDotsVertical className="h-8 w-8 text-gray-500" />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
          <Pagination5 />
        </div>
      </div>
    </div>
  );
};

export default Customerlist;
