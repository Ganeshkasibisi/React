import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap gap-4 p-5">
      {Array(15)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="w-64 h-80 bg-gray-100 rounded-lg  animate-shimmer justify-center items-center"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;

  