import React from "react";

const MentorProfileHead = () => {
  return (
    <div className="w-full flex space-x-2">
      <div className="p-2 border border-gray-100 bg-gray-100 rounded-md">
        <div className="w-48 aspect-square bg-blue-400 rounded-md"></div>
      </div>
      <div className="w-full p-2 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex flex-col text-gray-600">
            <div className="font-bold text-2xl text-gray-800">
              Dr. K. Gautam
            </div>
            <div className="text-lg">Professor at IIT Hyderabad</div>
            <div className="text-lg">Medical Physics</div>
          </div>
          <div className="flex space-x-4">
            <button className="border-2 border-gray-100 text-gray-400 p-2 h-1/2 aspect-square flex items-center justify-center">
              <Star />
            </button>
            <button className="border-2 border-gray-100 text-gray-400 p-2 h-1/2 aspect-square flex items-center justify-center">
              <Mail />
            </button>
            <button className="border-2 border-gray-100 text-gray-400 p-2 h-1/2 aspect-square flex items-center justify-center">
              <OtherOptions />
            </button>
          </div>
        </div>
        <div className="text-gray-500 text-sm flex items-center space-x-4">
          <div>Linkedin</div>
          <div>Instagram</div>
          <div>Youtube</div>
          <div className="underline">Google Scholar</div>
        </div>
      </div>
    </div>
  );
};

export default MentorProfileHead;

const Star = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
      />
    </svg>
  );
};

const Mail = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
      />
    </svg>
  );
};

const OtherOptions = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
};
