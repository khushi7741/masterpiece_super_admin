import React from "react";

const PersonalInfo = () => {
  const HandleMobileNumberVerify = () => {};
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden p-8 capitalize">
      <div className="mb-6 font-semibold text-xl">
        personal information
      </div>
      <form>
        <div className="w-full flex">
          <div className="w-1/2 pr-8">
            <div className="mb-2 space-y-2">
              <label htmlFor="firstname" className="text-lg">
                first name
              </label>
              <input
                type="text"
                name="text"
                id="firstname"
                placeholder="hari"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal"
              />
            </div>
            <div className="mb-2 space-y-2 relative">
              <label htmlFor="mobilenumber" className="text-lg">
                mobile number
              </label>
              <input
                type="number"
                name="number"
                id="mobilenumber"
                placeholder="9000040000"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal"
              />
              <button onClick={HandleMobileNumberVerify} className="text-green-500 absolute right-3 top-9 font-semibold">verified</button>
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="alternatenumber" className="text-lg">
                alternate number
              </label>
              <input
                type="number"
                name="number"
                id="alternatenumber"
                placeholder="9000040000"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="address" className="text-lg">
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
          </div>
          <div className="w-1/2 pl-8">
            <div className="mb-2 space-y-2">
              <label htmlFor="lastname" className="text-lg">
                last name
              </label>
              <input
                type="text"
                name="text"
                id="lastname"
                placeholder="haran"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal"
              />
            </div>
            <div className="mb-2 space-y-2">
              <label htmlFor="gender" className="text-lg">
                gender
              </label>
            </div>
            <div className="flex gap-x-3 mb-3 text-gray-400 font-normal">
              <div className="flex border border-light-gray w-2/6 rounded-md p-2">
                <input type="radio" name="male" className="mr-2" />
                <p>male</p>
              </div>
              <div className="flex border border-light-gray w-2/6 rounded-md p-2">
                <input type="radio" name="female" className="mr-2" />
                <p>female</p>
              </div>
              <div className="flex border border-light-gray w-2/6 rounded-md p-2">
                <input type="radio" name="human" className="mr-2" />
                <p>Human</p>
              </div>
            </div>
            <div className="mb-2 space-y-2 relative">
              <label htmlFor="email" className="text-lg">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="abc123@gmail.com"
                className="border border-light-gray w-full p-2 rounded-md outline-none placeholder:text-gray-400 placeholder:font-normal"
              />
              <button onClick={HandleMobileNumberVerify} className="text-green-500 absolute right-3 top-9 font-semibold">verified</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PersonalInfo;
