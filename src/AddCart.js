import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {incCart} from './redux/actionCreator'

function AddCart(){
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()
    const data  = useSelector(state => state.reducer)
    console.log(data)

    return(
        <div>
            {/* {value} */}
            {/* <button onClick ={()=> dispatch(incCart(1))}>AddCart</button> */}
            <button type="button" class="btn btn-primary" onClick ={()=> dispatch(incCart(1))}>AddCart</button>

            {/* {console.log(dispatch(incCart(1)))} */}
        </div>

    );
}
export default AddCart;