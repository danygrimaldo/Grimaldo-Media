import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import portfolio from "./Assets/GM-Portfolio.pdf";
import "../../../src/App.css";

export default function PDFviewer() {
  return (
    <ResponsiveEmbed className="pdf" aspectRatio="1by1">
      <embed
        type="application/pdf"
        src={portfolio}
        // width="auto"
        // height="100%"
      />
    </ResponsiveEmbed>
  );
}
