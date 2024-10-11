import { IconAdjustmentsHorizontal, IconFileExport } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Pagination3 from "../Reusesable/Pagination3";

const Totalorder = () => {
  const HandleExport = () => {};
  const HandleFilters = () => {};
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
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden capitalize">
      <div className="flex justify-between p-5">
        <div className="flex items-center">
          <p className="text-2xl font-bold text-black/70 mr-4">total orders</p>
          <div>
            <p className="bg-green-100 text-green-500 px-2 rounded-xl">
              41,203
            </p>
          </div>
        </div>
        <div className="flex text-gray-500">
          <button
            onClick={HandleFilters}
            className="flex border border-light-gray rounded-md items-center p-1.5 font-medium px-2 text-gray-500"
          >
            <IconAdjustmentsHorizontal className="h-6 w-6 mr-2" /> filters
          </button>
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
      <div className="overflow-x-auto scrollbar-x-custom">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
              <th className="py-3 px-8 w-1/6">order id</th>
              <th className="py-3 px-2 w-52">product</th>
              <th className="py-3 px-2 w-1/6">customer id</th>
              <th className="py-3 px-2 w-1/6">order value</th>
              <th className="py-3 px-2 w-1/6">order status</th>
              <th className="py-3 px-2 w-1/6">order date</th>
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
                <tr className="border-b border-b-light-gray text-nowrap text-gray-500">
                  <td className="py-3 px-8 w-1/6 text-brown">{order_id}</td>
                  <td className="flex items-center py-3 px-2 w-52">
                    <img
                      src={img}
                      alt="girl"
                      className="h-12 w-12 object-cover border rounded-xl mr-2"
                    />
                    {product_name}
                  </td>
                  <td className="py-3 px-2 w-1/6">{customer_id}</td>
                  <td className="py-3 px-2 w-1/6">{order_value}</td>
                  <td className="py-3 px-2 w-1/6 text-center text-sm">
                    <div
                      className={`${
                        order_status === "accepted" &&
                        "text-sky-500 bg-sky-100 w-20 border rounded-xl"
                      } ${
                        order_status === "delivered" &&
                        "text-green-700 bg-green-100 w-20 border rounded-xl"
                      } ${
                        order_status === "processing" &&
                        "text-orange-700 bg-orange-100 border rounded-xl w-20"
                      }`}
                    >
                      {order_status}
                    </div>
                  </td>
                  <td className="py-3 px-2 w-1/6">{order_date}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <Pagination3 />
    </div>
  );
};

export default Totalorder;
