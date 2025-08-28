import Dashboard from "./Dashboard/page";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
        <Dashboard />
        {/* <BlogManagement /> */}
      </div>
    </div>
  );
}
