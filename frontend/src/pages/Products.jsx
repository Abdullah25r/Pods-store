import React, { useState } from "react";
import ProductsHeader from "../components/ProductsComponents/ProductsHeader";
import Card from "../components/ExploreProduct";
import ProductCard from "../components/ProductCard";
import { products } from "../AllProducts";

function filterProducts(category) {
  if (category === "all") {
    return products;
  }
  return products.filter((product) => {
    return product.category == category;
  });
}

function Products(props) {
  const [category, setCategory] = useState("all");

  return (
    <div>
      <ProductsHeader onCategorySelect={setCategory} />
      <div className="flex flex-wrap gap-5 px-4 my-4 sm:justify-center">
        {filterProducts(category).map((product,index) => (
          <ProductCard
            key={index}
            path={product.image}
            name={product.name}
            desc={product.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Products;
