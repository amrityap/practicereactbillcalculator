import React, { useState, useRef, useEffect, useContext } from "react";

import TotalPrice from "./TotalPrice";
import { ProductProvider, ProductContext } from "./ProductContext";
function ListData(props) {
  const [totalAmtInCart] = useState(0);
  const [prodState, setProdState] = useContext(ProductContext);
  console.log(`updated data`, prodState);

  useEffect(() => {
    console.log(totalAmtInCart);
  }, [totalAmtInCart]);

  return prodState.products.map(({ price, name, defaultPrice }, index) => {
    return (
      <div key={index}>
        <div className="row form-group">
          <div className="col-sm-7">
            <h5>{name}</h5>
          </div>
          <div className="col-sm-2">
            <span className="amount">
              {"\u20B9"} {price}
            </span>
          </div>
          {/* <pre>{JSON.stringify(props.prodProps, null, 4)}</pre> */}
          <div className="col-sm-3">
            {price >= 0 ? (
              <button
                className="btn btn-outline-primary"
                onClick={e => {
                  props.incrementHandler({
                    price: parseInt(price) + parseInt(defaultPrice),
                    index
                  });
                }}
              >
                {" "}
                +1
              </button>
            ) : (
              ""
            )}
            {price <= 0 ? (
              ""
            ) : (
              <button
                className="btn btn-outline-primary"
                onClick={e => {
                  props.decrementHandler({
                    price: parseInt(price) - parseInt(defaultPrice),
                    index
                  });
                }}
              >
                -1
              </button>
            )}
          </div>
        </div>
        <hr />
      </div>
    );
  });
}

export default function ProductsList(props) {
  const [prodState, setProdState] = useContext(ProductContext);
  return (
    <>
      <div id="listDetails">
        <div className="row">
          <div className="col-sm-8">
            <h2>Products</h2>
          </div>
          {/* <div className="col-sm-4">{totalAmtInCart}</div> */}
          <TotalPrice totalAmount={props.totalAmount} count={prodState.count} />
        </div>

        <div className="dataList">
          <ListData
            // prodProps={props.productList}
            addProduct={props.addProduct}
            incrementHandler={props.incrementHandler}
            decrementHandler={props.decrementHandler}
            /*modifyCartProps={modifyCart}*/
          />
        </div>
      </div>
    </>
  );
}
