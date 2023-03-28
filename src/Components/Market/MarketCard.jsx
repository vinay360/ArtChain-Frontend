import React from 'react';

const Card = ({ image, name, description, price }) => {
  return (
    <div className="relative group hover:text-gray-100 w-[320px]">
    <div className="absolute inset-0 bg-pink-600 blur-sm max-w-xs rounded group-hover:blur">
    </div>
    <div className="relative max-w-xs rounded overflow-hidden shadow-lg bg-gray-900 hover:shadow-xl transition duration-300 ease-in-out">
      <img className="w-full h-[228px] skeleton" src={image} alt={name} />
      <div className="px-6 py-4 h-[180px] overflow-scroll">
        <div className="font-bold text-xl mb-2 ">{name}</div>
        <p className="text-base mb-4">{description}</p>
        <p className="text-base">Price: {price} Eth</p>
      </div>
      <div className="px-6 pt-4 pb-2">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out hover:shadow-lg" >
          Buy
      </button>
      </div>
    </div>
    </div>
  );
};

export default Card;
