import React from "react";
import Timefilter from "../components/Timefilter";
import { Link } from "react-router-dom";
import {
  IconAdjustmentsHorizontal,
  IconCalendar,
  IconEye,
  IconEyeOff,
  IconFileExport,
  IconFilePencil,
  IconPhotoCheck,
  IconSearch,
} from "@tabler/icons-react";
import Pagination5 from "../Reusesable/Pagination5";

const Customerreview = () => {
  let feedback = [
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 4,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "published",
      review_icon: <IconEye className="w-6 h-6" />,
      action: "remove from feed",
    },
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 4,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "hidden",
      review_icon: <IconEyeOff className="w-6 h-6" />,
      action: "hidden",
    },
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 4,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "published",
      review_icon: <IconEye className="w-6 h-6" />,
      action: "+ image to feed",
    },
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 3,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "published",
      review_icon: <IconEye className="w-6 h-6" />,
      action: "no image",
    },
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 4,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "published",
      review_icon: <IconEye className="w-6 h-6" />,
      action: "+ image to feed",
    },
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 2,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "hidden",
      review_icon: <IconEyeOff className="w-6 h-6" />,
      action: "hidden",
    },
    {
      date: "1 min ago",
      customer_id: 302110,
      order_id: 5050,
      customer: "john bushmil",
      seller_name: "deven patel",
      ratings: 4,
      img: "/images/1.jpg",
      review_report: "out standing service,highly recomme.....",
      report: "+1",
      review_status: "published",
      review_icon: <IconEye className="w-6 h-6" />,
      action: "+ image to feed",
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen">
      <Timefilter />
      <div className="bg-white rounded-2xl p-7 border border-x-light-gray mb-7">
        <div className="flex w-full mb-4">
          <p className="font-bold text-3xl text-black/80 capitalize pr-4">
            review overview
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
        <div className="flex gap-8 mb-4 w-full">
          <div className="w-72 rounded-3xl border shadow-md">
            <div className="rounded-lg overflow-hidden p-5">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-200 border rounded-full p-2">
                    <IconFilePencil className="h-8 w-8 text-brown" />
                  </div>
                </div>
                <div className="block">
                  <p className="capitalize text-2xl text-dark-gray font-semibold mb-3 text-nowrap">
                    total reviews
                  </p>
                  <p className="text-3xl text-blue font-semibold mb-3">200k</p>
                  <div className="w-16 bg-green-200/50  border rounded-2xl py-1">
                    <p className="text-base text-green-700 font-bold text-center">
                      +10%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-72 rounded-3xl border shadow-md">
            <div className="rounded-lg overflow-hidden p-5">
              <div className="flex">
                <div className="mr-4">
                  <div className="bg-gray-200 border rounded-full p-2">
                    <IconPhotoCheck className="h-8 w-8 text-brown" />
                  </div>
                </div>
                <div className="block">
                  <p className="capitalize text-2xl text-dark-gray font-semibold mb-3">
                    real creation reviews
                  </p>
                  <p className="text-3xl text-blue font-semibold mb-1">200k</p>
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
          <p className="capitalize text-2xl font-bold text-black/70 mb-2">
            reviews manager
          </p>
          <div className="flex items-end">
            <div className="bg-brown/20 flex p-1.5 rounded-lg">
              <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
              <p className="capitalize text-lg font-semibold text-gray-500">
                export
              </p>
            </div>
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
        <div className="border border-light-gray rounded-lg overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                <th className="px-3 py-3 w-2.5">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </th>
                <th className="py-3 px-2 text-nowrap capitalize w-32">date</th>
                <th className="py-3 px-2 text-nowrap capitalize w-36">
                  customer id
                </th>
                <th className="py-3 px-2 text-nowrap capitalize w-32">order id</th>
                <th className="py-3 px-2 text-nowrap capitalize w-36">customer</th>
                <th className="py-3 px-2 text-nowrap capitalize w-36">
                  seller name
                </th>
                <th className="py-3 px-2 text-nowrap capitalize w-32">ratings</th>
                <th className="py-3 px-2 text-nowrap capitalize w-96">
                  review/report
                </th>
                <th className="py-3 px-2 text-nowrap capitalize w-44">
                  review status
                </th>
                <th className="py-3 px-2 text-nowrap capitalize w-48">action</th>
              </tr>
            </thead>
            <tbody>
              {feedback.map(
                (
                  {
                    date,
                    customer_id,
                    order_id,
                    customer,
                    seller_name,
                    ratings,
                    img,
                    review_report,
                    review_status,
                    review_icon,
                    action,
                    report,
                  },
                  i
                ) => (
                  <tr className="border-b border-b-light-gray">
                    <td className="px-3 w-2.5">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold text-gray-500 w-32">
                      {date}
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold text-black/80 w-36">
                      {customer_id}
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold text-brown w-32">
                      {order_id}
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold text-black/80 w-36">
                      {customer}
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold text-black/80 w-36">
                      {seller_name}
                    </td>
                    <td
                      className={`${
                        ratings === 4 &&
                        "text-green-500 py-3 px-2 text-nowrap capitalize font-semibold w-32 text-center"
                      } ${
                        ratings === 3 &&
                        "text-yellow-400 py-3 px-2 text-nowrap capitalize font-semibold w-32 text-center"
                      } ${
                        ratings === 2 &&
                        "text-orange-400 py-3 px-2 text-nowrap capitalize font-semibold w-32 text-center"
                      }`}
                    >
                      {ratings}
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold w-96">
                      <div className="flex">
                        <div className="flex items-center mr-4">
                          <img
                            src={img}
                            alt=""
                            className="h-12 w-12 border rounded-xl mr-2"
                          />
                          <div className="text-brown text-sm font-semibold mr-10">
                            {report}
                          </div>
                        </div>
                        <div className="text-gray-500 font-semibold text-wrap">
                          {review_report}
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize w-44">
                      <div className="flex">
                        <div
                          className={`${
                            review_status === "published" &&
                            "text-green-700 bg-green-100 border rounded-xl text-center text-sm font-semibold w-20 mr-5"
                          } ${
                            review_status === "hidden" &&
                            "text-orange-700 bg-orange-100 border rounded-xl text-center text-sm font-semibold w-16 mr-9"
                          }`}
                        >
                          <p>{review_status}</p>
                        </div>
                        <div className="text-gray-500">{review_icon}</div>
                      </div>
                    </td>
                    <td className="py-3 px-2 text-nowrap capitalize font-semibold w-48">
                      <div
                        className={`${
                          action === "remove from feed" &&
                          "text-gray-700 bg-white border rounded-lg py-2.5 px-4 text-center text-sm font-semibold"
                        } ${
                          action === "hidden" &&
                          "text-gray-700 bg-white border rounded-lg py-2.5 px-4 text-center text-sm font-semibold"
                        }  ${
                          action === "+ image to feed" &&
                          "text-white bg-brown border rounded-lg py-2.5 px-4 text-center text-sm font-semibold"
                        } ${
                          action === "no image" &&
                          "text-gray-700 bg-white border rounded-lg py-2.5 px-4 text-center text-sm font-semibold"
                        }`}
                      >
                        {action}
                      </div>
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

export default Customerreview;
