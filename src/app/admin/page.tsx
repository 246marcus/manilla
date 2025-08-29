import AppSidebar from "./components/Sidebar";

import MailManagementPage from "./components/mailcomp/MailManagementPage";

export default function Home() {
  return (
    <div className="flex bg-gray-100">
      {/* Sidebar */}
      <div className="w-64">
        <AppSidebar />
      </div>

      <div className="flex-1 h-screen overflow-y-auto">
        <MailManagementPage />
      </div>
    </div>
  );
}
