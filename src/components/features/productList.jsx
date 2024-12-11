import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./product/productSlice";

const ProductList = () => {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {items.map((product) => (
        <div key={product.id} className="border p-4 rounded">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover mb-4"
          />
          <h2 className="text-lg font-bold">{product.name}</h2>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-gray-900 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
