import React from "react";
import ProductsHeader from "../components/ProductsComponents/ProductsHeader";
import Card from "../components/ExploreProduct";
import ProductCard from "../components/ProductCard";
import { products } from "../AllProducts";

function Products() {
  

  return (
    <div>
      <ProductsHeader />
      <div className="flex flex-wrap gap-5 px-4 my-4 sm:justify-center">
        {products.map((product, index) => (
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
