import React from "react";
import { BsWhatsapp } from "react-icons/bs";

function HeaderSection() {
  return (
    <div className="flex flex-col items-center justify-center pt-20 pb-10">
      <h1 className="text-3xl lg:text-5xl font-bold text-green-600 text-center">
        PD PONTREN KEMENAG KOTA KEDIRI
      </h1>
      <p className="text-base lg:text-xl text-center max-w-md lg:max-w-md w-3/4 md:w-full text-gray-600 pt-3">
        Ini adalah semua link aplikasi atau digitalisasi seksi PD Pontren
        Kemenag Kota Kediri
      </p>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://wa.me/message/SQYG3LZPBPMKG1"
        className="flex flex-row py-2 px-4 bg-green-400 items-center mt-5 rounded shadow-md shadow-green-400"
      >
        <BsWhatsapp /> <span className="px-2">Contact admin</span>
      </a>
    </div>
  );
}

export default HeaderSection;
