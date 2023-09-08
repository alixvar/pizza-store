"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { IoMdCheckmark } from "react-icons/io";

const Topping = ({ topping, additionalTopping, setAdditionalTopping }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };

  const handleTopping = () => {
    if (isChecked) {
      const newTopping = new Set([...additionalTopping, { ...topping }]);
      setAdditionalTopping(Array.from(newTopping));
    } else {
      const newTopping = additionalTopping.filter((toppingObj) => {
        return toppingObj.name !== topping.name;
      });
      setAdditionalTopping(newTopping);
    }
  };

  useEffect(() => {
    handleTopping();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isChecked]);

  return (
    <div
      className={`${
        isChecked && "border-orange"
      } w-full max-w-[110px] h-[140px] p-1 flex flex-col items-center cursor-pointer justify-center border border-opacity-20 bg-white rounded-md relative`}
    >
      <Image
        src={topping.image}
        width={70}
        height={70}
        alt=""
        className="mb-2"
      />
      <div className="text-sm capitalize text-center font-medium">
        {topping.name}
      </div>
      <input
        className="absolute w-full h-full opacity-0 cursor-pointer"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckbox}
      />
      <div>
        <IoMdCheckmark
          className={`${isChecked ? "opacity-100" : "opacity-0"} text-orange`}
        />
      </div>
    </div>
  );
};

export default Topping;
