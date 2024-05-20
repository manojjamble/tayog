import React from "react";

const MentorBackground = () => {
  return (
    <div className="w-full">
      <div className="font-semibold text-black">Background</div>
      <EachHistory />
      <EachHistory />
    </div>
  );
};

export default MentorBackground;

const EachHistory = () => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-500 mt-1">
      <div className="">Disciplines</div>
      <div className="flex flex-wrap items-center justify-end space-x-2">
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <button className="border border-gray-300 p-2 rounded-sm shadow-md hover:text-logoblue hover:border-logoblue">
      Magnetic Resonance
    </button>
  );
};
