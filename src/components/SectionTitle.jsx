import React from "react";

function SectionTitle({ id, children }) {
  return (
    <h1 id={id && id} className="text-2xl font-bold mb-5 text-green-600 ">
      {children}
    </h1>
  );
}

export default SectionTitle;
