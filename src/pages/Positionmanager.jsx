import React from "react";
import Pagination5 from "../Reusesable/Pagination5";
import Search from "../Reusesable/Search";
import {
  IconChevronRight,
  IconDotsVertical,
  IconFileExport,
  IconPlus,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import Pagination3 from "../Reusesable/Pagination3";

const Positionmanager = () => {
  let positionmanager = [
    {
      img: "/images/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 1,
    },
    {
      img: "/images/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 2,
    },
    {
      img: "/images/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 3,
    },
    {
      img: "/images/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 4,
    },
    {
      img: "/images/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 5,
    },
  ];
  let feedposition = [
    {
        img: "/images/1.jpg",
        photos: "kurta",
        feed_position: 1,
    },
    {
        img: "/images/1.jpg",
        photos: "kurta",
        feed_position: 2,
    },
    {
        img: "/images/1.jpg",
        photos: "kurta",
        feed_position: 3,
    },
    {
        img: "/images/1.jpg",
        photos: "kurta",
        feed_position: 4,
    },
    {
        img: "/images/1.jpg",
        photos: "kurta",
        feed_position: 5,
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen">
      <div className="bg-white rounded-2xl p-7">
        <div className="xl:w-4/5 w-full">
          <div className="flex mb-6 justify-between">
            <div className="block">
              <p className="capitalize text-2xl font-bold text-black/70 mb-2">
                journal position
              </p>
              <div className="flex">
                <Link
                  to=""
                  className="text-brown text-base capitalize font-medium"
                >
                  dashboard
                </Link>
                <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
                <Link
                  to=""
                  className="capitalize text-base text-dark-gray font-medium"
                >
                  content manager
                </Link>
                <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
                <Link
                  to=""
                  className="capitalize text-base text-dark-gray font-medium"
                >
                  position manager
                </Link>
              </div>
            </div>
            <div className="flex items-end">
              <div className="flex rounded-lg bg-brown/20 items-center px-3 py-1.5 mr-4">
                <IconFileExport className="h-5 w-5 mr-1 text-gray-500" />
                <p className="capitalize text-base font-semibold text-gray-500">
                  export
                </p>
              </div>
            </div>
          </div>
          <Search />
          <div className="border border-light-gray rounded-lg overflow-x-auto mb-14">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                  <th className="py-3 px-5 w-1/3 text-nowrap">blog title</th>
                  <th className="py-3 px-2 w-1/4 text-nowrap">date_added</th>
                  <th className="py-3 px-2 w-1/4">position</th>
                  <th className="py-3 px-2 text-center">action</th>
                </tr>
                <tr className="flex items-center "></tr>
              </thead>
              <tbody>
                {positionmanager.map(
                  ({ img, blog_title, date_added, position }, i) => (
                    <tr className="border-b border-b-light-gray">
                      <td className="flex items-center capitalize font-semibold py-3 px-5 w-52 text-nowrap text-black/80">
                        <img
                          src={img}
                          alt=""
                          className="h-12 w-12 border rounded-lg mr-2"
                        />
                        {blog_title}
                      </td>
                      <td className="text-gray-500 font-semibold py-3 px-2 w-1/4 text-nowrap capitalize">
                        {date_added}
                      </td>
                      <td className="py-3 px-4 text-gray-500 font-semibold w-1/4 capitalize">
                        {position}
                      </td>
                      <td className="py-3 px-2 flex justify-center">
                        <IconDotsVertical className="h-8 w-8 text-gray-500" />
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
            <Pagination3 />
          </div>
          <div className="border border-light-gray rounded-lg overflow-x-auto mb-14 xl:w-9/12 w-full">
            <div className="block">
              <p className="capitalize text-2xl font-bold text-black/70 mb-2 p-5">
                feed positioning
              </p>
            </div>
            <div className="pr-6">
            <Search />
            </div>
            <div className="">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                    <th className="py-3 px-5 w-1/3 text-nowrap">photos</th>
                    <th className="py-3 px-2 w-1/3 text-nowrap">feed position</th>
                    <th className="py-3 px-2 text-center">action</th>
                  </tr>
                  <tr className="flex items-center "></tr>
                </thead>
                <tbody>
                  {feedposition.map(
                    ({ img, photos, feed_position,}, i) => (
                      <tr className="border-b border-b-light-gray">
                        <td className="flex items-center capitalize font-semibold py-3 px-5 w-52 text-nowrap text-black/80">
                          <img
                            src={img}
                            alt=""
                            className="h-12 w-12 border rounded-lg mr-2"
                          />
                          {photos}
                        </td>
                        <td className="text-gray-500 font-semibold py-3 px-2 w-1/3 text-nowrap capitalize">
                          {feed_position}
                        </td>
                        <td className="py-3 px-2 flex justify-center">
                          <IconDotsVertical className="h-8 w-8 text-gray-500" />
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
              <Pagination3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positionmanager;
