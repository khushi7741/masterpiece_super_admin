import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'
import React from 'react'

const Pagination3 = () => {
  return (
    <div>
        <div className="flex py-4 justify-between">
        <div>
          <p className="pl-6 text-gray-500 font-semibold">
            showing 1-5 from 100
          </p>
        </div>
        <div className="flex">
          <div className="bg-light-brown rounded-lg mr-2 px-3 py-1">
            <IconChevronLeft className="w-4 text-brown" />
          </div>
          <div className="bg-brown rounded-lg mr-2 px-3 py-1 text-white font-semibold">
            1
          </div>
          <div className="bg-light-brown rounded-lg mr-2 px-3 py-1 text-brown font-semibold">
            2
          </div>
          <div className="bg-light-brown rounded-lg mr-2 px-3 py-1 text-brown font-semibold">
            3
          </div>
          <div className="bg-light-brown rounded-lg mr-2 px-3 py-1">
            <IconChevronRight className="w-4 text-brown" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pagination3