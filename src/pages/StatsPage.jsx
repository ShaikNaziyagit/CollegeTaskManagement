import React from "react";
import Stats from "../components/Stats";
import ProductivityChart from "../components/ProductivityChart";

export default function StatsPage() {
  return (
    <div className="page">
      <h2>📊 Productivity Stats</h2>

      <Stats />
      <ProductivityChart />
    </div>
  );
}
