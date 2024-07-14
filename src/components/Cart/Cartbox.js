import React, { Fragment, useContext } from "react";
import ReactDom from "react-dom";
import classes from "./Cartbox.module.css";
import Context from "../../store/context";
import CartItem from "./CartItem";

const Cartbox = (props) => {
    const overlay = document.getElementById("overlay");
    const conCtx = useContext(Context);
    const cartItemAddHandler=(item)=>{
          conCtx.addItem(item);
    }
    const cartItemRemoveHandler=(id)=>{
         conCtx.removeItem(id);
    }
    const listItems = conCtx.items.map((item) => {
        return <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            large={item.large}
            medium={item.medium}
            small={item.small}
            item={item}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
        />
    })
    const handlebutton = (event) => {
        props.handle(false);
    }
    const content = () => {
        return <div className={classes.backdrop}>
            <div className={classes.cartbox}>
                {listItems}
                <strong>Total Amount</strong>
                <span>${conCtx.totalAmount}</span>
                <div>
                    <button type="button" onClick={handlebutton}>Close</button>
                    <button>Order</button>
                </div>
            </div>
        </div>
    }
    return <Fragment>
        {ReactDom.createPortal(content(), overlay)}
    </Fragment>
}
export default Cartbox;