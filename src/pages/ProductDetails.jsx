import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import StarRatings from "react-star-ratings";
import { toast } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Breadcrumbs from "../BreadCrumb/BreadCrumbs";
import { addToCart } from "../actions/cartActions";
import { viewOneProduct } from "../actions/productActions";
import UseScrollToTop from "../UseScrollToTop";

const ProductDetails = () => {
  UseScrollToTop();
  const { id } = useParams();
  const dispatch = useDispatch();

  const product = useSelector((state) =>
    state.products.products.find((p) => p.ProductID === id)
  );
  const productDetails = useSelector((state) => state.products.product);

  useEffect(() => {
    if (!product) {
      dispatch(viewOneProduct(id));
    }
  }, [product, dispatch, id]);

  const currentProduct = product || productDetails;

  if (!currentProduct) {
    return <p>Product not found</p>;
  }

  const formatPrice = (price) => {
    return price.replace(/\.00$/, "");
  };

  const handleAddToCart = async () => {
    const token = localStorage.getItem("auth");
    if (!token) {
      toast.error("Please sign in first");
      history.push("/signin");
      return;
    }

    try {
      await dispatch(addToCart(currentProduct.ProductID));
      toast.success("Product has been added to cart");
    } catch (error) {
      console.error("Failed to add to cart:", error);
      toast.error("Failed to add to cart");
    }
  };

  const defaultRating = 3.5;
  const originalPrice = parseFloat(
    currentProduct.price.replace(/[^0-9.-]+/g, "")
  );
  const newPrice = originalPrice + 150000;

  return (
    <div>
      <Navbar />
      <div className="px-10">
        <Breadcrumbs />
      </div>
      <div className="grid grid-cols-12 px-[2rem] py-20 gap-4">
        <div className="col-span-12 border bg-[#E5E9FA] h-full xl:col-span-8">
          <div className="flex md:flex-row flex-col items-start">
            <div className="px-6 flex flex-col py-6 w-full">
              <div className="bg-white w-full flex flex-col md:px-10 px-4 shadow-md py-2">
                <img
                  src={currentProduct.imageUrl[0]}
                  alt={currentProduct.name}
                  className="md:w-[195px] w-full md:h-[195px] h-full mx-auto"
                />
                <div className="flex flex-col md:items-start mt-10 items-center py-3 w-full">
                  <h3 className="text-xs font-normal">{currentProduct.name}</h3>
                  <p className="md:text-base text-sm md:font-bold font-semibold">
                    <span>Price: </span>
                    {formatPrice(currentProduct.price)}
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
            </div>
            <div className="px-6 py-6 w-full h-full">
              <h1 className="text-sm font-normal">{currentProduct.name}</h1>
              <hr className="border-[#ccc] my-2 w-full" />
              <div className="flex flex-col justify-between gap-20 w-full h-full">
                <div className="flex flex-col">
                  <p className="text-2xl mt-3 font-bold">
                    {formatPrice(currentProduct.price)}
                  </p>
                  <p className="text-sm mt-1 font-normal line-through text-black">
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
                <div className="flex flex-col gap-2 w-full">
                  <Link to={"/product"} className="w-full">
                    <button className="mt-2 w-full text-white bg-[#1B191E] py-2 font-400 text-xs">
                      Buy Now
                    </button>
                  </Link>
                  <button
                    onClick={handleAddToCart}
                    className="mt-2 w-full text-black bg-[#fff] py-2 font-400 text-xs shadow-md"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 border bg-[#E5E9FA] h-auto xl:col-span-4 px-10 py-6">
          <h1 className="font-bold text-base">Product Details</h1>
          <div className="py-6 max-w-sm">
            <p className="text-sm font-light">{currentProduct.description}</p>
          </div>
          <div className="py-6 max-w-sm">
            <h1 className="font-bold text-base">Features</h1>
            <p className="text-sm font-light">{currentProduct.Features}</p>
          </div>
          <div className="py-6 max-w-sm">
            <h1 className="font-bold text-base">Ideal For:</h1>
            <p className="text-sm font-light">{currentProduct.IdealFor}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;
