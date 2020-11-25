import React from "react";

function MistakeContainer({
  header,
  correctText,
  wrongText,
  description,
  children,
}) {
  return (
    <div>
      <h3 className="mistakeHeader">{header}</h3>
      <div className="correctText">{correctText}</div>
      <div className="wrongText">{wrongText}</div>
      <div className="description">{description}</div>
      {children}
    </div>
  );
}

export default MistakeContainer;
