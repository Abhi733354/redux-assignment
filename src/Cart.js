import React from "react";
import {useDispatch ,useSelector } from "react-redux";
import {removeCart,decCart} from './redux/actionCreator'

function AddCart(){
     const dispatch = useDispatch()
    const data = useSelector(state => state.reducer)
    // console.log(value)

    return(
        <div>
            {data}
            <br></br>
            <button type="button" class="btn btn-primary" onClick ={()=> dispatch(removeCart("0"))}>Remove</button>  <button type="button" class="btn btn-primary" onClick ={()=> dispatch(decCart(1))}>Decreament</button>

            
        </div>

    );
}
export default AddCart;