import Dashboard from "./Dashboard/page";
import AppSidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
      <p className="text-center mt-20 lg:hidden">Desktop Mode Only</p>
      <div className="hidden lg:flex bg-gray-100">
        <div className="flex-1 h-screen overflow-y-auto">
          <Dashboard />
        </div>
      </div>
    </>
  );
}
