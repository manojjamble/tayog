import React from "react";

const MentorAllThoughts = () => {
  return (
    <div className="w-full border border-gray-300 rounded-lg p-6 text-sm">
      <div className="flex items-center justify-between text-base">
        <div className="flex space-x-2 items-center">
          <div className="font-semibold">Thoughts of Dr. K Gautham</div>
          <div className="bg-pink-200 w-6 aspect-square rounded-full flex items-center justify-center shadow-md">
            9+
          </div>
        </div>
        <div className="text-orange-400">View all</div>
      </div>
      <div className="w-full flex justify-between text-gray-900 mt-4">
        <div className="w-3/4 flex flex-col justify-between pr-2">
          <div>
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
          </div>
          <div className="flex items-center space-x-2 text-xs text-gray-500">
            <div>8 min read</div>
            <div className="h-4 bg-gray-500 w-[1px]"></div>
            <div>Physics</div>
            <div className="h-4 bg-gray-500 w-[1px]"></div>
            <div className="text-logoblue underline">Show more</div>
          </div>
        </div>
        <div className="w-1/5 aspect-square bg-green-400 rounded-md"></div>
      </div>
    </div>
  );
};

export default MentorAllThoughts;
