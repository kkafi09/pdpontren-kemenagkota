import React from "react";
import DataItem from "./DataItem";
import SectionTitle from "./SectionTitle";

function DataSection() {
  return (
    <>
      <SectionTitle>Aplikasi EMIS Wajib</SectionTitle>
      <DataItem
        title="Emis wajib"
        image="../images/emis-wajib.png"
        description="Aplikasi EMIS wajib untuk semua lembaga"
      />
    </>
  );
}

export default DataSection;
