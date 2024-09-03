import React from "react";
import { Link } from "react-router-dom";

const ProductCart = ({ product }) => {
  return (
    <>
      <div className="border p-4 rounded-lg shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-center mb-4 trasform trasition-trasform duration-500 hover:traslate-y-[-10px] "
        />
        <h2 className="text-gray-500">${product.price}</h2>
        <Link
          to={`/product-view/${product.id}`}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-800 no-underline"
        >
          View Details
        </Link>
      </div>
    </>
  );
};

export default ProductCart;
