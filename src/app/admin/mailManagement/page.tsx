import React from "react";
import AppSidebar from "../components/Sidebar";
import MailManagementPage from "../components/mailcomp/MailManagementPage";

const MailHome = () => {
  return (
    <div className="flex">
      <AppSidebar />
      <MailManagementPage />
    </div>
  );
};

export default MailHome;
