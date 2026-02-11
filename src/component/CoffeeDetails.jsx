import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const CoffeeDetails = () => {
  const coffee = useLoaderData();
  const { name, quantity, supplier, taste, price, details, photo } = coffee;

  return (
    <div className="py-16 px-4 md:px-24">
      {/* Back to Home Button */}
      <div className="max-w-6xl mx-auto mb-8">
        <Link to="/" className="flex items-center gap-2 text-2xl font-bold font-rancho hover:text-[#D2B48C] transition">
          <FaArrowLeft className="text-lg" /> Back to home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto shadow-lg rounded-xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12">

        {/* Coffee Image Section */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={photo}
            alt={name}
            className="w-full max-w-sm rounded-lg object-contain"
          />
        </div>

        {/* Coffee Info Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold font-rancho shadow-sm italic">
            Drink
          </h2>

          <div className="space-y-4 text-xl">
            <p><span className="font-bold">Name:</span> <span className="text-gray-300">{name}</span></p>
            <p><span className="font-bold">Quantity:</span> <span className="text-gray-300">{quantity}</span></p>
            <p><span className="font-bold">Supplier:</span> <span className="text-gray-300">{supplier}</span></p>
            <p><span className="font-bold">Taste:</span> <span className="text-gray-300">{taste}</span></p>
            <p><span className="font-bold">Price:</span> <span className="text-gray-300">{price} $</span></p>
            <p><span className="font-bold">Details:</span> <span className="text-gray-300">{details}</span></p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CoffeeDetails;