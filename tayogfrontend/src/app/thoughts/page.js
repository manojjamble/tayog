import React from "react";
import ThoughtBanner from "../../components/ThoughtBanner";
import Filter from "../../components/Filter";
import NoOfFilters from "../../components/NoOfFilters";
import Notification from "../../components/Notification";

const Thoughts = () => {
  return (
    <div className="max-w-4xl bg-white min-h-screen p-16">
      <div className="flex justify-between items-center">
        <div className="w-2/3">
          <Filter isActive={false} />
          <Filter isActive={true} />
        </div>
        <div className="w-1/3">
          <NoOfFilters />
        </div>
      </div>
      <ThoughtBanner />
      <div className="w-64">
        <Notification />
      </div>
    </div>
  );
};

export default Thoughts;
