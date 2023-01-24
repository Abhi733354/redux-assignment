import React from "react";
import {Data} from "./Data"
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "./redux/actionCreator";

function Product () {
    const dispatch = useDispatch()
    const cart = useSelector((state) => state.reducer);
     return(
        <>
          <div className="products">
        {Data.map((item) => {
          item.quantity = 1;
          return (
            <div className="product" key={item.id}>
              {/* <img src={` ../images/${item.image}`} alt="cart" /> */}
              <h4>{item.name}</h4>
              <p>ksh. {item.price}</p>
              <button onClick ={()=> dispatch(addCart())}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
        </>

     )
}
export default Product