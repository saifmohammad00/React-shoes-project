import Appcontext from "./context";
import { useReducer } from "react";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const itemTotal = action.item.price * (action.item.large + action.item.medium + action.item.small);
        const updatedTotalAmount = state.totalAmount + itemTotal;

        // Check if item already exists in cart
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            // If item exists, update the quantities
            const updatedItem = {
                ...existingCartItem,
                large: existingCartItem.large + action.item.large,
                medium: existingCartItem.medium + action.item.medium,
                small: existingCartItem.small + action.item.small,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // If item does not exist, add it to the cart
            updatedItems = state.items.concat(action.item);
        }

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    if (action.type === 'REMOVE') {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartItemIndex];
        let updatedItems;
        updatedItems = state.items.filter(item => item.id !== action.id);
        // Calculate the updated total amount after removal
        const updatedTotalAmount = state.totalAmount - existingItem.price*(existingItem.large+existingItem.medium+existingItem.small);

        return {
            ...state,
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
};

const ContextProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };


    return <Appcontext.Provider value={cartContext}>
        {props.children}
    </Appcontext.Provider>
}
export default ContextProvider;