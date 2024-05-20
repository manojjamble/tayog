import React from "react";

const MentoringInsights = () => {
  return (
    <div className="p-4">
      <div className="font-bold">Mentoring Engagement Insights</div>
      <div className="grid grid-cols-2 gap-2 text-xs mt-4">
        <EachStatWithInfo />
        <EachStat />
        <EachStat />
        <EachStatWithInfo />
      </div>
      <div className="flex justify-between items-center mt-6">
        <button className="text-logoblue border border-logoblue px-2 py-2 rounded-md shadow-md">
          Notify Me
        </button>
        <button className="text-white bg-logoblue px-2 py-2 rounded-md">
          Book a Session
        </button>
      </div>
    </div>
  );
};

export default MentoringInsights;

const EachStat = () => {
  return (
    <div className="flex flex-col font-semibold">
      <div className="text-logoblue">330 min</div>
      <div>Total mentoring time</div>
    </div>
  );
};

const EachStatWithInfo = () => {
  return (
    <div className="flex flex-col font-semibold">
      <div className="flex items-center justify-between">
        <div className="text-logoblue">330 min</div>
        <div className="text-red-500">
          <InfoButton />
        </div>
      </div>
      <div>Total mentoring time diffenret</div>
    </div>
  );
};

const InfoButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
      />
    </svg>
  );
};
