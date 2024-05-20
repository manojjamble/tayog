import React from "react";

const Notification = () => {
  return (
    <div className="w-full flex flex-col space-y-4 items-center p-4 border border-gray-200 shadow-md rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="bg-pink-400 w-8 h-8 rounded-md"></div>
          <div className="font-semibold text-sm text-gray-800">
            Dr. Niranjan
          </div>
        </div>
        <button className="flex items-center p-2">
          <CloseButton />
        </button>
      </div>
      <div className="text-xs text-gray-600">
        Your interview is being scheduled for tomorrow at 5:30 AM, by Mentor.
      </div>
    </div>
  );
};

export default Notification;

const CloseButton = () => {
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
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
