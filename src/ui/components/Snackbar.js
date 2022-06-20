import React from "react";

export default function Snackbar(props) {
  const { message } = props;

  return (
    <div className="absolute w-80 bottom-14 right-5 bg-lemon px-4 py-3 transition-transform">
      <span>{message}</span>
    </div>
  );
}
