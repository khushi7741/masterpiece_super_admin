import React from "react";
import Pagination5 from "../Reusesable/Pagination5";
import {
  IconChevronRight,
  IconDotsVertical,
  IconFileExport,
  IconPlus,
} from "@tabler/icons-react";
import Search from "../Reusesable/Search";
import { Link } from "react-router-dom";

const Fabric = () => {
  let fabric = [
    {
      img: "/images/products/choli.png",
      product_name: "lahenga",
      position: 1,
      added: "29 dec 2024",
    },
    {
      img: "/images/products/choli.png",
      product_name: "lahenga",
      position: 2,
      added: "29 dec 2024",
    },
    {
      img: "/images/products/choli.png",
      product_name: "lahenga",
      position: 3,
      added: "29 dec 2024",
    },
    {
      img: "/images/products/choli.png",
      product_name: "lahenga",
      position: 4,
      added: "29 dec 2024",
    },
  ];
  let bodysize = [
    {
      outfit_length1: "under waist",
      outfit_length2: "high waist",
      outfit_length3: "waist",
      a1: 1 - 1.5,
      a2: 1 - 1.5,
      a3: 1 - 1.5,
      b1: 1.5 - 2,
      b2: 1.5 - 2,
      b3: 1.5 - 2,
      c1: 1,
      c2: 1,
      c3: 1,
      d1: 2 - 2.5,
      d2: 2 - 2.5,
      d3: 2 - 2.5,
    },
    {
      outfit_length1: "under waist",
      outfit_length2: "high waist",
      outfit_length3: "waist",
      a1: 1 - 1.5,
      a2: 1 - 1.5,
      a3: 1 - 1.5,
      b1: 1.5 - 2,
      b2: 1.5 - 2,
      b3: 1.5 - 2,
      c1: 1,
      c2: 1,
      c3: 1,
      d1: 2 - 2.5,
      d2: 2 - 2.5,
      d3: 2 - 2.5,
    },
    {
      outfit_length1: "under waist",
      outfit_length2: "high waist",
      outfit_length3: "waist",
      a1: 1 - 1.5,
      a2: 1 - 1.5,
      a3: 1 - 1.5,
      b1: 1.5 - 2,
      b2: 1.5 - 2,
      b3: 1.5 - 2,
      c1: 1,
      c2: 1,
      c3: 1,
      d1: 2 - 2.5,
      d2: 2 - 2.5,
      d3: 2 - 2.5,
    },
    {
      outfit_length1: "under waist",
      outfit_length2: "high waist",
      outfit_length3: "waist",
      a1: 1 - 1.5,
      a2: 1 - 1.5,
      a3: 1 - 1.5,
      b1: 1.5 - 2,
      b2: 1.5 - 2,
      b3: 1.5 - 2,
      c1: 1,
      c2: 1,
      c3: 1,
      d1: 2 - 2.5,
      d2: 2 - 2.5,
      d3: 2 - 2.5,
    },
  ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen">
      <div className="bg-white rounded-2xl p-7">
        <div className="flex mb-6 justify-between">
          <div className="block">
            <p className="capitalize text-2xl font-bold text-black/70 mb-2">
              fabric estimator
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
                fabric details
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
            <div className="flex rounded-lg border border-light-gray items-center px-3 py-0.5 mr-2 bg-brown">
              <IconPlus className="h-5 w-5 mr-1 text-white" />
              <p className="capitalize text-base font-semibold text-white py-1">
                Add cuts
              </p>
            </div>
          </div>
        </div>
        <Search />
        <div className="border border-light-gray rounded-lg overflow-x-auto mb-14">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                <th className="px-3 py-3 w-2.5">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </th>
                <th className="py-3 px-2 w-1/4 text-nowrap">cut name</th>
                <th className="py-3 px-2 w-1/5 text-nowrap">product name</th>
                <th className="py-3 px-2 w-1/5">position</th>
                <th className="py-3 px-2 w-1/5 text-nowrap">added</th>
                <th className="py-3 px-2 text-center">action</th>
              </tr>
              <tr className="flex items-center "></tr>
            </thead>
            <tbody>
              {fabric.map(
                ({ img, cut_name, product_name, position, added }, i) => (
                  <tr className="border-b border-b-light-gray">
                    <td className="px-3 w-2.5">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                    </td>
                    <td className="flex items-center capitalize font-semibold py-3 px-2 w-36 text-nowrap">
                      <img
                        src={img}
                        alt=""
                        className="h-12 w-12 border rounded-full mr-2"
                      />
                      {cut_name}
                    </td>
                    <td className="text-brown font-semibold py-3 px-2 w-24 text-nowrap capitalize">
                      {product_name}
                    </td>
                    <td className="py-3 px-4 text-gray-500 font-semibold w-52 capitalize">
                      {position}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-56 capitalize">
                      {added}
                    </td>
                    <td className="py-3 px-2 flex justify-center">
                      <IconDotsVertical className="h-8 w-8 text-gray-500" />
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

export default Fabric;
