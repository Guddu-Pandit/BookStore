import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

 const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    document.getElementById("my_modal_3").close(); // if you want to close modal on submit
  };
  return (
    <>
      <div className="font-sans">
        {/* You can open the modal using document.getElementById('ID').showModal() method */}
        {/* <button className="btn" onClick={()=>document.getElementById('my_modal_3').showModal()}>open modal</button> */}
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box gap-col-4 flex flex-col">
            <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
              {/* Close Button */}
              <button
                onClick={() => document.getElementById("my_modal_3").close()}
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                <Link to="/">✕</Link>
              </button>
            </form>

            {/* Heading */}
            <h3 className="font-bold text-2xl text-center mb-4">Login</h3>

            {/* Email Input */}
            <label className="form-control w-full mb-3">
              <span className="label-text text-1xl font-semibold">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="input outline-none w-full "
                {...register("email", { required: true })}
              />
              {errors.email && <span className="text-sm text-red-500">This field is required*</span>}
            </label>

            {/* Password Input */}
            <label className="form-control w-full mb-4">
              <span className="label-text text-1xl font-semibold">
                Password
              </span>
              <input
                type="password"
                placeholder="Enter your password"
                className="input outline-none w-full "
                {...register("password", { required: true })}
              />
              {errors.password && <span className="text-sm text-red-500">This field is required*</span>}
            </label>

            {/* Login Button */}
            <button  className="btn shadow-none text-xl btn-primary w-full mb-3 text-white bg-pink-500 border-none hover:bg-pink-600">
              Login
            </button>

            {/* Signup Link */}
            <p className="text-center text-sm">
              Not registered?{" "}
              <Link
                to="/signup"
                className="text-pink-500 font-semibold hover:text-pink-700 hover:underline"
              >
                Signup
              </Link>
            </p>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default login;
