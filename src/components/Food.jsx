import React from "react";
import { data } from "../data/data.js";

const Food = () => {
  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>
      {/* Filter row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/*Filter type */}
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justify-between flex-wrap">
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-[1000ms] ease-out">
              All
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-[1000ms] ease-out">
              Burgers
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-[1000ms] ease-out">
              Pizza
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-[1000ms] ease-out">
              Salads
            </button>
            <button className="m-1 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-[1000ms] ease-out">
              Chicken
            </button>
          </div>
        </div>
        {/* Filter price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button className="m-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-[1000ms] ease-out">
              $
            </button>
            <button className="m-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-[1000ms] ease-out">
              $$
            </button>
            <button className="m-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-[1000ms] ease-out">
              $$$
            </button>
            <button className="m-1 border-orange-500 text-white bg-orange-500 hover:bg-white hover:text-orange-500 transition-all duration-[1000ms] ease-out ">
              $$$$
            </button>
          </div>
        </div>
      </div>
      {/* Tommorow add displat foods with .map */}
    </div>
  );
};

export default Food;
