import React from "react";

function DataItem({ title, image, description, link }) {
  return (
    <div className="bg-slate-100 dark:bg-slate-800 rounded-lg overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-36 md:h-48 object-cover"
      />
      <div className="text-gray-600 dark:text-gray-300 p-5 w-full">
        <h3 className="text-lg md:text-xl mb-1 font-semibold">{title}</h3>
        <p className="text-sm md:text-md mb-3">{description}</p>
      </div>
    </div>
  );
}

export default DataItem;
