import React, { useState, useEffect } from "react";
import { BsWhatsapp } from "react-icons/bs";
import countapi from "countapi-js";
import axios from "axios";

function HeaderSection() {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {
    countapi
      .hit(
        `pdpontren-kemenagkota.vercel.app`,
        `tanggal${new Date().getDate()}bulan${new Date().getMonth()}`
      )
      .then((response) => {
        setVisitor(response.value);
      });
  }, []);

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
        className="flex flex-row py-2 px-4 bg-green-400 items-center mt-5 rounded shadow-md shadow-green-400"
      >
        <BsWhatsapp /> <span className="px-2">Contact admin</span>
      </a>
      <div className="mt-10 text-center w-3/4">
        <p>
          Pengunjung Website Hari ini {new Date().getDate()}/
          {new Date().getMonth()}/{new Date().getFullYear()}
        </p>
        <h1 className="text-2xl mt-2">{visitor}</h1>
      </div>
    </div>
  );
}

export default HeaderSection;
