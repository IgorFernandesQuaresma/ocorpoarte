import React from 'react';

const Card = ({ id, url, title, description }) => {
  return (
    <div key={id} className="card h-[65vh] w-[90%] rounded-2xl flex flex-col items-center justify-center ml-14 overflow-hidden">
      <img src={url} alt={description} className="h-[70%] w-[90%] object-cover rounded-2xl shadow-md shadow-black" />
      <div className="text-left w-[90%] mt-4">
        <h1 className="text-lg font-medium font-montserrat">{title}</h1>
        <h2 className="text-xl font-light font-inter">{description}</h2>
      </div>
    </div>
  );
};

export default Card;