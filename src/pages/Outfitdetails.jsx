import {
  IconChevronRight,
  IconDotsVertical,
  IconFileExport,
  IconPlus,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";
import Search from "../Reusesable/Search";
import Pagination5 from "../Reusesable/Pagination5";

const Outfitdetails = () => {
  const HandleExport = () => {};
  let outfit = [
    {
      img: "/images/Admin/products/girl.png",
      detailing_type: "lining",
      position: 1,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      detailing_type: "strap holder",
      position: 2,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      detailing_type: "zip",
      position: 3,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      detailing_type: "padding",
      position: 4,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      detailing_type: "others",
      position: 5,
      added: "29 dec 2024",
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen capitalize font-semibold">
      <div className="bg-white rounded-2xl p-7">
        <div className="flex mb-6 justify-between">
          <div className="block">
            <p className="text-2xl font-bold text-black/70 mb-2">
              detailing list
            </p>
            <div className="flex">
              <Link
                to=""
                className="text-brown font-medium"
              >
                dashboard
              </Link>
              <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
              <Link
                to=""
                className="text-dark-gray font-medium"
              >
                detailing list
              </Link>
            </div>
          </div>
          <div className="flex items-end">
          <div className="flex items-end text-gray-500">
          <button onClick={HandleExport} className="bg-brown/20 flex p-1.5 rounded-lg text-lg text-gray-500"><IconFileExport className="h-7 w-6 mr-1" /> export</button>
          </div>
            <div className="flex rounded-lg border border-light-gray items-center px-3 py-0.5 mr-2 bg-brown">
              <IconPlus className="h-5 w-5 mr-1 text-white" />
              <p className="text-white py-1">
                Add new
              </p>
            </div>
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
                  <th className="py-3 px-2 w-1/4">
                    detailing type
                  </th>
                  <th className="py-3 px-2 w-1/4">position</th>
                  <th className="py-3 px-2 w-1/4">added</th>
                  <th className="py-3 px-2 text-center">action</th>
                </tr>
              </thead>

              <tbody>
                {outfit.map(({ img, detailing_type, position, added }, i) => (
                  <tr className="border-b border-b-light-gray text-gray-500">
                    <td className="px-3 w-2.5">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                    </td>
                    <td className="flex items-center py-3 px-2 w-36 text-nowrap text-gray-800">
                      <img
                        src={img}
                        alt="girl"
                        className="h-12 w-12 border rounded-full mr-6"
                      />
                      {detailing_type}
                    </td>
                    <td className="py-3 px-4 w-52">
                      {position}
                    </td>
                    <td className="py-3 px-2 w-56">
                      {added}
                    </td>
                    <td className="py-3 px-2 flex justify-center">
                      <IconDotsVertical className="h-6 w-6" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <Pagination5 />
        </div>
      </div>
    </div>
  );
};

export default Outfitdetails;
