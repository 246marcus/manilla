import React from "react";

interface ValueCardProps {
  image: string; // path or URL
  title: string;
  description: string;
  xprop?: string;
}

const ValueCard: React.FC<ValueCardProps> = ({
  image,
  title,
  description,
  xprop = "",
}) => {
  return (
    <div
      className={`md:flex-5/12 max-w-md md:max-w-3xl bg-white border-3 lg:h-80  border-black/40 rounded-2xl p-6 shadow-xl shadow-black/50 hover:shadow-md transition flex flex-col items-center justify-center ${xprop}`}
    >
      <img src={image} alt={title} className="w-10" />
      <h3 className="text-lg font-semibold text-gray-800 mb-2 text-center">
        {title}
      </h3>
      <p className="text-sm text-gray-600 text-center max-w-md">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
