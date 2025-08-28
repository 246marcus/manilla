import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import BlogManagement from "./components/blogcomp/BlogManagement";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 h-screen overflow-y-auto">
       {/*  <Dashboard /> */}
         <BlogManagement/> 
      </div>
    </div>
  );
}
