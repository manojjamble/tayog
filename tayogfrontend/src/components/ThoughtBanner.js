import React from "react";

const ThoughtBanner = () => {
  return (
    <div className="flex flex-col space-y-4 items-center bg-white text-blue border border-gray-200 p-6 shadow-md rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="h-8 w-8 bg-sky-300 rounded-sm"></div>
          <div className="font-semibold text-gray-700">GenuinePhysics</div>
          <div className="h-4 w-[1px] bg-gray-500"></div>
          <div className="text-sm text-gray-500">4 weeks ago</div>
        </div>
        <div className="flex items-center space-x-2 text-gray-500">
          <Bookmark />
          <OtherOptions />
        </div>
      </div>
      <div className="w-full flex justify-between text-gray-900">
        <div className="w-3/4 flex flex-col justify-between pr-2">
          <div className="font-bold text-lg line-clamp-2">
            How does neutron collide with another neutron in a certain
            condition?
          </div>
          <div className="line-clamp-3 text-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
            nesciunt esse quasi et, dolores voluptate voluptates at nihil nam
            consequuntur eius ex expedita iste dolor debitis accusantium earum
            quisquam sapiente. Inventore, doloremque.
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <div>8 min read</div>
            <div className="h-4 bg-gray-500 w-[1px]"></div>
            <div>Physics</div>
          </div>
        </div>
        <div className="w-1/5 aspect-square bg-green-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default ThoughtBanner;

const Bookmark = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
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
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-7 h-7"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
      />
    </svg>
  );
};
