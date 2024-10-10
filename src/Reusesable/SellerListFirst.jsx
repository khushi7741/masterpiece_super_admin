import {IconChevronRight, IconFileExport} from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const SellerListFirst = () => {
  return (
    <div className="">
      <div className="flex mb-6 justify-between">
        <div className="block">
          <p className="capitalize text-2xl font-bold text-black/70 mb-2">
            seller list
          </p>
          <div className="flex">
            <Link to="" className="text-brown text-base capitalize">
              dashboard
            </Link>
            <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
            <Link
              to=""
              className="capitalize text-base text-dark-gray font-semibold"
            >
              seller list
            </Link>
          </div>
        </div>
        <div className="flex items-end">
          <div className="bg-brown/20 flex p-1.5 rounded-lg">
            <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
            <p className="capitalize text-lg font-semibold text-gray-500">
              export
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerListFirst;
