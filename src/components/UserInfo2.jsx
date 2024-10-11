import {
  IconAdjustmentsHorizontal,
  IconCalendarClock,
  IconCash,
  IconCheck,
  IconClock,
  IconFileTime,
  IconLock,
  IconMail,
  IconUsersGroup,
  IconWalk,
  IconX,
} from "@tabler/icons-react";
import React from "react";

const UserInfo2 = () => {
  let userinfo2 = [
    {
      icon: <IconUsersGroup className="w-6 h-6" />,
      icon_name: "team size",
      type_name: "5 member",
    },
    {
      icon: <IconMail className="w-6 h-6" />,
      icon_name: "services",
      type_name: "stitching,stylling",
    },
    {
      icon: <IconMail className="w-6 h-6" />,
      icon_name: "outfits stitched",
      type_name: "lahenga,kurta,saree",
    },
    {
      icon: <IconClock className="w-6 h-6" />,
      icon_name: "known for",
      type_name: "we are a bunch of creative.....",
    },
    {
      icon: <IconAdjustmentsHorizontal className="w-6 h-6" />,
      icon_name: "about me",
      type_name: "top,blouse,gown,saree",
    },
    {
      icon: <IconFileTime className="w-6 h-6" />,
      icon_name: "advance payment",
      type_name: "50%",
    },
    {
      icon: <IconCash className="w-6 h-6" />,
      icon_name: "payment_mode",
      type_name: "cash/UPI/Card",
    },
    {
      icon: <IconWalk className="w-6 h-6" />,
      icon_name: "walk ins",
      type_name: (
        <IconCheck className="w-4 h-4 bg-green-500 rounded-full text-white" />
      ),
      is_icon: true,
    },
    {
      icon: <IconCalendarClock className="w-6 h-6" />,
      icon_name: "Appointment based",
      type_name: (
        <IconX className="w-4 h-4 bg-red-500 rounded-full text-white" />
      ),
      is_icon: true,
    },
    {
      icon: <IconLock className="w-6 h-6" />,
      icon_name: "integrated",
      type_name: (
        <IconCheck className="w-4 h-4 bg-green-500 rounded-full text-white" />
      ),
      is_icon: true,
    },
    {
      icon: <IconAdjustmentsHorizontal className="w-6 h-6" />,
      icon_name: "home delivery",
      type_name: (
        <IconCheck className="w-4 h-4 bg-green-500 rounded-full text-white" />
      ),
      is_icon: true,
    },
  ];
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden p-7 w-full capitalize">
      <div>
        {userinfo2.map(({ icon, icon_name, type_name,}, i) => (
          <div className="w-full flex items-center justify-between py-3 border-b border-b-light-gray">
            <div className="flex items-center w-3/5">
              <div className="bg-light-brown/40 rounded-full w-12 h-12 text-brown mr-2 flex items-center justify-center">
                {icon}
              </div>
              <div className="text-lg font-medium">{icon_name}</div>
            </div>
            <div className="font-normal text-gray-600 w-2/5 text-wrap">
              <p>{type_name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserInfo2;
