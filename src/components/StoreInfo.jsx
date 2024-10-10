import React from "react";

const StoreInfo = () => {
    let teammember = [
        {
            img: "/images/1.jpg",
            membername: "prachi jain",
        },
        {
            img: "/images/1.jpg",
            membername: "prachi jain",
        },
        {
            img: "/images/1.jpg",
            membername: "prachi jain",
        },
    ];
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden p-8">
      <div className="mb-6 capitalize font-semibold text-xl">store info</div>
      <form>
        <div className="w-full flex mb-6">
          <div className="w-1/2 pr-8">
            <div className="mb-2 space-y-2">
              <label htmlFor="storename" className="capitalize text-lg">
                store name
              </label>
              <input
                type="text"
                name="text"
                id="storename"
                placeholder="fashion queen"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal capitalize"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="businesstype" className="capitalize text-lg">
                business type
              </label>
              <input
                type="text"
                name="text"
                id="businesstype"
                placeholder="clothing"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal capitalize"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="address" className="capitalize text-lg">
                address
              </label>
              <input
                type="text"
                name="text"
                id="address"
                placeholder="chembur,mumbai"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal placeholder:capitalize"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="city/Town" className="capitalize text-lg">
                city/Town
              </label>
              <input
                type="text"
                name="text"
                id="city/Town"
                placeholder="mumbai"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal placeholder:capitalize"
              />
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="mb-2 space-y-2">
              <label htmlFor="storetype" className="capitalize text-lg">
                store type
              </label>
              <input
                type="text"
                name="text"
                id="storetype"
                placeholder="boutique"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal capitalize"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="legalentityname" className="capitalize text-lg">
                legal entity name
              </label>
              <input
                type="text"
                name="text"
                id="legalentityname"
                placeholder="name"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal capitalize"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="pincode" className="capitalize text-lg">
                pincode
              </label>
              <input
                type="number"
                name="text"
                id="pincode"
                placeholder="140781"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal capitalize"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="block w-full">
        <div className="text-lg font-semibold mb-4">Team members</div>
        <div className="flex">
            {teammember.map(({
                img,
                membername,
            },i
            ) => (
                <div className="mr-4"><img src={img} alt="member" className="h-32 w-32 border rounded-xl mb-1" /><div className="text-center">{membername}</div></div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default StoreInfo;
