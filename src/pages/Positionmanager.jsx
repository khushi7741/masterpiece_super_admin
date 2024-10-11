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
      img: "/images/Admin/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 1,
    },
    {
      img: "/images/Admin/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 2,
    },
    {
      img: "/images/Admin/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 3,
    },
    {
      img: "/images/Admin/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 4,
    },
    {
      img: "/images/Admin/1.jpg",
      blog_title: "my experience",
      date_added: "29 dec 2024",
      position: 5,
    },
  ];
  let feedposition = [
    {
      img: "/images/Admin/1.jpg",
      photos: "kurta",
      feed_position: 1,
    },
    {
      img: "/images/Admin/1.jpg",
      photos: "kurta",
      feed_position: 2,
    },
    {
      img: "/images/Admin/1.jpg",
      photos: "kurta",
      feed_position: 3,
    },
    {
      img: "/images/Admin/1.jpg",
      photos: "kurta",
      feed_position: 4,
    },
    {
      img: "/images/Admin/1.jpg",
      photos: "kurta",
      feed_position: 5,
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen capitalize font-semibold">
      <div className="bg-white rounded-2xl p-7">
        <div className="xl:w-4/5 w-full">
          <div className="flex mb-6 justify-between">
            <div className="block">
              <p className="text-2xl font-bold text-black/70 mb-2">
                journal position
              </p>
              <div className="flex font-medium text-dark-gray">
                <Link to="" className="text-brown">
                  dashboard
                </Link>
                <IconChevronRight className="w-5 h-6 mx-2" />
                <Link to="">
                  content manager
                </Link>
                <IconChevronRight className="w-5 h-6 mx-2" />
                <Link to="">
                  position manager
                </Link>
              </div>
            </div>
            <div className="flex items-end text-gray-500">
              <div className="flex rounded-lg bg-brown/20 items-center px-3 py-1.5 mr-4">
                <IconFileExport className="h-5 w-5 mr-1" />
                <p>export</p>
              </div>
            </div>
          </div>
          <Search />
          <div className="border border-light-gray rounded-lg mb-14">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
                    <th className="py-3 px-5 w-1/3">blog title</th>
                    <th className="py-3 px-2 w-1/4">date_added</th>
                    <th className="py-3 px-2 w-1/4">position</th>
                    <th className="py-3 px-2 text-center">action</th>
                  </tr>
                  <tr className="flex items-center"></tr>
                </thead>
                <tbody>
                  {positionmanager.map(
                    ({ img, blog_title, date_added, position }, i) => (
                      <tr className="border-b border-b-light-gray text-gray-500 text-nowrap">
                        <td className="flex items-center py-3 px-5 w-52 text-black/80">
                          <img
                            src={img}
                            alt="girl"
                            className="h-12 w-12 border rounded-lg mr-2"
                          />
                          {blog_title}
                        </td>
                        <td className="py-3 px-2 w-1/4">{date_added}</td>
                        <td className="py-3 px-4 w-1/4">{position}</td>
                        <td className="py-3 px-2 flex justify-center">
                          <IconDotsVertical className="h-6 w-6" />
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>

            <Pagination3 />
          </div>
          <div className="border border-light-gray rounded-lg mb-14 xl:w-9/12 w-full">
            <div className="block">
              <p className="text-2xl font-bold text-black/70 mb-2 p-5">
                feed positioning
              </p>
            </div>
            <div className="pr-6">
              <Search />
            </div>
            <div className="">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
                      <th className="py-3 px-5 w-1/3">photos</th>
                      <th className="py-3 px-2 w-1/3">feed position</th>
                      <th className="py-3 px-2 text-center">action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {feedposition.map(({ img, photos, feed_position }, i) => (
                      <tr className="border-b border-b-light-gray text-nowrap text-gray-500">
                        <td className="flex items-center py-3 px-5 w-52 text-black/80">
                          <img
                            src={img}
                            alt="girl"
                            className="h-12 w-12 border rounded-lg mr-2"
                          />
                          {photos}
                        </td>
                        <td className="py-3 px-2 w-1/3">{feed_position}</td>
                        <td className="py-3 px-2 flex justify-center">
                          <IconDotsVertical className="h-6 w-6" />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Pagination3 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Positionmanager;
