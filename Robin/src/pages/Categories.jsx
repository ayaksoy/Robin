import React, { useEffect } from "react";
import Hero from "../components/Hero";
import { useParams } from "react-router-dom";

import CategoryCard from "../components/CategoryCard";

const Categories = ({
  categories,
  getProducts,
  products,
  addToCart,
  addToWishlist,
}) => {
  return (
    <>
      <Hero title="Categories" />
      <div className="product-fullpage-no-gutter-area">
        <div className="row no-gutters">
          {products.map((item, index) => (
            <CategoryCard
              key={index}
              product={item}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Categories;
