import React, { useState, useContext, useReducer } from "react";
import "./styles.css";
import ProductsList from "./ProductsList";
import AddNewProduct from "./AddNewProduct";
import { ProductContext } from "./ProductContext";

export default function App() {
  const [prodState, dispatch] = useContext(ProductContext);

  const reduce = (total, value) => {
    return parseInt(total) + parseInt(value.price);
  };
  // const [count, setCount] = useState(prodState.products.length);

  // const [total, setTotal] = useState(prodState.products.reduce(reduce, 0));

  const addProducts = (addedRec, flag) => {
    dispatch({
      type: "ADD_PRODUCT",
      payload: {
        data: { ...addedRec }
      }
    });
  };
  const incrementHandler = ({ price, index }) => {
    dispatch({
      type: "INCREMENT_HANDLER",
      payload: {
        price,
        index
      }
    });
    // setProdState(prevState => {
    //   prevState.products[index].price = parseInt(price);
    //   return {
    //     ...prevState
    //   };
    // });
    // setTotal(prodState.products.reduce(reduce, 0));
    // setCount(prodState.products.length);
  };
  const decrementHandler = ({ price, index }) => {
    setProdState((prevState) => {
      prevState.products[index].price = parseInt(price);
      return {
        ...prevState
      };
    });
    setTotal(prodState.products.reduce(reduce, 0));
    setCount(prodState.products.length);
  };

  return (
    <div id="container" className="container">
      <pre>{JSON.stringify(prodState, null, 4)}</pre>
      <ProductsList
        productList={prodState.products}
        incrementHandler={incrementHandler}
        decrementHandler={decrementHandler}
        addProduct={addProducts}
        totalAmount={prodState.total}
      />
      <AddNewProduct
        productList={prodState.products}
        addProduct={addProducts}
      />
    </div>
  );
}
