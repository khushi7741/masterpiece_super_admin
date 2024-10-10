import {
  IconAdjustmentsHorizontal,
  IconFileExport,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Pagination3 from "../Reusesable/Pagination3";

const Totalorder = () => {
  let totalorder = [
    {
      order_id: "#302012",
      img: "/images/1.jpg",
      product_name: "kurta +saree",
      customer_id: 302012,
      order_value: "₹121.00",
      order_status: "processing",
      order_date: "12 dec 2023",
    },
    {
      order_id: "#302012",
      img: "/images/1.jpg",
      product_name: "kurta +saree",
      customer_id: 302012,
      order_value: "₹121.00",
      order_status: "processing",
      order_date: "12 dec 2023",
    },
    {
      order_id: "#302012",
      img: "/images/1.jpg",
      product_name: "kurta +saree",
      customer_id: 302012,
      order_value: "₹121.00",
      order_status: "accepted",
      order_date: "12 dec 2023",
    },
    {
      order_id: "#302012",
      img: "/images/1.jpg",
      product_name: "kurta +saree",
      customer_id: 302012,
      order_value: "₹121.00",
      order_status: "delivered",
      order_date: "12 dec 2023",
    },
    {
      order_id: "#302012",
      img: "/images/1.jpg",
      product_name: "kurta +saree",
      customer_id: 302012,
      order_value: "₹121.00",
      order_status: "delivered",
      order_date: "12 dec 2023",
    },
  ];
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden overflow-x-auto">
      <div className="flex justify-between p-5">
        <div className="flex items-center">
          <p className="capitalize text-2xl font-bold text-black/70 mr-4">
            total orders
          </p>
          <div>
            <p className="bg-green-100 text-green-500 px-2 rounded-xl font-semibold">
              41,203
            </p>
          </div> 
        </div>
        <div className="flex">
          <div className="flex border border-light-gray rounded-md items-center p-1.5 mr-3">
            <IconAdjustmentsHorizontal className="h-6 w-6 text-gray-500 ml-2" />
            <p className="capitalize px-2 text-gray-500 font-medium">filters</p>
          </div>
          <div className="bg-brown/20 flex p-1.5 rounded-lg">
            <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
            <p className="capitalize text-lg font-semibold text-gray-500">
              export
            </p>
          </div>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
            <th className="py-3 px-8 text-nowrap capitalize w-1/6">order id</th>
            <th className="py-3 px-2 text-nowrap capitalize w-52">product</th>
            <th className="py-3 px-2 text-nowrap capitalize w-1/6">
              customer id
            </th>
            <th className="py-3 px-2 text-nowrap capitalize w-1/6">
              order value
            </th>
            <th className="py-3 px-2 text-nowrap capitalize w-1/6">
              order status
            </th>
            <th className="py-3 px-2 text-nowrap capitalize w-1/6">
              order date
            </th>
          </tr>
        </thead>
        <tbody>
          {totalorder.map(
            (
              {
                order_id,
                img,
                product_name,
                customer_id,
                order_value,
                order_status,
                order_date,
              },
              i
            ) => (
              <tr className="border-b border-b-light-gray">
                <td className="py-3 px-8 text-nowrap capitalize w-1/6 font-semibold text-brown">
                  {order_id}
                </td>
                <td className="flex items-center font-semibold py-3 px-2 text-nowrap capitalize w-52">
                  <img
                    src={img}
                    alt=""
                    className="h-12 w-12 object-cover border rounded-xl mr-2"
                  />
                  {product_name}
                </td>
                <td className="py-3 px-2 text-nowrap capitalize w-1/6 font-semibold text-gray-500">
                  {customer_id}
                </td>
                <td className="py-3 px-2 text-nowrap capitalize w-1/6 font-semibold text-gray-500">
                  {order_value}
                </td>
                <td className="py-3 px-2 text-nowrap capitalize w-1/6 font-semibold text-gray-500">
                  <div
                    className={`${
                      order_status === "accepted" &&
                      "text-sky-500 bg-sky-100 w-20 border rounded-xl text-center text-sm font-semibold"
                    } ${
                      order_status === "delivered" &&
                      "text-green-700 bg-green-100 w-20 border rounded-xl text-center text-sm font-semibold"
                    } ${
                      order_status === "processing" &&
                      "text-orange-700 bg-orange-100 border rounded-xl text-center w-20 text-sm font-semibold"
                    }`}
                  >
                    {order_status}
                  </div>
                </td>
                <td className="py-3 px-2 text-nowrap capitalize w-1/6 font-semibold text-gray-500">
                  {order_date}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
      <Pagination3 />
    </div>
  );
};

export default Totalorder;
