import React from "react";
import "./vertical-lines.scss";

const VerticalLines: React.FC = () => {
  return (
    <div className="vertical-lines">
      <div className="vertical-line colored"></div>
      <div className="vertical-line colored"></div>
      <div className="vertical-line colored"></div>
      <div className="vertical-line colored"></div>
    </div>
  );
};

export default VerticalLines;
