"use client";

import Image from "next/image";

interface SuccessModalProps {
  title: string;
  messageA: string;
  messageB: string;
  subtitle: string;
  buttons: { label: string; onClick: () => void; primary?: boolean }[];
}

const SuccessModal: React.FC<SuccessModalProps> = ({
  title,
  messageA,
  messageB,
  subtitle,
  buttons,
}) => (
  <div className="fixed inset-0 flex items-center  justify-center bg-black/85 z-50">
    <div className="bg-white rounded-lg shadow p-6 w-[500px]  text-center flex flex-col gap-10 translate-x-25">
      <div className="text-start">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p className="text-sm text-black/60 pb-4 border-b-2 border-dashed  mb-2">
          {subtitle}
        </p>
      </div>

      <div className="flex justify-center ">
        <Image src="/icons/deletesuccess.png" alt="" width={100} height={100} />
      </div>

      <div className="flex flex-col text-black/70 gap-1">
        <p className="font-bold text-black/90">{messageA}</p>
        <p className=" text-sm">{messageB}</p>
      </div>

      <div className="flex justify-center gap-3">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={btn.onClick}
            className={`${
              btn.primary
                ? "border bg-black/80 hover:bg-transparent text-white hover:text-black/80 border-black/70     cursor-pointer"
                : "  border border-black/70   cursor-pointer hover:bg-black/80 hover:text-white"
            } px-6 py-2 rounded-md`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  </div>
);

export default SuccessModal;
