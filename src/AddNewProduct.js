/* Functional component Implementation - starts here */
import React, { useState } from "react";

export default function AddNewProduct(props) {
  const [product, setProduct] = useState({
    name: "",
    defaultPrice: 0
  });

  const addNewProducts = e => {
    const prodDetails = product;
    props.addProduct(prodDetails);
    setProduct({
      name: "",
      price: "",
      defaultPrice: 0
    });
    e.preventDefault();
  };

  const onChangeEvent = e => {
    setProduct({
      ...product,
      [e.target.name]:
        e.target.name === "isPromoted"
          ? e.target.value === "yes"
            ? true
            : false
          : e.target.value,
      defaultPrice: e.target.value
    });
  };

  return (
    <div className="row">
      <div className="col-md-6">
        <form
          onSubmit={e => addNewProducts(e)}
          className="jumbotron formWrapper"
        >
          <div className="productForm">
            <h3>Add new Product</h3>
            <div className="form-group">
              <label>Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={e => onChangeEvent(e)}
                value={product.name}
                placeholder="Product Name"
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="number"
                className="form-control"
                onChange={e => onChangeEvent(e)}
                name="price"
                value={product.price}
                placeholder="Price"
              />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
/* Functional component Implementation - ends here */
