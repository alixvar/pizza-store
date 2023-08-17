"use client";

import { useState } from "react";
import Image from "next/image";
import Modal from "react-modal";
import { IoCloseOutline } from "react-icons/io5";

Modal.setAppElement("body");

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0.0.0.0.5)",
  },
};

const Pizza = ({ pizza }) => {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <div className="group py-2 px-4 xl:py-4 xl:px-2 rounded-xl shadow-md">
      <Image
        className="lg:group-hover:translate-y-3 transition-all duration-300 mb-8 cursor-pointer"
        src={pizza.image}
        width={270}
        height={270}
        alt={pizza.name}
        priority={1}
        onClick={openModal}
      />
      {/* Title  */}
      <div className="" onClick={openModal}>
        <h2 className="text-xl font-bold mb-3 capitalize cursor-pointer">
          {pizza.name}
        </h2>
      </div>
      {/* Description  */}
      <div className="cursor-default">
        <p className="text-sm font-medium mb-6 min-h-[60px] line-clamp-3 md:line-clamp-none">
          {pizza.description}
        </p>
      </div>
      {/* Price and Button  */}
      <div className="mb-6 flex items-center justify-between">
        <p className="hidden cursor-default lg:flex text-xl font-semibold">
          Starts at {pizza.priceSm}
        </p>
        {/* button for large screen size  */}
        <button
          className="hidden lg:flex gradient text-white rounded-lg btn-sm font-semibold text-sm"
          onClick={openModal}
        >
          Choose
        </button>
        {/* button for small screen size  */}
        <button
          className="lg:hidden btn btn-sm gradient text-sm px-4"
          onClick={openModal}
        >
          Starts at {pizza.priceSm}
        </button>
      </div>
      {/* Modal  */}
      {modal && (
        <Modal
          style={modalStyles}
          isOpen={modal}
          onRequestClose={closeModal}
          contentLabel="Pizza Modal"
          className="w-full h-full lg:max-w-[900px] lg:max-h-[600px] lg:rounded-[30px] lg:fixed lg:top-[50%] lg:left-[50%] lg:translate-x-[-50%] lg:translate-y-[-50%] outline-none"
        >
          <div>
            <h1>Modal</h1>
          </div>
        </Modal>
      )}
    </div>
  );
};

export default Pizza;
