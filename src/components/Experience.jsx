import React from 'react'
import htmlimg from '../assets/html.png' 
import cssimg from '../assets/css.png' 
import javascriptimg from '../assets/javascript.png' 
import javaimg from '../assets/java.png' 
import reactimg from '../assets/react.png' 
import tailwindimg from '../assets/tailwind.png' 
import nodeimg from '../assets/node.png' 
import expressimg from '../assets/express.png' 
import mongodbimg from '../assets/mongodb.png' 
import mysqlimg from '../assets/mysql.png' 
import githubimg from '../assets/github.png' 
import vscodeimg from '../assets/Visual_Studio_Code.png' 
const Experience = () => {
    const techs=[
        {
            id:1,
            src:htmlimg,
            title:"HTML",
            style:'shadow-red-400'
        },
        {
            id:2,
            src:cssimg,
            title:"CSS",
            style:'shadow-blue-800'
        },
        {
            id:3,
            src:javascriptimg,
            title:"JavaScript",
            style:'shadow-yellow-800'
        },
        {
            id:4,
            src:javaimg,
            title:"Java",
            style:'shadow-gray-100'
        },
        {
            id:5,
            src:reactimg,
            title:"React",
            style:'shadow-sky-400'
        },
        {
            id:6,
            src:tailwindimg,
            title:"Tailwind CSS",
            style:'shadow-blue-800'
        },
        {
            id:7,
            src:nodeimg,
            title:"Node js",
            style:'shadow-green-800'
        },
        {
            id:8,
            src:expressimg,
            title:"Express JS",
            style:'shadow-yellow-800'
        },
        {
            id:9,
            src:mongodbimg,
            title:"MongoDB",
            style:'shadow-green-800'
        },
        {
            id:10,
            src:mysqlimg,
            title:"MySql",
            style:'shadow-blue-800 text-white'
        },
        {
            id:10,
            src:githubimg,
            title:"Github",
            style:'shadow-white '
        },
        {
            id:11,
            src:vscodeimg,
            title:"VS Code",
            style:'shadow-blue-400 '
        },
    ]
  return (
    <div name="experience" className='bg-gradient-to-b from-gray-800 to-black
     w-full h-2/4 ' >
        <div  className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white '>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline   '>Experience</p>
                <p className='py-6 '>These are the technologies I've work with </p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 '>
                {
                    techs.map(({id,src,title,style})=>(

                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto  ' />
                    <p className='mt-4'>{title}</p>
                </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Experience