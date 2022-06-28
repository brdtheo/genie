import React from "react";

export default function Container(props) {
  const { customStyle } = props;
  const customClasses = customStyle ? customStyle : "";

  return (
    <div className={`w-full px-4 lg:px-0 lg:w-[56rem] m-auto ${customClasses}`}>
      {props.children}
    </div>
  );
}
