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
} from "react-icons/fa";
import Link from "next/link";

export default function AppSidebar() {
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
          <Link href="/admin/Dashboard">
            <MenuItem
              icon={<FaThLarge />}
              className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            >
              Dashboard
            </MenuItem>
          </Link>

          <Link href="/admin/blogManagement">
            <MenuItem
              icon={<FaBlog />}
              className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            >
              Blog Management
            </MenuItem>
          </Link>

          <Link href="/admin/mail">
            <MenuItem
              icon={<FaEnvelope />}
              className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            >
              Mail Management
            </MenuItem>
          </Link>

          <Link href="/admin/waitlist">
            <MenuItem
              icon={<FaList />}
              className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            >
              Waitlist
            </MenuItem>
          </Link>

          <Link href="/admin/newsletters">
            <MenuItem
              icon={<FaNewspaper />}
              className="text-white bg-black/60 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 my-1"
            >
              Newsletters
            </MenuItem>
          </Link>
        </Menu>

        {/* Logout button pinned bottom */}
        <div className="absolute bottom-8 w-full text-center px-4">
          <button className="flex items-center w-full justify-start gap-2 text-white bg-black/60 px-4 py-2 rounded-md mx-auto border-white/30 border hover:bg-white/90 hover:text-black/80 ">
            <FaSignOutAlt /> Log Out
          </button>
        </div>
      </Sidebar>
    </div>
  );
}
