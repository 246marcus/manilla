import React from "react";
import OverviewCards from "./OverviewCards";
import Topbar from "./Topbar";
import WaitlistTable from "./WaitlistTable";
import LatestBlogs from "./LatestBlogs";

const Dashboard = () => {
  return (
    <>
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
