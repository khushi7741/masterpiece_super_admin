import { IconCalendar } from "@tabler/icons-react";
import React from "react";
import { Link } from "react-router-dom";

const Timefilter = () => {
  return (
    <div className="flex xl:flex-row flex-col mb-3">
      <div className="xl:w-1/2 flex justify-start w-full">
        <div className="bg-white rounded-md border border-light-gray overflow-hidden">
          <div className="px-1 py-3">
            <Link
              to=""
              className="pl-4 pr-3 capitalize font-semibold text-black bg-brown/30 py-2 rounded text-lg"
            >
              all time
            </Link>
            <Link
              to=""
              className="px-2 capitalize font-semibold text-dark-gray text-lg"
            >
              12 months
            </Link>
            <Link
              to=""
              className="px-2 capitalize font-semibold text-dark-gray text-lg"
            >
              30 days
            </Link>
            <Link
              to=""
              className="px-2 capitalize font-semibold text-dark-gray text-lg"
            >
              7 days
            </Link>
            <Link
              to=""
              className="px-2 capitalize font-semibold text-dark-gray text-lg"
            >
              24 hour
            </Link>
          </div>
        </div>
      </div>

      <div className="xl:w-1/2 flex xl:justify-end justify-start w-full">
        <div>
          <div className="bg-white rounded-md border border-light-gray overflow-hidden">
            <div className="px-2 py-3">
              <div className="flex">
                <IconCalendar className="h-6 w-6 text-dark-gray" />
                <Link
                  to=""
                  className="pl-2 capitalize font-semibold text-dark-gray text-lg"
                >
                  select dates
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timefilter;
