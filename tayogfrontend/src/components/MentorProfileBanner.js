import React from "react";

const MentorProfileBanner = () => {
  return (
    <div className="p-2 border border-gray-200 rounded-md shadow-md">
      <div className="aspect-square bg-blue-400 rounded-md"></div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex flex-col justify-between">
          <div className="text-gray-800 font-semibold">Dr. D. Bone</div>
          <div className="text-gray-700 text-sm">Professor, IJKU, Mellon</div>
        </div>
        <div className="h-10 shadow-md aspect-square bg-green-200 rounded-full"></div>
      </div>
      <div className="mt-1 text-xs text-gray-600">Medical Physics</div>
      <div className="mt-[2px] text-xs text-gray-400">
        7 sessions (16 reviews)
      </div>
      <button className="mt-[2px] text-logoblue border border-logoblue w-full py-1 rounded-md text-sm">
        View Profile
      </button>
    </div>
  );
};

export default MentorProfileBanner;
