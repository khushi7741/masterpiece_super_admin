import React from "react";
import Timefilter from "./Timefilter";
import {
  IconAB2,
  IconArchiveFilled,
  IconChartHistogram,
  IconCoinFilled,
  IconFilePencil,
  IconSpeakerphone,
  IconUsersGroup,
} from "@tabler/icons-react";

const SellInfo = () => {
  let box = [
    {
      icon: <IconChartHistogram />,
      boxname: "Efficiency",
      percentage: "70%",
      back: "0%",
    },
    {
      icon: <IconArchiveFilled />,
      boxname: "total orders",
      percentage: "2300",
      back: "0%",
    },
    {
      icon: <IconSpeakerphone />,
      boxname: "total ads",
      percentage: "300",
      back: "0%",
    },
    {
      icon: <IconFilePencil />,
      boxname: "reviews",
      percentage: "300",
      back: "0%",
    },
    {
      icon: <IconCoinFilled />,
      boxname: "coins purchased",
      percentage: "700",
      back: "0%",
    },
    {
      icon: <IconUsersGroup />,
      boxname: "total refferals",
      percentage: "230",
      back: "0%",
    },
  ];
  return (
    <div className="w-full">
      <Timefilter />
      <div className="p-5 mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden overflow-x-auto flex flex-wrap gap-9 w-full capitalize font-semibold">
        {box.map(({ icon, boxname, percentage, back }, i) => (
          <div className="mb-4 flex w-56">
            <div className="bg-white shadow-md rounded-3xl w-full">
              <div className="overflow-hidden p-4 rounded-lg">
                <div className="flex">
                  <div className="mr-4">
                    <div className="bg-gray-200 border rounded-full p-2">
                      <div className="text-brown">{icon}</div>
                    </div>
                  </div>
                  <div className="block w-full">
                    <div className="text-dark-gray mb-1 text-nowrap">
                      {boxname}
                    </div>
                    <div className="text-2xl text-blue mb-1">
                      {percentage}
                    </div>
                    <div
                      className={`${
                        back === "0%" &&
                        "text-gray-500 bg-gray-100 w-8 border rounded-xl text-center text-sm"
                      }`}
                    >
                      {back}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellInfo;
