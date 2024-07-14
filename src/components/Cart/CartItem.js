import React from "react";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
    const pr = props.price;

    const handleRemove = () => {
        props.onRemove(props.id);
    };
    const ItemTotal=(props.large+props.small+props.medium)*props.price;
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2 className={classes.name}>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>Price: {pr}</span>
                    <span className={classes.amount}>
                        {props.large > 0 && `${props.large} L `}
                        {props.medium > 0 && `${props.medium} M `}
                        {props.small > 0 && `${props.small} S `}
                    </span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={handleRemove}>−</button>
            </div>
            <div>
                {ItemTotal}
            </div>
        </li>
    );
};

export default CartItem;
