import React from "react";

// const getTotalPrice = (totalPrice, value) => {
//   return parseInt(totalPrice, 10) + parseInt(value.price, 10);
// };

export default function TotalPrice(props) {
  console.log("hi");
  console.log(props);
  return (
    <div id="totalPrice" className="alert alert-info">
      {/* <strong>Total Price :{props.productList.reduce(getTotalPrice, 0)}</strong> */}
      Total (Amt) : {props.totalAmount}
      <br />
      Products (#):
    </div>
  );
}
