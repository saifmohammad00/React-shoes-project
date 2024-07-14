import React, { Fragment, useState } from "react";
import Seller from "./components/Seller/Seller";
import Buyer from "./components/Buyer/Buyer";
import AppcontextProvider from "./store/contextProvider";
import Cart from "./components/Cart/Cart";
function App() {
  const [items, setItems] = useState([]);
  const saveItems = (item) => {
    setItems((prevItems) => {
      const newItm={...item,id:prevItems.length+1};
      console.log(newItm);
      return [...prevItems, newItm];
    })
  }
  const preVal = (val) => {
    setItems((prevItems) => {
      return prevItems.map((item) =>
        item.id === val.id ? { ...item, [val.size]:item[val.size]-1 } : item
      );
    });
  };
  return (<AppcontextProvider>
    <Fragment>
      <Seller onaddProduct={saveItems} />
      <Cart/>
      <Buyer ondisplay={items} preserveVal={preVal} />
    </Fragment>
  </AppcontextProvider>
  );
}
export default App;