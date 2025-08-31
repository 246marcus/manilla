"use client";
import sidebarimg from "../../../../public/images/sidebarimage.png";
import logo from "../../../../public/images/dashlogo.png";

import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import {
  FaThLarge,
  FaBlog,
  FaEnvelope,
  FaList,
  FaNewspaper,
  FaSignOutAlt,
  FaAddressBook,
} from "react-icons/fa";
import { useRouter } from "next/navigation";

export default function AppSidebar() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
      });

      if (res.ok) {
        router.push("/admin/login");
      }
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return (
    <div className="h-screen relative ">
      <Sidebar
        image={sidebarimg.src}
        //backgroundColor="#1f2937" // Tailwind slate-800
        rootStyles={{
          color: "white",
          height: "100%",
          /*  paddingTop: "120px", */
        }}
      >
        <img alt="logo" src={logo.src} className="mx-auto my-6 w-auto" />

        <Menu className="px-4 ">
          <MenuItem
            icon={<FaThLarge />}
            className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            onClick={() => router.push("/admin/Dashboard")}
          >
            Dashboard
          </MenuItem>

          <MenuItem
            icon={<FaBlog />}
            className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            onClick={() => router.push("/admin/blogManagement")}
          >
            Blog Management
          </MenuItem>

          <MenuItem
            icon={<FaEnvelope />}
            className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            onClick={() => router.push("/admin/mailManagement")}
          >
            Mail Management
          </MenuItem>

          <MenuItem
            icon={<FaList />}
            className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            onClick={() => router.push("/admin/waitlist")}
          >
            Waitlist
          </MenuItem>

          <MenuItem
            icon={<FaNewspaper />}
            className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            onClick={() => router.push("/admin/newsletters")}
          >
            Newsletters
          </MenuItem>

          <MenuItem
            icon={<FaAddressBook />}
            className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            onClick={() => router.push("/admin/contact")}
          >
            Contact
          </MenuItem>
        </Menu>

        {/* Logout button pinned bottom */}
        <div className="absolute bottom-8 w-full text-center px-4">
          <button
            onClick={handleLogout}
            className="flex items-center w-full justify-start gap-2 text-white bg-black/60 px-4 py-2 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 "
          >
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </Sidebar>
    </div>
  );
}
