import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function MenDesign() {
    const img = [
        "https://images-static.nykaa.com/uploads/tr:w-3038,/5eecfbad-151b-4044-b65c-27fdaa1779a1.gif",
        "https://images-static.nykaa.com/uploads/tr:w-3038,/50adcd25-6854-4168-bc80-81cf5f62f7ed.jpg",
        "https://images-static.nykaa.com/uploads/tr:w-3038,/859ddead-9901-4af8-8d3b-f462f0389f2f.jpg",
      ];
  return (
    <div>
        <h1>men</h1>
        <Carousel img={img}/>
    </div>
  )
}
