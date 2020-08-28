import React, { createContext, useState, useReducer } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
  const [prodState, setProdState] = useState({
    products: [
      { name: "iPhone", defaultPrice: 60000, price: 60000 },
      { name: "Redmi", defaultPrice: 18000, price: 18000 },
      { name: "OnePlus", defaultPrice: 78500, price: 78500 },
      { name: "Samsung", defaultPrice: 25000, price: 25000 }
    ],
    count: 4,
    total: 181000
  });
  const reduce = (total, value) => {
    return parseInt(total) + parseInt(value.price);
  };

  const productReducer = (state, action) => {
    switch (action.type) {
      case "ADD_PRODUCT": {
        const {
          payload: { data }
        } = action;
        return {
          ...state,
          products: [...prodState.products, data],
          total: prodState.products.reduce(reduce, 0),
          count: prodState.products.length
        };
      }
      case "INCREMENT_HANDLER": {
        const {
          payload: { price, index }
        } = action;
        prodState.products[index].price = parseInt(price);
        return {
          ...state,
          products: [...prodState.products],
          total: prodState.products.reduce(reduce, 0),
          count: prodState.products.length
        };
      }

      default:
        return state;
    }
  };
  const [store, dispatch] = useReducer(productReducer, prodState);

  return (
    <ProductContext.Provider value={[store, dispatch]}>
      {props.children}
    </ProductContext.Provider>
  );
};
