import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./Cart.css"

export default function Cart() {
    const cartItem=useParams()
    // console.log("item",cartItem.cartItem)

    const url = useSelector((state) => state.TypeReducer);
    console.log("url",url.url)


  return (
    <div>
        <div className='container'>
            <div className='leftContainer'>
                    <div className='pincode'>
                        <p className='delivery'>Check delivery time & services</p>
                        <button className='pincode-btn'>ENTER PINCODE</button>
                    </div>
                    <div className='discount'>
                        <p>Available Offers</p>
                        <p>10% Discount on Kotakk Credit and Debit Cards on a min spend of Rs 3,000 TCA</p>
                    </div>
                    <div className='shipping'>
                    <img src="https://constant.myntassets.com/checkout/assets/img/ship-free.webp" alt="img" />
                    <p>yah! <span>No Convenience fee</span> on this order </p>
                </div>
                <div className='btn-click'>
                    <p>ITEM SELECTED</p>
                    <button>REMOVE</button>
                    <button>MOVE TO WISHLIST</button>
                </div>
                <div className='mainAppend'>
                    <div className='append'>
                        <div className='imageDiv'>
                            <img src={url.url.image[0]} alt="" />
                        </div>
                        <div className='right-details'>
                            <div className='details'>
                                <p>{`${url.url.brand}`}</p>
                                <p>{`${url.url.description}`}</p>
                                <p>{`Sold by : ${url.url.brand} Apparels`}</p>
                            </div>
                            <div className='size-qty'>
                                <p>Size : M</p>
                                <select name="" id="">
                                    <option value="">Qty: 1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                    <option value="">4</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            

            <div className='rightContainer'>
                <div className='topDiv'>
                    <p>DONATE FOR COVID-19 RELEIF</p>
                    <p>Help India fight COVID-19</p>
                    <div>
                        <button>Rs. 10</button>
                        <button>Rs. 50</button>
                        <button>Rs. 200</button>
                        <button>other</button>
                    </div>
                    <br />
                    <p>Know more</p>
                </div>
                <div className='coupon'>
                    <p>COUPONS</p>
                    <div className='flex-coupon'>
                        <p>Apply Coupon</p>
                        <button>Apply</button>
                    </div>
                </div>
                <p className='see'><span className='login'>Login</span> to see best coupons for you </p>
                <hr />
                <div className='final-details'>
                    <p>PRICE DETAILS</p>
                    <div className='flex'>
                        <p>Total MRP</p>
                        <p>{`Rs. ${url.url.price}`}</p>
                    </div>
                    <div className='flex'>
                        <p>Discount on MRP</p>
                        <p>{`Rs. ${url.url.strikeOff_price}`}</p>
                    </div>
                    <div className='flex'>
                        <p>Coupon Discoung</p>
                        <p>Apply Coupon</p>
                    </div>
                    <div className='flex'>
                        <p>Convenience fee <span>Know more</span></p>
                        <p><span> Rs.49 </span>FREE</p>
                    </div>
                    <div className='flex'>
                        <p>Total Amount</p>
                        <p>{`${url.url.strikeOff_price}-${url.url.price}`}</p>
                    </div>
                </div>
                <button>PLACE ORDER</button>
            </div>
        </div>
    </div>
  )
}
