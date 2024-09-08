import React, { useState } from "react";
import { data } from "../data/data.js";

const Food = () => {
  const [foods, setFoods] = useState(data);
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
      {/* Display Foods */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg hover:scale-105 duration-300 rounded-lg"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg "
            />
            <div className="flex justify-between px-2 py-4 ">
              <p className="font-bold">{item.name}</p>
              <p>
                <span className="bg-orange-500 text-white p-2 rounded-xl">
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
