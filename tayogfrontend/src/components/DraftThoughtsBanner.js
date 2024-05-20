import React from "react";

const DraftThoughtsBanner = () => {
  return (
    <div className="flex flex-col space-y-4 items-center bg-white text-blue border border-gray-200 p-6 shadow-md rounded-md">
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="text-base font-semibold text-logoblue">
            Edit Draft
          </div>
          <div className="h-4 w-[1px] bg-gray-500"></div>
          <div className="text-sm text-gray-500">Last Edited: 4 weeks ago</div>
        </div>
        <div className="text-gray-500">
          <Delete />
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

export default DraftThoughtsBanner;

const Delete = () => {
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
        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
    </svg>
  );
};
