import Image from "next/image";

const SizeSelection = ({ pizza, size, setSize }) => {
  return (
    <div className="flex items-center justify-center lg:justify-start max-w-sm lg:max-w-none mx-auto">
      {/* Sizes  */}
      <div className="flex items-baseline justify-center gap-12 ">
        {/* Small  */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "small"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={60}
            height={60}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="small"
            checked={size === "small"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          small
        </label>
        {/* Medium  */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "medium"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={70}
            height={70}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="medium"
            checked={size === "medium"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          medium
        </label>
        {/* Large  */}
        <label className="flex flex-col items-center gap-x-2 cursor-pointer">
          <Image
            className={`${
              size === "large"
                ? "border-2 border-orange p-[2px] rounded-full"
                : "border-transparent filter saturate-[.1]"
            }`}
            src={pizza.image}
            width={80}
            height={80}
            alt=""
          />
          <input
            type="radio"
            name="size"
            value="large"
            checked={size === "large"}
            onChange={(e) => setSize(e.target.value)}
            className="appearance-none"
          />
          large
        </label>
      </div>
    </div>
  );
};

export default SizeSelection;
