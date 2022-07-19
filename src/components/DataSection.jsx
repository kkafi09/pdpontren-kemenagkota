import React, { useState, useEffect } from "react";
import { monitoring } from "../data/Monitoring";
import { bantuan, emis, permohonanIzin } from "../data/PdPontren";
import { verval } from "../data/Verval";
import DataItem from "./DataItem";
import SectionTitle from "./SectionTitle";
import countapi from "countapi-js";
import Visitor from "./Visitor";

function DataSection() {
  const [visitorDay, setVisitorDay] = useState(0);
  const [visitorMonth, setVisitorMonth] = useState(0);
  const [visitorYear, setVisitorYear] = useState(0);
  useEffect(() => {
    countapi
      .hit(
        `pdpontren-kemenagkota.vercel.app`,
        `tgl${new Date().getDate()}bln${new Date().getMonth() + 1}`
      )
      .then((response) => {
        setVisitorDay(response.value);
      });
    countapi
      .hit(
        `pdpontren-kemenagkota.vercel.app`,
        `bln${new Date().getMonth() + 1}`
      )
      .then((response) => {
        setVisitorMonth(response.value);
      });
    countapi
      .hit(`pdpontren-kemenagkota.vercel.app`, `thn${new Date().getYear()}`)
      .then((response) => {
        setVisitorYear(response.value);
      });
  }, []);

  return (
    <>
      <SectionTitle>
        1. Aplikasi EMIS WAJIB untuk semua Lembaga Keagamaan Islam (Pondok
        Pesantren, MDT, LPQ, SPM, PDF, PK-PPS)
      </SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3">
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-3">
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
      <Visitor
        visitorDay={visitorDay}
        visitorMonth={visitorMonth}
        visitorYear={visitorYear}
      />
    </>
  );
}

export default DataSection;
