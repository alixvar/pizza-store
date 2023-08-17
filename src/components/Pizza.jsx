"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

const Pizza = ({ pizza }) => {
  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl shadow-sm">
      <Image
        src={pizza.image}
        width={270}
        height={270}
        alt={pizza.name}
        priority={1}
      />
      {/* Title  */}
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </h2>
      </div>
      {/* Description  */}
      <div>
        <p className="text-sm font-medium mb-6 min-h-[60px] line-clamp-3 md:line-clamp-none">
          {pizza.description}
        </p>
      </div>
      {/* Price and Button  */}
      <div className="mb-6 flex items-center justify-between">
        <p className="hidden lg:flex text-xl font-semibold">
          Starts at {pizza.priceSm}
        </p>
        <button className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm">
          Choose
        </button>
      </div>
    </div>
  );
};

export default Pizza;
