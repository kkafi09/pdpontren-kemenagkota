import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function HeaderSection() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <h1 className="text-4xl lg:text-5xl font-bold text-green-600 text-center">
        PD PONTREN KEMENAG KOTA KEDIRI
      </h1>
      <p className="text-lg lg:text-xl text-center max-w-sm lg:max-w-md text-gray-600 pt-3">
        Ini adalah semua link aplikasi/digitalisasi seksi PD Pontren Kemenag
        Kota Kediri
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/message/SQYG3LZPBPMKG1"
        className="flex flex-row py-2 px-4 bg-green-400 items-center mt-5 rounded shadow-md shadow-green-300"
      >
        <BsWhatsapp /> <span className="px-2">Contact admin</span>
      </a>
    </div>
  );
}

export default HeaderSection;
