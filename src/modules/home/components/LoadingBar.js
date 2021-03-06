import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function LoadingBar() {
  const loading = useSelector((state) => state.search.loading);
  const [loadingCount, setLoadingCount] = useState(0);

  const triggerProgress = () => {
    for (let i = 0; i < 100; i += 0.1) {
      setLoadingCount(i);
    }
  };

  useEffect(() => {
    triggerProgress();
  }, []);

  return (
    <div
      data-testid="loading-bar"
      role="progressbar"
      aria-valuemin={0}
      aria-valuenow={loadingCount}
      aria-valuemax={100}
      aria-busy={loading}
      className="bg-lemon absolute top-0 left-0 h-0.5 ease-in duration-200 transition-all"
      style={{ width: `${loadingCount}%` }}
    />
  );
}
