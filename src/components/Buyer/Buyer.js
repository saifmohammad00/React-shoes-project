import classes from "./Buyer.module.css";
import React from "react";
import Button from "./Button";

const Buyer = (props) => {
    const abc=(val)=>{
       props.preserveVal(val);
    }
    return <div className={classes.buyer}>
        {props.ondisplay.map((item) => {
            return <div className={classes.product} key={Math.random()}>
                <span>{item.name}</span>
                <span>{item.description}</span>
                <span>{item.price}</span>
                <Button
                id={item.id}
                name={item.name}
                price={item.price}
                large={item.large}
                medium={item.medium}
                small={item.small}
                ChangeVal={abc}
                />
            </div>
        })}
    </div>
}
export default Buyer;