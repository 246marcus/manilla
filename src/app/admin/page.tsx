
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import BlogManagement from "./components/blogcomp/BlogManagement";
import MailManagementPage from "./components/mailcomp/MailManagementPage";
import LoginPage from "./components/login/LoginPage";
import WaitlistPage from "./components/waitlist/WaitlistPage";
import NewsletterPage from "./components/newletter/NewsletterPage";

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
       {/*   <BlogManagement/>  */}
         <MailManagementPage/>
        {/*  <LoginPage/> */}
        {/*  <WaitlistPage/> */}
         {/* <NewsletterPage/> */}
      </div>
    </div>
  );
}



