import Navbar from "../../../components/Navbar";
import React from "react";
import SearchBanner from "./SearchBanner";
import Footer from "../../../components/Footer";
import MentorProfileBanner from "../../../components/MentorProfileBanner";
import MyThoughtBanner from "../../../components/MyThoughtsBanner";
import DraftThoughts from "../../../components/DraftThoughtsBanner";
import MentorProfileHead from "../../../components/MentorProfileHead";
import MentoringInsights from "../../../components/MentoringInsights";
import ProfileInsights from "../../../components/ProfileInsights";
import MentorOverview from "../../../components/MentorOverview";
import MentorBackground from "../../../components/MentorBackground";
import MentorExperience from "../../../components/MentorExperience";
import MentorAllThoughts from "../../../components/MentorAllThoughts";

const page = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <SearchBanner />
      <div className="grid grid-cols-5 gap-4 px-6">
        <MentorProfileBanner />
        <MentorProfileBanner />
        <MentorProfileBanner />
        <MentorProfileBanner />
        <MentorProfileBanner />
        <MentorProfileBanner />
        <MentorProfileBanner />
      </div>
      <div className="flex flex-col max-w-3xl items-center">
        <MyThoughtBanner />
        <DraftThoughts />
      </div>
      <div className="max-w-4xl">
        <MentorProfileHead />
        <ProfileInsights />
        <MentorOverview />
        <MentorBackground />
        <MentorExperience />
        <MentorAllThoughts />
      </div>
      <div className="max-w-sm">
        <MentoringInsights />
      </div>
      <Footer />
    </div>
  );
};

export default page;
