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

const Cuts = () => {
  let cut = [
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 1,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 2,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 3,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 4,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 5,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 6,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 7,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 8,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 9,
      added: "29 dec 2024",
    },
    {
      img: "/images/Admin/products/girl.png",
      cut_name: "blouson",
      product_name: "top",
      position: 10,
      added: "29 dec 2024",
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen capitalize font-semibold">
      <div className="bg-white rounded-2xl p-7">
        <div className="flex mb-6 justify-between">
          <div className="block">
            <p className="text-2xl font-bold text-black/70 mb-2">
              list of cuts
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
                list of cuts
              </Link>
            </div>
          </div>
          <div className="flex items-end">
            <div className="flex rounded-lg bg-brown/20 items-center px-3 py-1.5 mr-4">
              <IconFileExport className="h-5 w-5 mr-1 text-gray-500" />
              <p className="text-gray-500">
                export
              </p>
            </div>
            <div className="flex rounded-lg border border-light-gray items-center px-3 py-0.5 mr-2 bg-brown">
              <IconPlus className="h-5 w-5 mr-1 text-white" />
              <p className="text-white py-1">
                Add cuts
              </p>
            </div>
          </div>
        </div>
        <Search />
        <div className="border border-light-gray rounded-lg mb-14">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-100 text-black/70 text-lg text-left text-nowrap">
                  <th className="px-3 py-3 w-2.5">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </th>
                  <th className="py-3 px-2 w-1/4">cut name</th>
                  <th className="py-3 px-2 w-1/5">product name</th>
                  <th className="py-3 px-2 w-1/5">position</th>
                  <th className="py-3 px-2 w-1/5">added</th>
                  <th className="py-3 px-2 text-center">action</th>
                </tr>
              </thead>

              <tbody>
                {cut.map(
                  ({ img, cut_name, product_name, position, added }, i) => (
                    <tr className="border-b border-b-light-gray text-nowrap">
                      <td className="px-3 w-2.5">
                        <input type="checkbox" name="checkbox" id="checkbox" />
                      </td>
                      <td className="flex items-center py-3 px-2 w-36">
                        <img
                          src={img}
                          alt="girl"
                          className="h-12 w-12 border rounded-full mr-2"
                        />
                        {cut_name}
                      </td>
                      <td className="text-brown py-3 px-2 w-24">
                        {product_name}
                      </td>
                      <td className="py-3 px-4 text-gray-500 w-52">
                        {position}
                      </td>
                      <td className="py-3 px-2 text-gray-500 w-56">
                        {added}
                      </td>
                      <td className="py-3 px-2 flex justify-center items-center">
                        <IconDotsVertical className="h-6 w-6 text-gray-500" />
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

export default Cuts;
