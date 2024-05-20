import React from "react";

const ProfileInsights = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        <div className="font-semibold text-black">Profile Insights</div>
        <div className="text-orange-400">How do I get these?</div>
      </div>
      <div className="mt-4 flex items-center flex-wrap">
        <Badge />
        <Badge />
        <Badge />
      </div>
    </div>
  );
};

export default ProfileInsights;

const Badge = () => {
  return (
    <div className="bg-sky-400 h-24 aspect-square rounded-full mx-2"></div>
  );
};
