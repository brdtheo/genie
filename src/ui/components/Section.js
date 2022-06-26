import React from "react";

export default function Section(props) {
  const { children, title, customStyle } = props;

  return (
    <section className={`${customStyle ? customStyle : "pb-8 sm:pb-16"} w-full`}>
      <h2 className="text-white text-xl font-semibold leading-none">{title}</h2>
      {children}
    </section>
  );
}
