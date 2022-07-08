import React from "react";
import { monitoring } from "../data/Monitoring";
import { bantuan, emis, permohonanIzin } from "../data/PdPontren";
import { verval } from "../data/Verval";
import DataItem from "./DataItem";
import SectionTitle from "./SectionTitle";

function DataSection() {
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
      <SectionTitle>5. Monitoring</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 py-3">
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
    </>
  );
}

export default DataSection;
