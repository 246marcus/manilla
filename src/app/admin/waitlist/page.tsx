import React from "react";
import AppSidebar from "../components/Sidebar";
import WaitlistPage from "../components/waitlist/WaitlistPage";

const WaitlistHome = () => {
  return (
    <>
      <p className="text-center mt-20 lg:hidden">Desktop Mode Only</p>
      <div className=" hidden lg:flex ">
        <AppSidebar />
        <WaitlistPage />
      </div>
    </>
  );
};

export default WaitlistHome;
