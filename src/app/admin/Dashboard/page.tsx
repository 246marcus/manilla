import React from "react";
import OverviewCards from "../components/OverviewCards";
import Topbar from "../components/Topbar";
import WaitlistTable from "../components/WaitlistTable";
import LatestBlogs from "../components/LatestBlogs";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      <Sidebar />
      <Topbar
        title={"Dashboard"}
        subtitle={"Total Overview"}
        description={`Track key metrics - A real-time snapshot of your platform's performance.`}
      />
      <div className="p-6">
        <OverviewCards />
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-6">
          <div className="lg:col-span-5">
            <WaitlistTable />
          </div>
          <div className="lg:col-span-2">
            <LatestBlogs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
