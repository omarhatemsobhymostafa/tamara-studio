import React from 'react'
import bannerImage from './Images/bannar.jpg'
import bannerImage2 from './Images/bannar2.jpg'

export default function Banner({ dark }) {
  return (
    <div
      id='bannar'
      className={`w-full h-[100vh] bg-cover bg-center text-center align-middle content-center sm:w-full lg:w-full ${dark ? 'brightness-[85%]' : 'brightness-[95%]'} `}
      style={{ backgroundImage: `url(${dark ? bannerImage2 : bannerImage})` }}
    >
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold leading-snug lg:leading-[75px] w-full lg:w-3/5 text-wrap inline-block">
        مرحبا بكم في موقع تمرة استوديو حيث ندمج البرمجة والألعاب
      </h2>
    </div>
  )
}
