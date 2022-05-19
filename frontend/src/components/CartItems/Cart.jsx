import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./Cart.css";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import axios from 'axios';
import { bindActionCreators } from "redux";
import { ActionCreators } from "../states/store/ActionCreator";
import { useDispatch } from "react-redux";


export default function Cart() {
    // const cartItem=useParams()

    const cartData = useSelector((state) => state.CartReducer);
    const counter = useSelector((state) => state.CounterReducer);
   

    const dispatch = useDispatch();
    const action = bindActionCreators(ActionCreators, dispatch);

  function handelDelete(i){
    action.RemaoveAction(i)
    action.CounterAction(1)
  }
useEffect(()=>{},[counter])

  return (
    <div>
        <div className='container'>
            <div className='leftContainer'>
                    <div className='pincode'>
                        <p className='delivery'>Check delivery time & services</p>
                        <button className='pincode-btn'>ENTER PINCODE</button>
                    </div>
                    <div className='Discount'>
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
                {cartData.cartEle.length==0?<p  className='h3' style={{color:"#ff3f6c",textAlign:"center",marginTop:"100px"}}>oops!! your cart is empty</p>:cartData.cartEle.map((e,i)=>
                    <div className='mainAppend' key={i}>
                        <div className='append'>
                            <div className='imageDiv'>
                                <img src={e.image[0]} alt="img" />
                            </div>
                            <div className='right-details'>
                                <div className='Details'>
                                    <p>{`${e.brand}`}</p>
                                    <p>{`${e.description}`}</p>
                                    <p>{`Sold by : ${e.brand} Apparels`}</p>
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
                            <RestoreFromTrashIcon onClick={()=>{
                                  handelDelete(i)
                            }} style={{cursor:"pointer"}} />
                          
                        </div>
                    </div>
                )}
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
                    <p className='price-1-details'>PRICE DETAILS</p>
                    <div className='flex1'>
                        <p>Total MRP</p>
                        <p>{`Rs. ${cartData.actualPrice}`}</p>
                    </div>
                    <div className='flex2'>
                        <p>Discount on MRP</p>
                        <p>{`Rs. ${cartData.discount}`}</p>
                    </div>
                    <div className='flex3'>
                        <p>Coupon Discoung</p>
                        <p>Apply Coupon</p>
                    </div>
                    <div className='flex4'>
                        <p>Convenience fee <span>Know more</span></p>
                        <p><span> Rs.49 </span> FREE</p>
                    </div>
                    <div className='flex5'>
                        <p>Total Amount</p>
                        <p>{`Rs. ${cartData.finalPrice}`}</p>
                    </div>
                </div>
                <button className='placeOrder-btn'>PLACE ORDER</button>
            </div>
        </div>
    </div>
  )
}