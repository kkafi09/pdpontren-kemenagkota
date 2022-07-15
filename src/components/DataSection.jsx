import React, { useState, useEffect } from "react";
import { monitoring } from "../data/Monitoring";
import { bantuan, emis, permohonanIzin } from "../data/PdPontren";
import { verval } from "../data/Verval";
import DataItem from "./DataItem";
import SectionTitle from "./SectionTitle";
import countapi from "countapi-js";

function DataSection() {
  const [visitor, setVisitor] = useState(0);

  useEffect(() => {
    countapi
      .hit(
        `pdpontren-kemenagkota.vercel.app`,
        `tanggal${new Date().getDate()}bulan${new Date().getMonth() + 1}`
      )
      .then((response) => {
        setVisitor(response.value);
      });
  }, []);

  return (
    <>
      <SectionTitle>
        1. Aplikasi EMIS WAJIB untuk semua Lembaga Keagamaan Islam (Pondok
        Pesantren, MDT, LPQ, SPM, PDF, PK-PPS)
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-3">
        {emis.map((data) => (
          <DataItem
            key={data.title}
            title={data.title}
            imgUrl={data.imgUrl}
            link={data.link}
            description={data.description}
          />
        ))}
      </div>
      <SectionTitle>
        2. Aplikasi untuk permohonan Izin operasional baik BARU maupun
        Perpanjangan
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-3">
        {permohonanIzin.map((data) => (
          <DataItem
            key={data.title}
            title={data.title}
            imgUrl={data.imgUrl}
            link={data.link}
            description={data.description}
          />
        ))}
      </div>
      <SectionTitle>
        3. Aplikasi Bantuan-bantuan Lembaga Keagamaan Islam (Pondok Pesantren,
        MDT, LPQ, SPM, PDF, PK-PPS)
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 py-3">
        {bantuan.map((data) => (
          <DataItem
            key={data.title}
            title={data.title}
            imgUrl={data.imgUrl}
            link={data.link}
            description={data.description}
          />
        ))}
      </div>
      <SectionTitle>
        4. Aplikasi pendukung Satuan Pendidikan SPM, PDF dan PK-PPS
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-3">
        {verval.map((data) => (
          <DataItem
            key={data.title}
            title={data.title}
            imgUrl={data.imgUrl}
            link={data.link}
            description={data.description}
          />
        ))}
      </div>
      <SectionTitle>5. Peraturan, Juknis dan Monitoring</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3">
        {monitoring.map((data) => (
          <DataItem
            key={data.title}
            title={data.title}
            imgUrl={data.imgUrl}
            link={data.link}
            description={data.description}
          />
        ))}
      </div>
      <div className="mt-10 text-center w-3/4">
        <p>
          Pengunjung Website Hari ini {new Date().getDate()}/
          {new Date().getMonth()}/{new Date().getFullYear()}
        </p>
        <h1 className="text-2xl mt-2">{visitor}</h1>
      </div>
    </>
  );
}

export default DataSection;
