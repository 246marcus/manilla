import Image from "next/image";

interface TopbarProps {
  title: string;
  subtitle: string;
  description: string;
}
import React from "react";

const Topbar: React.FC<TopbarProps> = ({ title, subtitle, description }) => {
  return (
    <div className=" text-black/80">
      {/* top  */}
      <div className="flex justify-between items-center p-4  bg-black/2">
        <h1 className="text-xl font-semibold">{title}</h1>
        <div className="flex items-center space-x-3">
          <Image
            src="/icons/profiledash.png" // dummy image
            alt="Profile"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="text-start">
            <p className="font-medium">Alison Eyo</p>
            <p className="text-sm text-black/50">alison@manilla.ui</p>
          </div>
        </div>
      </div>

      {/* bottom */}
      <div className="p-4 pb-1 bg-black/10 shadow">
        <h2 className="font-semibold">{subtitle}</h2>
        <p className="text-sm  text-black/50">{description}</p>
      </div>
    </div>
  );
};
export default Topbar;
