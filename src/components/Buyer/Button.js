import { Fragment, useContext, useState } from "react"
import context from "../../store/context";
const Button = (props) => {
    const conCtx = useContext(context);
    const [newItem, setNewItem] = useState(props);
    const buttonHandler = (size) => {
        if (newItem[size] > 0) {
            props.ChangeVal({id:newItem.id,size:size});
            setNewItem(prevItems => ({
                ...prevItems,
                [size]: prevItems[size] - 1
            }));
            const newItemToAdd = {
                id:newItem.id,
                name:newItem.name,
                price:+newItem.price,
                large:0,
                medium:0,
                small:0
            };
            
            conCtx.addItem({...newItemToAdd,[size]:1});
        }
    };

    return (<Fragment>
        <button onClick={() => buttonHandler('large')} type="button">
            Buy Large ({newItem.large})
        </button>
        <button onClick={() => buttonHandler('medium')} type="button">
            Buy Medium ({newItem.medium})
        </button>
        <button onClick={() => buttonHandler('small')} type="button">
            Buy Small ({newItem.small})
        </button>
    </Fragment>
    );
};

export default Button;