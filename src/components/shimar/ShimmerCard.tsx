// src/components/ShimmerCard.tsx
import React from "react";

const ShimmerCard: React.FC = () => {
  return (
    <div className="p-4 max-w-sm w-full mx-auto">
      <div className="border border-gray-300 shadow rounded-md p-4 w-full mx-auto">
        <div className="animate-pulse">
          {/* Image placeholder */}
          <div className="bg-gray-300 h-40 rounded-md mb-4"></div>
          
          {/* Title placeholder */}
          <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
          
          {/* Description placeholder */}
          <div className="space-y-2 mb-4">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded w-5/6"></div>
          </div>
          
          {/* Date placeholder */}
          <div className="h-4 bg-gray-300 rounded w-1/3 mb-4"></div>
          
          {/* Rating section placeholder */}
          <div className="flex items-center space-x-2">
            {/* Stars */}
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            <div className="h-4 w-4 bg-gray-300 rounded-full"></div>
            {/* Rating count */}
            <div className="h-4 bg-gray-300 rounded w-10 ml-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
