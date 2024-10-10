import { IconCaretDownFilled, IconChevronRight, IconDotsVertical, IconFileExport } from '@tabler/icons-react'
import React from 'react'
import { Link } from 'react-router-dom'
import Search from '../Reusesable/Search'
import Pagination5 from '../Reusesable/Pagination5'

const Productlist = () => {
    let productdetail = [
        {
            img: "/images/products/choli.png",
            product_name: "lahenga",
            type: "bottom",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 1,
            rate_position: 1,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/top.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 2,
            rate_position: 2,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/gown.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 3,
            rate_position: 3,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/saree.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 4,
            rate_position: 4,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/shirt.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 5,
            rate_position: 5,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/shirt.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 6,
            rate_position: 6,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/shirt.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 7,
            rate_position: 7,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/shirt.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 8,
            rate_position: 8,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/shirt.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 9,
            rate_position: 9,
            cuts: "blouse,top,blouson",
        },
        {
            img: "/images/products/shirt.png",
            product_name: "lahenga",
            type: "top",
            detailing: "lining,strap",
            outfit_length: "under waist, high waist",
            position: 10,
            rate_position: 10,
            cuts: "blouse,top,blouson",
        },
    ];
  return (
    <div className="px-7 py-20 w-full h-full min-h-screen">
    <div className="bg-white rounded-2xl p-7">
    <div className="flex mb-6 justify-between">
      <div className="block">
        <p className="capitalize text-2xl font-bold text-black/70 mb-2">
          product list
        </p>
        <div className="flex">
          <Link to="" className="text-brown text-base capitalize">
            dashboard
          </Link>
          <IconChevronRight className="w-5 h-6 text-dark-gray mx-2" />
          <Link
            to=""
            className="capitalize text-base text-dark-gray font-semibold"
          >
            product list
          </Link>
        </div>
      </div>
      <div className="flex items-end">
        <div className="bg-brown/20 flex p-1.5 rounded-lg">
          <IconFileExport className="h-7 w-6 mr-1 text-gray-500" />
          <p className="capitalize text-lg font-semibold text-gray-500">
            export
          </p>
        </div>
      </div>
    </div>
      <Search />
      <div className="border border-light-gray rounded-lg overflow-x-auto mb-14">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-black/70 text-lg capitalize text-left">
              <th className="px-3 py-3 w-2.5">
                <input type="checkbox" name="checkbox" id="checkbox" />
              </th>
              <th className="py-3 px-2 w-48 text-nowrap">product name</th>
              <th className="py-3 px-2 w-32 text-nowrap">type</th>
              <th className="py-3 px-2 w-44 text-nowrap">detailing</th>
              <th className="py-3 px-2 w-52 text-nowrap">outfit length(m)</th>
              <th className="py-3 px-2 w-44 text-nowrap">home outfit position</th>
              <th className="py-3 px-2 w-44 text-nowrap">ratecaed position</th>
              <th className="py-3 px-2 w-52 text-nowrap text-center">cuts</th>
              <th className="py-3 px-2 text-center">action</th>
            </tr>
          </thead>

          <tbody>
            {productdetail.map(
              (
                {
                  img,
                  product_name,
                  type,
                  detailing,
                  outfit_length,
                  position,
                  rate_position,
                  cuts,
                },
                i
              ) => (
                <tr className="border-b border-b-light-gray">
                  <td className="px-3 w-2.5">
                    <input type="checkbox" name="checkbox" id="checkbox" />
                  </td>
                  <td className="flex items-center capitalize font-semibold py-3 px-2 w-48 text-nowrap">
                    <img
                      src={img}
                      alt=""
                      className="h-12 w-12 border rounded-xl mr-2"
                    />
                    {product_name}
                  </td>
                  <td className="text-brown font-semibold py-3 px-2 w-32 text-nowrap">
                    {type}
                  </td>
                  <td className="py-3 px-4 text-black/90 font-semibold w-44 text-nowrap">
                    <div className='flex items-center'> 
                    {detailing}<IconCaretDownFilled className='h-3 w-3 ml-1'/>
                    </div>
                  </td>
                  <td className="py-3 px-2 text-black/90 font-semibold w-52 text-nowrap">
                    {outfit_length}
                  </td>
                  <td className="py-3 px-2 text-gray-500 font-semibold w-44 text-nowrap text-center">
                    {position}
                  </td>
                  <td className="py-3 px-2 text-gray-500 font-semibold w-44 text-nowrap text-center">
                    {rate_position}
                  </td>
                  <td className="py-3 px-2 text-gray-500 font-semibold w-52 text-nowrap text-center">
                    <div className='flex items-center'>
                    {cuts}<IconCaretDownFilled className='h-3 w-3 ml-1'/>
                    </div>
                  </td>
                  <td className="py-3 px-2 flex justify-center">
                    <IconDotsVertical className="h-8 w-8 text-gray-700" />
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
       <Pagination5 />
      </div>
    </div>
  </div>
  )
}

export default Productlist