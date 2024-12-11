import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../components/features/auth/authSlice";
import Sidebar from "../components/sidebar";
import { Link } from "react-router-dom";
//import { FaFacebookF } from "react-icons/fa6";
//import { FcGoogle } from "react-icons/fc";
import logo from "../assets/svg/2_20240611_041530_0001.svg";
import img from "../assets/images/CEEMAN IMG (3) 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import blueTick from "../assets/images/Blue tick.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import toast from "react-hot-toast";

const SignIn = () => {
  const initialFormData = {
    email: "",
    password: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [showPassword, setShowPassword] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // UseSelector to get auth state from Redux
  const auth = useSelector((state) => state.auth);
  const { loading, error, status } = auth || {}; // Destructure with fallback to empty object

  useEffect(() => {
    console.log("Auth State:", auth); // Check auth state
    if (auth && auth.isAuthenticated) {
      navigate("/");
    }
  }, [auth, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(login(formData));

    try {
      const response = await fetch(
        "https://ceeman-back.onrender.com/api/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );
      const data = await response.json();

      if (response.ok) {
        const token = data.token;
        localStorage.setItem("auth", token); // Store token in local storage
        dispatch({ type: "LOGIN_SUCCESS", payload: data.token }); // Update auth state
        navigate("/"); // Redirect to home page
        toast.success("Signed In Successfully");
      } else {
        console.error(
          "Login failed:",
          data.message || "Username or Password is incorrect"
        );
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }

    // Clear form
    resetForm();
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <div className="w-full font-gilroy lg:h-screen md:h-screen h-full flex lg:flex-row md:flex-row flex-col">
        <Sidebar
          logo={logo}
          imageSrc={img}
          heading={`Welcome Back!`}
          sizeClass={`w-[50%]    capitalize mx-auto  absolute bottom-0`}
        />

        <div className="w-full flex items-center justify-center h-full bg-white">
          <div className="bg-white px-10 py-8 rounded-lg w-full ">
            <div className="mb-[4rem]">
              <Link to={"/"}>
                <IoMdArrowRoundBack size={30} />
              </Link>
            </div>
            <h2 className="text-3xl font-bold mb-6">Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border placeholder:text-sm placeholder:font-bold border-gray-300 rounded mt-2"
                  required
                />
              </div>
              <div className="mb-4 relative">
                <label className="block text-gray-700">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border placeholder:text-sm placeholder:font-bold border-gray-300 rounded mt-2"
                  required
                />
                <FontAwesomeIcon
                  icon={showPassword ? faEyeSlash : faEye}
                  onClick={togglePasswordVisibility}
                  className="absolute right-2 top-[70%] transform -translate-y-1/2 cursor-pointer"
                />
              </div>
              {error && <p className="text-red-500 mb-4">{error}</p>}
              <button
                type="submit"
                className="w-full bg-[#2544D8] transition-all duration-700 text-white p-2 rounded mt-4 hover:bg-blue-600"
              >
                {status === "loading" ? "Signing in..." : "Sign In"}
              </button>
              <p className="text-center w-full inline-flex gap-0.5 items-center justify-center mt-4 text-sm font-bold">
                Don't Have an Account?
                <Link to="/signup" className="text-[#2544D8]">
                  Sign Up
                </Link>
              </p>
            </form>
          </div>
          {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          {/* {success && <p style={{ color: "green" }}>{success}</p>} */}

          {status === "succeeded" && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
              <div className="bg-white text-[#2544D8] p-8 rounded-lg shadow-lg text-center">
                <img
                  src={blueTick}
                  alt="Blue_Tick_For_Validation"
                  className="m-auto"
                />
                <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                <p className="mb-4 text-gray-700">Sign in Complete.</p>
                <Link to="/">
                  <button
                    // onClick={() => setShowPopup(false)}
                    className="bg-[#2544D8] text-white p-2 px-9 rounded hover:bg-blue-600"
                  >
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { login })(SignIn);

// export default SignIn;
