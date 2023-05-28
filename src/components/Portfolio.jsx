import React from 'react'
import restaurant from '../assets/Screenshot (175).png'
import slice from '../assets/Screenshot (174).png'
import movie from '../assets/Screenshot (176).png'
import itemSearch from '../assets/Screenshot (171).png'
import tesla from '../assets/Screenshot (173).png'
import netflix from '../assets/Screenshot (172).png'
const Portfolio = () => {
   
    const portfolios =[
        {
            id:1,
            src: restaurant,
        },
        {
            id:2,
            src: slice
        },
        {
            id:3,
            src: movie
        },
        {
            id:4,
            src: itemSearch
        },
        {
            id:5,
            src: tesla
        },
        {
            id:6,
            src: netflix
        },
    ];
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 text-white md:h-screen '>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
            <div className='pb-8 '>
               <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Portfolio</p>
               <p className='py-6 '>This is some project which i have create in learning. </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0  '>
                {
                    portfolios.map(({id,src})=>(

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg '>
                    <img src={src} alt=""
                    className='rounded-md duration-200 hover:scale-105 ' />
                    <div className='flex items-center justify-center  '>
                        <button className='w1/4 px-2 py-1 mt-2 duration-200 hover:scale-105'>
                            Demo
                        </button>
                        <button className='w1/2 px-4 py-1 m-2 duration-200 hover:scale-105'>Code</button>
                    </div>
                </div>
                    ))
                }
                
            </div>
        </div>
    </div>
  )
}

export default Portfolio