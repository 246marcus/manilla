import AppSidebar from "./components/Sidebar";

import MailManagementPage from "./components/mailcomp/MailManagementPage";

export default function Home() {
  return (
    <>
      <p className="text-center mt-20 lg:hidden">Desktop Mode Only</p>
      <div className="hidden lg:flex bg-gray-100">
        {/* Sidebar */}
        <div className="w-64">
          <AppSidebar />
        </div>

        <div className="flex-1 h-screen overflow-y-auto">
          <MailManagementPage />
        </div>
      </div>
    </>
  );
}
