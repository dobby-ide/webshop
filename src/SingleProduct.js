import React from 'react';
import Card from './Card';
import { useState } from 'react';
const SingleProduct = ({ allproducts, singleproduct, id, visibility }) => {
  console.log(singleproduct);
  console.log(id);

  const onSingleProductDescr = (e) => {
    e.preventDefault();
    console.log(e.target.id);
    visibility(false);
  };

  return (
    <Card className="single_product_card">
      <div className="overlay" id={id} onClick={onSingleProductDescr}>
        <div>{singleproduct.description}</div>
        <div>
          <img src={singleproduct.image} className="single_img" />
        </div>
      </div>
    </Card>
  );
};
export default SingleProduct;
