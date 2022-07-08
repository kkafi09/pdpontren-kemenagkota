import React from "react";

function SectionTitle({ id, children }) {
  return (
    <h1 id={id && id} className="text-xl font-bold mb-5 text-green-600 pt-4">
      {children}
    </h1>
  );
}

export default SectionTitle;
