import React from "react";
import Deadline from "./Deadline";

function DataItem({ title, imgUrl, description, link, deadline }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:scale-105 transition-all">
      <a href={link} target="_blank" rel="noopener noreferrer">
        {deadline !== "" && deadline !== null ? (
          <div className="absolute bg-red-500 px-2 py-1 rounded-lg ">
            <span className="text-white">
              <Deadline deadline={deadline} />
            </span>
          </div>
        ) : (
          <div></div>
        )}

        <img
          src={
            imgUrl !== "" && imgUrl !== null
              ? imgUrl
              : "https://source.unsplash.com/1920x1080?alquran"
          }
          alt={title}
          className="w-full h-36 md:h-48 object-contain p-2"
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
