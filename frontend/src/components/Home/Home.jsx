import React from 'react'
import GirlDresses from './GirlDresss/GirlDresses'
import Kurti from './Kurtis/Kurti'
import Shirt from './Shirts/Shirt'
import SlideShow from './SlideShow/SlideShow'

export default function Home() {
  return (
    <div>
      <SlideShow/>
      <Kurti/>
      <Shirt/>
      <GirlDresses/>
    </div>
  )
}
