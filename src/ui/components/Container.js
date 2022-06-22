import React from "react";

export default function Container(props) {
  const { customStyle } = props;

  return (
    <div className={`w-[56rem] m-auto ${customStyle ? customStyle : ""}`}>
      {props.children}
    </div>
  );
}
