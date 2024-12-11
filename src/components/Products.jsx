import React, { useEffect } from "react";
import { connect } from "react-redux";
import { viewProducts } from "../actions/productActions";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

const Products = ({ products = [], loading, viewProducts }) => {
  useEffect(() => {
    viewProducts();
  }, [viewProducts]);

  const formatPrice = (price) => {
    // Remove .00 and keep the ₦ symbol
    return price.replace(/\.00$/, "");
  };

  // Limit to only 4 products
  const limitedProducts = products.slice(0, 4);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="bg-[#1B191E]  w-full py-2">
        <h2 className="text-white text-center font-poppins font-normal text-2xl">
          Products
        </h2>
      </div>
      <div className="md:py-20 py-4">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid  md:grid-cols-2 grid-cols-1 px-10 gap-6 max-w-2xl container mx-auto py-20">
            {limitedProducts.length > 0 ? (
              limitedProducts.map((product) => {
                const originalPrice = parseFloat(
                  product.price.replace(/[^0-9.-]+/g, "")
                );
                const newPrice = originalPrice + 150000;
                const defaultRating = 3.5;
                return (
                  <Link to="/product">
                    <div
                      key={product.ProductID}
                      className="border border-[#efefef] flex flex-col items-center py-3 justify-center"
                    >
                      <img
                        src={product.imageUrl[0]} // Accessing the first image in the array
                        alt={product.name}
                        className="w-1/2"
                      />
                      <div className="flex flex-col md:items-start items-center py-3">
                        <h3 className="text-xs font-normal">{product.name}</h3>
                        <p className="text-base font-bold">
                          <span>Price: </span>
                          {formatPrice(product.price)}
                        </p>

                        <p className="text-xs mt-3 font-normal line-through text-black">
                          {formatPrice(`₦${Math.round(newPrice)}`)}
                        </p>

                        <StarRatings
                          rating={defaultRating}
                          starRatedColor="#E5B800"
                          numberOfStars={5}
                          name="rating"
                          starDimension="13px"
                          starSpacing="1px"
                        />
                      </div>
                    </div>
                  </Link>
                );
              })
            ) : (
              <p className="text-center py-2">No products available</p>
            )}
          </div>
        )}
        <div className="w-full flex justify-center mb-20 py-10">
          <Link to={"/product"}>
            <button className="mt-2 w-[13rem] text-white bg-[#1B191E] py-1 font-400 text-sm">
              See More Products...
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  products: state.products.products,
  loading: state.products.loading,
});

export default connect(mapStateToProps, { viewProducts })(Products);
