import { IconSpeakerphone } from '@tabler/icons-react'
import React from 'react'

const Adssummary = () => {
  return (
    <div className="mb-7 bg-white rounded-2xl border border-light-gray overflow-hidden  w-full">
      <div className="flex items-center p-4 border-b border-b-light-gray">
        <div className="mr-2">
          <IconSpeakerphone className="h-8 w-8 text-brown" />
        </div>
        <div className="text-2xl font-semibold capitalize">ads summary</div>
      </div>
      <div className="w-full flex p-3 mb-4">
        <div className="w-2/6 border-r border-r-light-gray py-2 px-6 block">
          <p className="text-xl font-medium capitalize text-black/70 mb-2">ads running</p>
          <p className="text-4xl font-bold text-brown">2</p>
        </div>
        <div className="w-2/6 border-r border-r-light-gray px-8 py-2 block">
            <p className="text-xl font-medium capitalize text-black/70 mb-2">ads completed</p>
            <p className="text-4xl font-bold text-brown">5</p>
        </div>
        <div className="w-2/6 py-2 px-6 block">
            <p className="text-xl font-medium capitalize text-black/70 mb-2">ads submitted</p>
            <p className="text-4xl font-bold text-brown">1</p>
        </div>
      </div>
    </div>
  )
}

export default Adssummary