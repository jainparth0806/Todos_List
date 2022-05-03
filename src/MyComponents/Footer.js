import React from "react";

export const Footer = () => {
  let footerStyle = {
    width: "100%",
    border: "solid orange 2px",
  };
  return (
    <footer className="bg-dark text-light py-2" style={footerStyle}>
      <p className="text-center">Copyright &copy; Parth Technology ltd.</p>
    </footer>
  );
};
