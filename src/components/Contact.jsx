import {
  IconFileExport,
} from "@tabler/icons-react";
import React from "react";
import Pagination3 from "../Reusesable/Pagination3";

const Contact = () => {
    let contact = [
        {
            date: "29 dec 2023",
            customer_enquiries: 300,
        },
        {
            date: "29 dec 2023",
            customer_enquiries: 300,
        },
        {
            date: "29 dec 2023",
            customer_enquiries: 300,
        },
        {
            date: "29 dec 2023",
            customer_enquiries: 300,
        },
        {
            date: "29 dec 2023",
            customer_enquiries: 300,
        },
    ];
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden w-full">
      <div className="flex justify-between p-5">
        <p className="capitalize text-2xl font-bold text-black/70 mr-4">
          contact inquiries
        </p>
        <div className="bg-brown/20 flex p-1.5 rounded-lg">
          <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
          <p className="capitalize text-lg font-semibold text-gray-500">
            export
          </p>
        </div>
      </div>
      <table className="w-full">
        <thead>
          <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
            <th className="py-3 px-8 text-nowrap capitalize w-1/2">date</th>
            <th className="py-3 px-2 text-nowrap capitalize w-1/2">customer enquiries</th>
          </tr>
        </thead>
        <tbody>
          {contact.map(
            (
              {
                date,
                customer_enquiries,
              },
              i
            ) => (
              <tr className="border-b border-b-light-gray">
                <td className="py-5 px-8 text-nowrap capitalize w-1/6 font-semibold text-gray-500">
                  {date}
                </td>
                <td className="py-5 px-2 text-nowrap capitalize w-1/6 font-semibold text-gray-500 pl-8">
                  {customer_enquiries}
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

export default Contact;
