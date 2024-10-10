import React from "react";

const Verifysellers = () => {
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden">
      <div className="flex justify-between border-b border-b-light-gray p-4">
        <div className="font-semibold capitalize text-xl">
          Verify sellers documents
        </div>
        <div className="font-semibold capitalize text-base text-gray-400">
          Click to download
        </div>
      </div>
      <div className="p-5">
        <div className="flex mb-14 gap-x-6">
          <div className="border-2 border-green-500 p-2 rounded-lg font-semibold capitalize text-green-500">
            Aadhar.pdf
          </div>
          <div className="border-2 border-green-500 p-2 rounded-lg font-semibold capitalize text-green-500">
            gSITN.pdf
          </div>
          <div className="border-2 border-gray-500 p-2 rounded-lg font-semibold capitalize text-gray-500">
            gumasta.pdf
          </div>
          <div className="border-2 border-gray-500 p-2 rounded-lg font-semibold capitalize text-gray-500">
            attachmnets.pdf
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex">
            <div className="flex justify-center mr-4">
              <div className="flex items-center">
                <div className="border rounded-full p-1 bg-green-500 mr-2"></div>
              </div>
              <span className="text-gray-500 capitalize">downloaded</span>
            </div>
            <div className="flex justify-center">
              <div className="flex items-center">
                <div className="border rounded-full p-1 bg-gray-500 mr-2"></div>
              </div>
              <span className="text-gray-500 capitalize">unopened</span>
            </div>
            <div></div>
          </div>
          <div className="font-semibold capitalize text-sky-600">
            Download all
          </div>
        </div>
      </div>
      <div className="border-t border-t-light-gray p-4 flex justify-end">
        <div className="text-white bg-brown py-2 px-8 rounded-lg text-2xl">verify</div>
      </div>
    </div>
  );
};

export default Verifysellers;
