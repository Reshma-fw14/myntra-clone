import React from 'react'
import GirlDresses from './GirlDresss/GirlDresses'
import Kurti from './Kurtis/Kurti'
import Shirt from './Shirts/Shirt'
import SlideShow1 from './SlideShow1/SlideShow'
import SlideShow2 from './SlideShow2/SlideShow'
import SlideShow3 from './SlideShow3/SlideShow'

export default function Home() {
  return (
    <div>
      <h1>Best of Brands</h1>
      <SlideShow1/>
      <br /><br /><br />
      <h1>Jewewllery and Heels Top Picks</h1>
      <SlideShow2/>
      <br /><br />
      <Kurti/>
      <Shirt/>
      <br /><br />
      <h1>Top Picks for Kids</h1>
      <SlideShow3/>
      <GirlDresses/>
    </div>
  )
}
