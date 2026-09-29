import Header from "./Header";
import { BG_IMG } from "../utils/constants";
import { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={BG_IMG} alt="bg_img" />
      </div>
      <div className=" flex justify-center">
        <form className="relative w-3/12 mt-40 py-8 bg-black bg-opacity-80 text-white">
          <h1 className="text-3xl font-bold mt-6 mb-6 ml-14 p-2">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              type="text"
              placeholder="Full Name"
              className="my-3 ml-16 p-2 w-8/12 bg-gray-800 border-gray-900 rounded-md focus:border-red-600 focus:ring-1 focus:ring-red-800 outline-none"
            />
          )}
          <input
            type="email"
            placeholder="Email Adress"
            className="my-3 ml-16 p-2 w-8/12 bg-gray-800 border-gray-900 rounded-md focus:border-red-600 focus:ring-1 focus:ring-red-800 outline-none"
          />
          <input
            type="password"
            placeholder="Passwords"
            className="my-3 ml-16 p-2 w-8/12 bg-gray-800 border-gray-900 rounded-md focus:border-red-600 focus:ring-1 focus:ring-red-800 outline-none"
          />
          <button className="my-8 ml-16 p-2 w-8/12 bg-red-600 font-semibold rounded-md">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p onClick={toggleSignInForm} className="ml-16 cursor-pointer">
            {isSignInForm
              ? "New to Netflix? Sign Up Now!"
              : "Already a User? Sign In Now!"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
