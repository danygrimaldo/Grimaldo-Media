import React from "react";
import { ResponsiveEmbed } from "react-bootstrap";
import portfolio from "./Assets/GM-Portfolio.pdf";

export default function PDFviewer() {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      <ResponsiveEmbed aspectRatio="16by9">
        <embed type="application/pdf" src={portfolio} />
      </ResponsiveEmbed>
    </div>
  );
}
