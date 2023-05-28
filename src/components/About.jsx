import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black  text-white '>
          <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full  '>
         <div className='pb-8 '>
            <p className='text-4xl font-bold inline border-b-4  border-gray-400'>About</p>
          </div>
          <p className='text-xl mt-20 '>
            My Name is Dharmendra Kumar.<br/>
            I am a computer science professional I have recently completed your graduation from KIET Group of Institutions in Computer Science and Engineering. With a strong educational background and a passion for technology, I am now actively seeking employment opportunities to further their career.<br/>
            <br/>
            To further enhance their practical experience,I had recently completed an internship at Xceedance Consulting Pvt. Ltd. in India. During this internship, they had the opportunity to apply their theoretical knowledge to real-world projects, gaining valuable insights into the industry and further developing their technical skills.
          </p>
       </div>

    </div>
  )
}

export default About