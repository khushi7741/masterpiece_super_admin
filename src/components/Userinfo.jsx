import {
  IconLock,
  IconMail,
  IconMapPin,
  IconPhone,
  IconShoppingCart,
  IconSmartHome,
} from "@tabler/icons-react";
import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const Userinfo = () => {
  let userinfo = [
    {
      icon: <IconLock />,
      icon_name: "seller type",
      type_name: "tailor",
    },
    {
      icon: <IconMail />,
      icon_name: "billing email",
      type_name: "lindablair@gmail.com",
    },
    {
      icon: <IconPhone />,
      icon_name: "phone number",
      type_name: "050 414 8778,0504139778",
    },
    {
      icon: <IconMapPin />,
      icon_name: "address",
      type_name: "1833 bel meadow,chembur,mumbai maharastra",
    },
    {
      icon: <IconSmartHome />,
      icon_name: "latest sale",
      type_name: "12 december 2022",
    },
    {
      icon: <IconShoppingCart />,
      icon_name: "Latest Purchase",
      type_name: "12 december 2022",
    },
  ];
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden p-7 w-full capitalize">
      <div className="mb-7">
        <img
          src="/images/Background.png"
          alt="back"
          className="h-full w-full "
        />
      </div>
      <div className="flex justify-center mb-2">
        <p className="text-xl font-medium mr-2">deven patel</p>
        <p className="bg-pista rounded-xl text-sm flex items-center px-2">
          premium
        </p>
      </div>
      <div className="flex justify-center border-b border-b-brown">
        <p className="text-xl text-brown mb-6">
          seller iD : 230012
        </p>
      </div>
      <div className="mt-4 px-5">
        {userinfo.map(({ icon, icon_name, type_name }, i) => (
          <div className="w-full flex mb-4">
            <div className="flex items-center">
              <div className="bg-light-brown/40 rounded-full p-3 text-brown mr-7">
                {icon}
              </div>
              <div className="block w-full">
                <div className="text-lg text-gray-500 font-medium">
                  {icon_name}
                </div>
                <div className="font-medium">{type_name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Userinfo;
