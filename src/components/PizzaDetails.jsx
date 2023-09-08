"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SizeSelection from "./SizeSelection";
import CrustSelection from "./CrustSelection";
import Topping from "./Topping";

const PizzaDetails = ({ pizza }) => {
  const [size, setSize] = useState("small");
  const [crust, setCrust] = useState("traditional");
  const [additionalTopping, setAdditionalTopping] = useState([]);
  const [additionalToppingPrice, setAdditionalToppingPrice] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    size === "small"
      ? setPrice(parseFloat(pizza.priceSm + additionalToppingPrice).toFixed(2))
      : size === "medium"
      ? setPrice(parseFloat(pizza.priceMd + additionalToppingPrice).toFixed(2))
      : size === "large"
      ? setPrice(parseFloat(pizza.priceLg + additionalToppingPrice).toFixed(2))
      : null;
  }, [
    additionalToppingPrice,
    pizza.priceLg,
    pizza.priceMd,
    pizza.priceSm,
    size,
  ]);

  useEffect(() => {
    if (additionalTopping.length > 0) {
      const toppingPrice = additionalTopping.reduce((a, c) => {
        return a + c.price;
      }, 0);
      setAdditionalToppingPrice(toppingPrice);
    } else {
      setAdditionalToppingPrice(0);
    }
  }, [additionalTopping]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-x-8 h-full md:p-8  pb-2 overflow-auto scrollbar-thin scrollbar-thumb-white scrollbar-track-white">
      {/* Top  */}
      <div className="lg:flex-1 flex justify-center items-center">
        {/* Pizza Image  */}
        <div className="max-w-[300px] lg:max-w-none mt-10 lg:mt-0">
          <Image
            src={pizza.image}
            width={350}
            height={350}
            alt=""
            priority={1}
            className="mx-auto relative object-contain"
          />
        </div>
      </div>
      {/* Details  */}
      <div className="flex flex-col flex-1">
        <div className="flex-1 text-center lg:text-left p-2 shadow-sm">
          <div className="flex-1 bg-white overflow-y-scroll h-[46vh] scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-white pr-2">
            {/* Name  */}
            <div>
              <p className="capitalize text-3xl font-semibold mb-1">
                {pizza.name}
              </p>
              {/* size & crust text  */}
              <div className="mb-6 mt-1 text-lg font-medium">
                <span>
                  {size === "small"
                    ? "25 cm"
                    : size === "medium"
                    ? "30 cm"
                    : size === "large"
                    ? "35 cm"
                    : null}
                </span>
                <span>, {crust} crust</span>
              </div>
            </div>
            {/* Size Selection  */}
            <SizeSelection pizza={pizza} size={size} setSize={setSize} />
            {/* Crust Selection  */}
            <CrustSelection crust={crust} setCrust={setCrust} />
            {/* Toppings  */}
            <p className="mb-2 text-xl font-semibold">Choose topping</p>
            {/* Toppings list  */}
            <div className="flex gap-2 flex-wrap items-start justify-center lg:justify-start py-1 ">
              {pizza.toppings?.map((topping, index) => {
                return (
                  <Topping
                    topping={topping}
                    additionalTopping={additionalTopping}
                    setAdditionalTopping={setAdditionalTopping}
                    setAdditionalToppingPrice={setAdditionalToppingPrice}
                    additionalToppingPrice={additionalToppingPrice}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* add to cart button  */}
        <div className="h-full flex items-center px-2 lg:items-end">
          <button className="btn btn-lg gradient w-full flex justify-center gap-x-2">
            <div>Add to cart for</div>
            <div>${price}</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaDetails;
