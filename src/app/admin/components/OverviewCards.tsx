import {
  FaFileAlt,
  FaEnvelopeOpenText,
  FaUsers,
  FaRegNewspaper,
} from "react-icons/fa";

const stats = [
  { title: "Blogs Created", value: 18, icon: <FaFileAlt size={20} className="text-purple-600" /> },
  { title: "Mail Dispatched", value: 200, icon: <FaEnvelopeOpenText size={20} className="text-green-400"  /> },
  { title: "Waitlist", value: 1528, icon: <FaUsers size={20} className="text-blue-500"  /> },
  { title: "Newsletter", value: 763, icon: <FaRegNewspaper size={20} className="text-orange-400"  /> },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mb-5">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white p-4 rounded-xl shadow-md flex items-start justify-between hover:scale-95"
        >
          <div className="flex flex-col gap-1 ">
            <p className="text-black/80 text-sm font-semibold">{stat.title}</p>
            <p className="text-3xl font-bold text-black/80">{stat.value}</p>
            <p className="text-xs  text-black/70 ">
              {stat.value + idx === 0
                ? "Blogs Created"
                : idx === 1
                ? "Total email sent"
                : idx == 2
                ? "Total waitlist entry"
                : "Total newsletter entry"}{" "}
            </p>
          </div>
          <div className="text-2xl text-gray-600">{stat.icon}</div>
        </div>
      ))}
    </div>
  );
}
