import { IconAdjustmentsHorizontal, IconCalendar, IconSearch } from '@tabler/icons-react'
import React from 'react'

const Search = () => {
  return (
    <div>
        <div className="flex justify-between mb-6">
        <div className="flex relative border border-light-gray rounded-md">
          <input
            type="text"
            placeholder="Search anything. . . ."
            className="rounded-md placeholder:text-gray-400 outline-none text-dark-gray pl-10 pr-20 py-1.5 placeholder:font-normal"
          />
          <IconSearch className="h-6 w-6 text-dark-gray absolute top-1.5 left-2" />
        </div>
        <div className="flex">
          <div className="flex border border-light-gray rounded-md items-center mr-4">
            <IconCalendar className="h-6 w-6 text-gray-500 ml-2" />
            <p className="capitalize px-2 text-gray-500 font-medium">
              selected dates
            </p>
          </div>
          <div className="flex border border-light-gray rounded-md items-center">
            <IconAdjustmentsHorizontal className="h-6 w-6 text-gray-500 ml-2" />
            <p className="capitalize px-2 text-gray-500 font-medium">filters</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search