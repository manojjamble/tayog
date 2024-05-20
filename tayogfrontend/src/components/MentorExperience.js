import React from "react";

const MentorExperience = () => {
  return (
    <div className="w-full border border-gray-300 rounded-lg p-6 text-sm">
      <div className="flex items-center justify-between text-base">
        <div className="flex space-x-2 items-center">
          <div className="font-semibold">Experience</div>
          <div className="bg-pink-200 w-6 aspect-square rounded-full flex items-center justify-center shadow-md">
            3
          </div>
        </div>
        <div className="text-orange-400">View all</div>
      </div>
      <div className="font-semibold mt-4">Associate Professor</div>
      <div className="flex items-center justify-between mt-2 text-gray-800">
        <div>Medical Physics, IIT Hyderabad</div>
        <div>July 2022 - Present</div>
      </div>
      <div className="mt-4 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        similique nostrum placeat error praesentium, quam dolorem non laborum
        harum aperiam dolorum, cupiditate totam corrupti enim. Natus maiores,
        ipsum perferendis harum blanditiis nulla atque nemo!
      </div>
      <div className="mt-4 text-logoblue underline">Show more</div>
    </div>
  );
};

export default MentorExperience;
