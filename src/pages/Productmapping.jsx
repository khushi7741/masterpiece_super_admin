import {
  IconChevronRight,
  IconDeviceFloppy,
  IconX,
} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Productmapping = () => {
  return (
    <div className="p-16 w-full h-full min-h-screen">
      <div className="flex mb-10 justify-between">
        <div className="block">
          <p className="capitalize text-3xl font-semibold text-black/90 mb-2">
            map product detailing
          </p>
          <div className="flex">
            <Link to="" className="text-brown capitalize font-medium">
              dashboard
            </Link>
            <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
            <Link to="" className="capitalize text-brown font-medium">
              map product detailing
            </Link>
          </div>
        </div>
        <div className="flex items-end">
          <div className="flex rounded-lg border border-gray-500 items-center px-3 py-1.5 mr-4">
            <IconX className="h-5 w-5 mr-1 text-gray-500" />
            <p className="capitalize font-semibold text-gray-500">
              cancel
            </p>
          </div>
          <div className="flex rounded-lg border border-light-gray items-center px-3 py-0.5 mr-2 bg-brown">
            <IconDeviceFloppy className="h-5 w-5 mr-1 text-white" />
            <p className="capitalize font-semibold text-white py-1">
              save changes
            </p>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="w-5/6 border border-brown rounded-lg mr-7 p-5">
          <p></p>
        </div>
        <div className="w-1/6 border border-brown rounded-lg p-5"></div>
      </div>
    </div>
  );
};

export default Productmapping;
