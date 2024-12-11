import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { viewProducts } from "../actions/productActions";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";

const ProductComp = ({ products = [], loading, viewProducts }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 8;

  useEffect(() => {
    viewProducts();
  }, [viewProducts]);

  const formatPrice = (price) => {
    // Remove .00 and keep the ₦ symbol
    return price.replace(/\.00$/, "");
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const offset = currentPage * itemsPerPage;
  const currentItems = products.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(products.length / itemsPerPage);

  return (
    <div className="w-full">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-10 gap-6 container mx-auto py-20">
          {currentItems.length > 0 ? (
            currentItems.map((product) => {
              const originalPrice = parseFloat(
                product.price.replace(/[^0-9.-]+/g, "")
              );
              const newPrice = originalPrice + 150000;
              const defaultRating = 3.5;
              return (
                <Link
                  to={`/product-details/${product.ProductID}`}
                  key={product.ProductID}
                >
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
      <ReactPaginate
        previousLabel={
          <span className="w-10 h-10 flex mr-4 items-center justify-center bg-gray-100 rounded-md">
            {" "}
            <BsChevronLeft />
          </span>
        }
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-md">
            {" "}
            <BsChevronRight />
          </span>
        }
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"flex  items-center   justify-center mt-8 mb-4"}
        pageClassName="block border bg-[#F2F4F5] border-solid border-gray-100 hover:bg-[#2544D8] hover:text-white text-[#767676] w-10 h-10 gap-4 mr-4 flex items-center justify-center rounded-md"
        subContainerClassName={"pages  pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  console.log(state.products.products); // Log products here to see what's being received
  return {
    products: state.products.products,
    loading: state.products.loading,
  };
};

export default connect(mapStateToProps, { viewProducts })(ProductComp);
