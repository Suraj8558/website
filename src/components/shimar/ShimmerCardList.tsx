// src/components/ShimmerCardList.tsx
import React from "react";
import ShimmerCard from "./ShimmerCard";

const ShimmerCardList: React.FC = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array(6).fill(0).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};

export default ShimmerCardList;
