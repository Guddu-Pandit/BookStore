import React from "react";
import list from "../../public/list.json";
import Cards from "../components/cards";
import { Link } from "react-router-dom";

const course = () => {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-30 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-15 font-sans">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
            commodi magni necessitatibus culpa suscipit! Autem temporibus ea
            consequuntur, delectus quia pariatur. Quaerat placeat vel officiis
            itaque consectetur recusandae libero pariatur maiores quis, id
            suscipit ipsam nihil. Magni nulla dicta illum, doloribus sunt
            voluptate, placeat laboriosam qui fuga error praesentium rem.
          </p>
          <Link  to="/">
            <button className=" mt-6 bg-pink-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-pink-600">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 ">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default course;
