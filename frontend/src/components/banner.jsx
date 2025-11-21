import React from "react";

const banner = () => {
  return (
    <>
      <div className="max-w-screen-2xl font-sans container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="w-full mt-12 order-2 md:order-1 md:w-1/2 md:mt-30">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, welcomes here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius fuga
              numquam mollitia sunt facilis, impedit illum vel, ex sit aut
              tenetur laudantium tempore nisi anim!
            </p>
          </div>
          <label className="input validator outline-none mt-8 w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </g>
            </svg>
            <input type="email" className="outline-none border-0 font-semibold grow" placeholder="mail@site.com" required />
          </label>
          <div className="validator-hint hidden">Enter valid email address</div>
          <button className="mt-6 btn btn-secondary">Secondary</button>
        </div>
        <div className="w-full order-1 mt-8 md:w-1/2 md:mt-18">
        <img src="./Banner.png" className="w-full" alt="Banner" />
        </div>
      </div>
    </>
  );
};

export default banner;
