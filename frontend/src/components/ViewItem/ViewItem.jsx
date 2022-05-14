import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from "react-redux";
import "./ViewItem.css"

export default function ViewItem() {
    const SingleItem=useParams()
    // console.log("item",SingleItem.SingleItem)

    const url = useSelector((state) => state.TypeReducer);
    // console.log("url",url.url)
    
  return (
    <div>
        <div>
        <div className='Container'>
            <div className='LeftImageContainer'>
                <div className="itemImg"><img src={url.url.image[0]} alt="image1" /></div>
                <div className="itemImg"><img src={url.url.image[1]} alt="image1" /></div>
                <div className="itemImg"><img src={url.url.image[2]} alt="image1" /></div>
                <div className="itemImg"><img src={url.url.image[3]} alt="image1" /></div>
            </div>
            <div className='RightDescriptionContainer'>
                <p className='brand'>{url.url.brand}</p>
                <p className='description'>{url.url.description}</p>
                <br /><br />
                <div className='allAboutPrice'>
                    <p className='price'>{`Rs. ${url.url.price}`}</p>
                    <p className='strikeOff_price'>{`Rs. ${url.url.strikeOff_price}`}</p>
                    <p className='offer'>{`(${url.url.offer}% off)`}</p>
                </div>
                <p className='tax'>inclusive of all taxes</p>
                <div className='allSIze'>
                <p className='select-size'>SELECT SIZE</p>
                <p className='select-chart'>SELECT CHART</p>
                </div>
                <div className='size'>
                    <button>S</button>
                    <button>M</button>
                    <button>L</button>
                    <button>XL</button>
                    <button>XXL</button>
                </div>
                <div>
                    <button className='cart-btn'>ADD TO BAG</button>
                    <button className='wishlist-btn'>WISHLIST</button>
                </div>
                <div className='details'>
                    <p>100% Original Products</p>
                    <p>Pay on delivery might be available</p>
                    <p>Easy 30 days returns and exchanges</p>
                    <p>Try & Buy might be available</p>
                </div>
                <br />
                <p className='best-offers'>BEST OFFERS : </p>
                <div className='dec-price'>
                    <p>Best Price : </p>
                    <p>{`RS. ${url.url.price-150}`}</p>
                </div>
                <div>
                    <ul>
                        <li>Applicable on: Orders above Rs. 2499 (only on first purchase)</li>
                        <li>Coupon code: <span>MYNTRA400</span></li>
                        <li>Coupon Discount: Rs. 144 off (check cart for final savings)</li>
                    </ul>
                </div>
                <p className='view'>View eligible Products</p>
                <p className='discount'>10% Instant Discount on Kotak Cards</p>
                <ul>
                    <li className='li'>Min spend Rs 3,000; Max discount Rs 1,000. TCA</li>
                </ul>
                <p className='view'>View eligible Products</p>
            </div>
        </div>
    </div>

    </div>
    
  )
}
