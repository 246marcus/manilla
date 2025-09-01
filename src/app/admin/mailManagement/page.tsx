import React from "react";
import AppSidebar from "../components/Sidebar";
import MailManagementPage from "../components/mailcomp/MailManagementPage";

const MailHome = () => {
  return (
    <>
      <p className="text-center mt-20 lg:hidden">Desktop Mode Only</p>
      <div className="hidden lg:flex">
        <AppSidebar />
        <MailManagementPage />
      </div>
    </>
  );
};

export default MailHome;
