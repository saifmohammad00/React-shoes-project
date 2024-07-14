import classes from "./Cart.module.css";
import Cartbox from "./Cartbox";
import { Fragment, useContext, useState } from "react";
import Context from "../../store/context";

const Cart = () => {
    const conCtx=useContext(Context);
    const lengthItems=conCtx.items.length;
    const [overlay, setoverlay] = useState(false);
    const cartHandle = (event) => {
        setoverlay(true);
    }
    const x=(event)=>{
        setoverlay(event);
    }
    return <Fragment>
        <div className={classes.cart}>
            <button type="button" onClick={cartHandle}>
                <span>Cart</span>
                <span>{lengthItems}</span>
            </button>
        </div>
        {overlay && <Cartbox handle={x} />}
    </Fragment>
}
export default Cart;