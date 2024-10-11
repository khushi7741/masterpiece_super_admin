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
  const HandleExport = () => {};
  let customerdetail = [
    {
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
      img: "/images/Admin/sellers/1.jpg",
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
    <div className="px-7 py-20 w-full h-full min-h-screen capitalize font-semibold">
      <div className="bg-white rounded-2xl p-7">
        <div className="flex mb-6 justify-between">
          <div className="block">
            <p className="text-2xl font-bold text-black/70 mb-2">
              customer list
            </p>
            <div className="flex">
              <Link to="" className="text-brown">
                dashboard
              </Link>
              <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
              <Link
                to=""
                className="text-dark-gray"
              >
                customer list
              </Link>
            </div>
          </div>
          <div className="flex items-end text-gray-500">
          <button onClick={HandleExport} className="bg-brown/20 flex p-1.5 rounded-lg text-lg text-gray-500"><IconFileExport className="h-7 w-6 mr-1" /> export</button>
          </div>
        </div>
        <Search />
        <div className="border border-light-gray rounded-lg mb-14">
          <div className="overflow-x-auto scrollbar-x-custom">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
                  <th className="px-3 py-3 w-2.5">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th className="py-3 px-2 w-36">customer name</th>
                  <th className="py-3 px-2 w-24">customer id</th>
                  <th className="py-3 px-2 w-52 !text-wrap">customer details</th>
                  <th className="py-3 px-2 w-56">
                    customer address
                  </th>
                  <th className="py-3 px-2 w-24">refferals</th>
                  <th className="py-3 px-2 w-32">preferred</th>
                  <th className="py-3 px-2 w-24">orders</th>
                  <th className="py-3 px-2 w-24">reviews</th>
                  <th className="py-3 px-2 w-40">status</th>
                  <th className="py-3 px-2 w-28">joined</th>
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
                        {customer_name}
                      </td>
                      <td className="text-brown py-3 px-2 w-24">
                        {customer_id}
                      </td>
                      <td className="py-3 px-4 w-52 !text-wrap">
                        {customer_details}
                      </td>
                      <td className="py-3 px-2 w-56 !text-wrap">
                        {customer_address}
                      </td>
                      <td className="py-3 px-2 w-24 text-center">
                        {refferals}
                      </td>
                      <td className="py-3 px-2 w-32 text-center">
                        {preferred}
                      </td>
                      <td className="py-3 px-2 w-24 text-center">
                        {orders}
                      </td>
                      <td className="py-3 px-2 w-24 text-center">
                        {reviews}
                      </td>
                      <td className="py-3 px-2 w-40">
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
                      <td className="py-3 px-2 w-40">
                        {joined}
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
      </div>
    </div>
  );
};

export default Customerlist;
