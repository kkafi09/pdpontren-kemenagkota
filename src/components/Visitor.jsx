import React from "react";

function Visitor(props) {
  return (
    <>
      <div className="mt-10 text-center mx-auto py-4 lg:px-56 bg-white rounded-lg w-full">
        <div className="w-full py-4">
          <h3 className="text-xl lg:text-2xl font-bold text-green-600 mb-2">
            Pengunjung Website
          </h3>

          <div className="flex flex-col md:flex-row justify-center items-center mt-4 gap-5 ">
            <div className="flex flex-col lg:mx-4">
              <span className="text-gray-600">Total Hari ini</span>
              <span className="text-2xl mt-2">{props.visitorDay}</span>
            </div>

            <div className="flex flex-col lg:mx-2">
              <span className="text-gray-600">Total Bulan Ini</span>
              <span className="text-2xl mt-2">{props.visitorMonth}</span>
            </div>

            <div className="flex flex-col lg:mx-2">
              <span className="text-gray-600">Total Tahun Ini</span>
              <span className="text-2xl mt-2">{props.visitorYear}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Visitor;
