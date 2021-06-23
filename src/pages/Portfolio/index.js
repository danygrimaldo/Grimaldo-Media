import React from "react";
// import PDFviewer from "../../components/PDFviewer";
import "../../../src/App.css";

export const Portfolio = () => {
  return (
    <ResponsiveEmbed aspectRatio="21by9">
      <embed
        type="application/pdf"
        src={portfolio}
        width="auto"
        height="100%"
        style={{ display: "block", objectFit: "scale-down" }}
      />
    </ResponsiveEmbed>
  );
};
