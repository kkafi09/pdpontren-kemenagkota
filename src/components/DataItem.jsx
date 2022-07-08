import React from "react";

function DataItem({ title, imgUrl, description, link }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-36 md:h-48 object-cover p-2"
        />
        <div className="text-gray-600 p-4 w-full">
          <h3 className="text-lg md:text-xl mb-1 font-semibold">{title}</h3>
          <p className="text-sm md:text-md mb-3">{description}</p>
        </div>
      </a>
    </div>
  );
}

export default DataItem;
