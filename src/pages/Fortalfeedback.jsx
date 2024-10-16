import React from "react";
import Timefilter from "../components/Timefilter";
import { Link } from "react-router-dom";
import {
  IconAdjustmentsHorizontal,
  IconCalendar,
  IconFileExport,
  IconPhoneFilled,
  IconSearch,
  IconShoppingCartFilled,
} from "@tabler/icons-react";
import Pagination5 from "../Reusesable/Pagination5";

const Fortalfeedback = () => {
  const HandleExport = () => {};
  const HandleFilters = () => {};
  let fortalfeedback = [
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 4,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 3,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 5,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 2,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 4,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 4,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 2,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 2,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 2,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
    {
      img: "/images/Admin/1.jpg",
      customer_name: "cristina",
      customer_id: 302012,
      total_enquiries: 300,
      ratings: 4,
      attribute1: "customization",
      attribute2: "quality",
      attribute3: "+1",
      review:
        "thank you for the plateform!i really liked your the overall idea of personalized fashion and i would.....",
      date: "29 dec 2024",
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen capitalize font-semibold">
      <Timefilter />
      <div className="bg-white rounded-2xl p-7 border border-x-light-gray mb-7">
        <div className="flex w-full mb-4">
          <p className="font-bold text-3xl text-black/80 pr-4">
            feedback overview
          </p>
          <div className="mb-4 bg-white rounded-md border border-light-gray overflow-hidden">
            <div className="px-1 py-2 text-dark-gray text-base">
              <Link
                to=""
                className="pl-4 pr-3 text-black bg-brown/30 py-1 rounded text-base"
              >
                all
              </Link>
              <Link to="" className="px-2 ">
                tailor
              </Link>
              <Link to="" className="px-2">
                boutique
              </Link>
              <Link to="" className="px-2 pr-2">
                designer
              </Link>
              <Link to="" className="px-2">
                artisan
              </Link>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 mb-4 w-full">
          <div className="w-80 rounded-3xl border shadow-md">
            <div className="rounded-lg overflow-hidden p-5">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-200 border rounded-full p-2">
                    <IconShoppingCartFilled className="h-8 w-8 text-brown" />
                  </div>
                </div>
                <div className="block text-nowrap">
                  <p className="text-2xl text-dark-gray mb-3">feedback count</p>
                  <div className="flex items-center">
                    <p className="text-3xl text-blue mb-3 mr-3">200k</p>
                    <p className="text-xl text-gray-400">portal feedback</p>
                  </div>
                  <div className="w-16 bg-green-200/50  border rounded-2xl py-1">
                    <p className="text-base text-green-700 font-bold text-center">
                      +10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-80 rounded-3xl border shadow-md">
            <div className="rounded-lg overflow-hidden p-5">
              <div className="flex gap-3">
                <div className="">
                  <div className="bg-gray-200 border rounded-full p-2">
                    <IconPhoneFilled className="h-8 w-8 text-brown" />
                  </div>
                </div>
                <div className="block text-nowrap">
                  <p className="text-2xl text-dark-gray mb-3">
                    tailor enquiries
                  </p>
                  <div className="flex items-center">
                    <p className="text-3xl text-blue mb-3 mr-3">200k</p>
                    <p className="text-xl text-gray-400">portal feedback</p>
                  </div>
                  <div className="w-16 bg-green-200/50  border rounded-2xl py-1">
                    <p className="text-base text-green-700 font-bold text-center">
                      +10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-7 border border-x-light-gray mb-7">
        <div className="flex mb-6 justify-between">
          <div className="flex items-center">
            <p className="text-2xl font-bold text-black/70 mr-4">
              portal feedback
            </p>
            <div>
              <p className="bg-green-50 text-green-700 px-4 rounded-xl text-base">
                (41,203)
              </p>
            </div>
          </div>
          <div className="flex items-end text-gray-500">
            <button
              onClick={HandleExport}
              className="bg-brown/20 flex p-1.5 rounded-lg text-lg text-gray-500"
            >
              <IconFileExport className="h-7 w-6 mr-1" /> export
            </button>
          </div>
        </div>
        <div className="flex justify-between mb-6">
          <div className="flex relative border border-light-gray rounded-md">
            <input
              type="text"
              placeholder="Search anything. . . ."
              className="rounded-md placeholder:text-gray-400 outline-none text-dark-gray pl-10 pr-20 py-1.5"
            />
            <IconSearch className="h-6 w-6 text-dark-gray absolute top-1.5 left-2" />
          </div>
          <div className="flex text-gray-500">
            <div className="flex border border-light-gray rounded-md items-center mr-4">
              <IconCalendar className="h-6 w-6 ml-2" />
              <p className="px-2 font-medium">selected dates</p>
            </div>
            <button
              onClick={HandleFilters}
              className="flex border border-light-gray rounded-md items-center p-1.5 font-medium px-2 text-gray-500"
            >
              <IconAdjustmentsHorizontal className="h-6 w-6 mr-2" /> filters
            </button>
          </div>
        </div>
        <div className="border border-light-gray rounded-lg">
          <div className="overflow-x-auto scrollbar-x-custom">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
                  <th className="px-3 py-3 w-2.5">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th className="py-3 px-2">customer name</th>
                  <th className="py-3 px-2">customer id</th>
                  <th className="py-3 px-2">total inquiries</th>
                  <th className="py-3 px-2">ratings</th>
                  <th className="py-3 px-2">attributes</th>
                  <th className="py-3 px-2">review/suggestion</th>
                  <th className="py-3 px-2">date</th>
                </tr>
              </thead>
              <tbody>
                {fortalfeedback.map(
                  (
                    {
                      img,
                      customer_name,
                      customer_id,
                      total_enquiries,
                      ratings,
                      attribute1,
                      attribute2,
                      attribute3,
                      review,
                      date,
                    },
                    i
                  ) => (
                    <tr
                      key={i}
                      className="border-b border-b-light-gray text-nowrap"
                    >
                      <td className="px-3 w-2.5">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                      </td>
                      <td className="py-3 px-2 text-gray-500 w-44">
                        <div className="flex items-center">
                          <img
                            src={img}
                            alt="girl"
                            className="h-12 w-12 border rounded-xl mr-2"
                          />
                          {customer_name}
                        </div>
                      </td>
                      <td className="py-3 px-2 text-brown w-40">
                        {customer_id}
                      </td>
                      <td className="py-3 px-2 text-black/80 w-32 text-center">
                        {total_enquiries}
                      </td>
                      <td
                        className={`font-medium text-center w-32 ${
                          ratings === 4 && "text-green-500 py-3 px-2"
                        } ${ratings === 3 && "text-yellow-400 py-3 px-2"} ${
                          ratings === 2 && "text-orange-400 py-3 px-2"
                        } ${ratings === 5 && "text-green-700 py-3 px-2"}`}
                      >
                        {ratings}
                      </td>
                      <td className="py-3 px-2 text-black/80 w-60 text-xs">
                        <div className="flex items-center">
                          <div className="border border-light-gray rounded-xl p-1 mr-1">
                            {attribute1}
                          </div>
                          <div className="border border-light-gray rounded-xl px-2 py-0.5 mr-1">
                            {attribute2}
                          </div>
                          <div className="text-brown text-sm">{attribute3}</div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-black/80 text-sm">
                        <div className="flex items-center">
                          <div className="flex items-center w-20">
                            <img
                              src={img}
                              alt="girl"
                              className="h-12 w-12 border rounded-xl mr-2"
                            />
                            <div className="text-brown">{attribute3}</div>
                          </div>
                          <div className="text-gray-500 text-wrap w-96 px-5">
                            {review}
                          </div>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-black/80 w-40">{date}</td>
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

export default Fortalfeedback;
