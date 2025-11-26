import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <>
      <div className="font-sans flex h-screen items-center justify-center bg-gray-100">
        <div className="w-[380px] bg-white shadow-lg p-6 rounded-xl relative gap-col-4 flex flex-col ">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3"
          >
            ✕
          </Link>

          {/* Heading */}
          <h3 className="font-bold text-2xl text-center mb-6">Signup</h3>

          {/* Name Input */}
          <label className="form-control w-full mb-4">
            <span className="label-text text-base font-semibold">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="input input-bordered outline-none w-full"
            />
          </label>

          {/* Email Input */}
          <label className="form-control w-full mb-4">
            <span className="label-text text-base font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered outline-none w-full"
            />
          </label>

          {/* Password Input */}
          <label className="form-control w-full mb-6">
            <span className="label-text text-base font-semibold">Password</span>
            <input
              type="password"
              placeholder="Enter your password"
              className="input input-bordered outline-none w-full"
            />
          </label>

          {/* Signup Button */}
          <button className="btn w-full text-xl text-white bg-pink-500 border-none hover:bg-pink-600 shadow-none">
            Signup
          </button>

          {/* Login Link */}
          <p className="text-center text-sm mt-4">
            Have an account?{" "}
            <Link
              to="/"
              className="text-pink-500 font-semibold hover:text-pink-700 hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;
