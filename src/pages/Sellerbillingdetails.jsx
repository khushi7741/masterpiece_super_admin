import React from "react";
import SellerListFirst from "../Reusesable/SellerListFirst";
import Pagination5 from "../Reusesable/Pagination5";
import Search from "../Reusesable/Search";

const Sellerbillingdetails = () => {
  let Sellerbillingdetails = [
    {
      payment_date: "29 june 2024",
      payment_for: "homepage ads",
      payment_value: "₹121.00",
      payment_mode: "UPI",
      payment_status: "in process",
      renewal_date: "20 dec 2024",
    },
    {
      payment_date: "29 june 2024",
      payment_for: "homepage ads",
      payment_value: "₹121.00",
      payment_mode: "UPI",
      payment_status: "completed",
      renewal_date: "20 dec 2024",
    },
    {
      payment_date: "29 june 2024",
      payment_for: "homepage ads",
      payment_value: "₹121.00",
      payment_mode: "UPI",
      payment_status: "completed",
      renewal_date: "20 dec 2024",
    },
    {
      payment_date: "29 june 2024",
      payment_for: "homepage ads",
      payment_value: "₹121.00",
      payment_mode: "UPI",
      payment_status: "failed",
      renewal_date: "20 dec 2024",
    },
    {
      payment_date: "29 june 2024",
      payment_for: "homepage ads",
      payment_value: "₹121.00",
      payment_mode: "UPI",
      payment_status: "completed",
      renewal_date: "20 dec 2024",
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
                <th className="py-3 px-2 text-nowrap w-1/6">payment date</th>
                <th className="py-3 px-2 text-nowra w-1/6">payment for</th>
                <th className="py-3 px-2 text-nowrap w-1/6">payment value</th>
                <th className="py-3 px-2 text-nowrap w-1/6">payment mode</th>
                <th className="py-3 px-2 text-nowrap w-1/6">payment status</th>
                <th className="py-3 px-2 text-nowrap w-1/6">renewal date</th>
              </tr>
            </thead>
            <tbody>
              {Sellerbillingdetails.map(
                (
                  {
                    payment_date,
                    payment_for,
                    payment_value,
                    payment_mode,
                    payment_status,
                    renewal_date,
                  },
                  i
                ) => (
                  <tr className="border-b border-b-light-gray">
                    <td className="px-3 w-2.5">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                    </td>
                    <td className="py-3 px-2 text-nowrap w-1/6 text-black/90 capitalize font-semibold">
                      {payment_date}
                    </td>
                    <td className="py-3 px-2 text-nowrap w-1/6 text-gray-400 capitalize font-semibold">
                      {payment_for}
                    </td>
                    <td className="py-3 px-2 text-nowrap w-1/6 text-gray-400 capitalize font-semibold">
                      {payment_value}
                    </td>
                    <td className="py-3 px-2 text-nowrap w-1/6 text-gray-400 capitalize font-semibold">
                      {payment_mode}
                    </td>
                    <td className="py-3 px-2 text-nowrap w-1/6">
                      <div
                        className={`${
                          payment_status === "in process" &&
                          "text-gray-500 bg-gray-100 w-20 border rounded-xl text-center text-sm font-semibold"
                        } ${
                          payment_status === "completed" &&
                          "text-green-700 bg-green-100 w-20 border rounded-xl text-center text-sm font-semibold"
                        } ${
                          payment_status === "failed" &&
                          "text-orange-700 bg-orange-100 border rounded-xl text-center w-14 text-sm font-semibold"
                        }`}
                      >
                        {payment_status}
                      </div>
                    </td>
                    <td className="py-3 px-2 text-nowrap w-1/6 text-gray-400 capitalize font-semibold">
                      {renewal_date}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>
          <Pagination5 />
        </div>
      </div>
    </div>
  );
};

export default Sellerbillingdetails;
