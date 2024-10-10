<table className="w-full">
            <thead>
              <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
                <th className="px-3 py-3 w-2.5">
                  <input type="checkbox" name="checkbox" id="checkbox" />
                </th>
                <th className="py-3 px-2 w-36 text-nowrap">seller name</th>
                <th className="py-3 px-2 w-24 text-nowrap">seller id</th>
                <th className="py-3 px-2 w-28 text-nowrap">seller type</th>
                <th className="py-3 px-2 w-40 text-nowrap">store name</th>
                <th className="py-3 px-2 w-56 text-nowrap">store location</th>
                <th className="py-3 px-2 w-32 text-nowrap">membership</th>
                <th className="py-3 px-2 w-24 text-nowrap">orders</th>
                <th className="py-3 px-2 w-52">contact info</th>
                <th className="py-3 px-2 w-40 text-nowrap">account status</th>
                <th className="py-3 px-2">action</th>
              </tr>
            </thead>

            <tbody>
              {SellerDetail.map(
                (
                  {
                    img,
                    seller_name,
                    seller_id,
                    seller_type,
                    store_name,
                    store_location,
                    membership,
                    orders,
                    contact_info,
                    account_status,
                  },
                  i
                ) => (
                  <tr className="border-b border-b-light-gray">
                    <td className="px-3 w-2.5">
                      <input type="checkbox" name="checkbox" id="checkbox" />
                    </td>
                    <td className="flex items-center capitalize font-semibold py-3 px-2 w-36 text-nowrap">
                      <img
                        src={img}
                        alt=""
                        className="h-12 w-12 border rounded-xl mr-2"
                      />
                      {seller_name}
                    </td>
                    <td className="text-brown font-semibold py-3 px-2 w-24 text-nowrap">
                      {seller_id}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-28 text-nowrap">
                      {seller_type}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-40 text-nowrap">
                      {store_name}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-56 text-nowrap">
                      {store_location}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-32 text-nowrap text-center">
                      {membership}
                    </td>
                    <td className="py-3 px-2 text-gray-500 font-semibold w-24 text-nowrap text-center">
                      {orders}
                    </td>
                    <td className="py-3 px-4 text-gray-500 font-semibold w-52">
                      {contact_info}
                    </td>
                    <td className="py-3 px-2 capitalize font-semibold w-40 text-nowrap">
                      <div
                        className={`${
                          account_status === "deactivated" &&
                          "text-orange-700 bg-orange-100 w-28 border rounded-xl text-center"
                        } ${
                          account_status === "active" &&
                          "text-green-700 bg-green-100 w-16 border rounded-xl text-center"
                        } ${
                          account_status === "logged out" &&
                          "text-gray-700 bg-gray-100 border rounded-xl text-center w-28"
                        }`}
                      >
                        {account_status}
                      </div>
                    </td>
                    <td className="py-3 px-2">
                      <IconDotsVertical className="h-8 w-8 text-gray-500" />
                    </td>
                  </tr>
                )
              )}
            </tbody>
          </table>