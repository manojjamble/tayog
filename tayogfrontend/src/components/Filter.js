import React from "react";

const Filter = ({ isActive }) => {
  return (
    <button
      className={
        isActive
          ? "bg-blue-50 px-4 py-2 rounded-2xl text-blue-400"
          : "bg-blue-400 px-4 py-2 rounded-2xl text-blue-50"
      }
    >
      IITs
    </button>
  );
};

export default Filter;
