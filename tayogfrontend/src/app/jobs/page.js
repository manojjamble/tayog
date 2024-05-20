import React from "react";
import Footer from "../../components/Footer";
import Search from "./Search";
import LoggedNavbar from "../../components/LoggedNavbar";

const Jobs = () => {
  return (
    <div>
      <LoggedNavbar />
      <Search />
      <Footer />
    </div>
  );
};

export default Jobs;
