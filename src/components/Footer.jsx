import React from "react";

function Footer() {
  return (
    <div className="dark:text-gray-600 text-sm mt-20 text-gray-500">
      <hr />
      <p className="py-4">
        © Tim IT Kemenag Kota {new Date().getFullYear()}. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
