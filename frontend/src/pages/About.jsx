import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import Newsletter from "../components/Newsletter"

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"}/>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} alt="" className='w-full md:max-w-[450px] ' />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere veniam nemo, consectetur voluptates, repellat saepe reiciendis itaque fugiat sit, libero delectus qui sequi ad! Autem eum iure facere. Corrupti cum quos quod, sapiente quam dolores! Enim obcaecati ad reiciendis quae nisi provident dolore nihil modi temporibus alias? Harum, explicabo iusto.</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet quos, ratione molestias praesentium cum tempore nulla consequatur error id hic illum ipsam quae eaque odio! Error debitis, quos dolore rerum ipsum, id iure vero dolorum aut asperiores nam officiis a amet? Nulla adipisci, aut officiis et tempore corporis qui aliquam?</p>
         <b className='text-gray-800'> Our Mission</b>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione eligendi aliquam natus fuga corporis, omnis quam soluta itaque, laboriosam reiciendis, quibusdam molestiae! Voluptate voluptatibus amet, magnam blanditiis, delectus quisquam animi autem quis facere eum dolorum.</p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"}/>
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Asssurance</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quos beatae neque eaque ipsam natus magnam, et nobis sequi!</p>
        </div>

        <div className=" border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quos beatae neque eaque ipsam natus magnam, et nobis sequi!</p>
        </div>

        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque laudantium quos beatae neque eaque ipsam natus magnam, et nobis sequi!</p>
        </div>
      </div>

      <Newsletter/>
      
    </div>
  )
}

export default About
