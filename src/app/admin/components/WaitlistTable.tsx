const waitlistData = [
  {
    id: 1,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Individual",
    useCase: "Bill Payments",
    platform: "Mobile",
  },
  {
    id: 2,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Business",
    useCase: "Bill Payments",
    platform: "Mobile",
  },
  {
    id: 3,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Business",
    useCase: "Bill Payments",
    platform: "Mobile",
  },
  {
    id: 4,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Business",
    useCase: "Travel payments",
    platform: "Mobile",
  },
  {
    id: 5,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Business",
    useCase: "Travel payments",
    platform: "IOS",
  },
  {
    id: 6,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Business",
    useCase: "Travel payments",
    platform: "Mobile",
  },
  {
    id: 7,
    date: "12/03/25",
    email: "jitu@example.com",
    location: "Nigeria",
    type: "Business",
    useCase: "Travel payments",
    platform: "IOS",
  },
];

export default function WaitlistTable() {
  return (
    <div className="bg-black/5 rounded-xl shadow p-4 overflow-x-auto ">
      <h2 className="font-semibold  text-black/80">Waitlist Overview</h2>
      <p className="text-xs text-black/60 mb-3">
        Monitor sign-ups, segment by interest, and prepare targeted
        communications for early access.
      </p>
      <table className="w-full border-collapse text-sm ">
        <thead className="text-black/80 ">
          <tr className="text-left bg-black/10 text-nowrap">
            <th className="p-2">#</th>
            <th className="p-2 px-6 ">Date</th>
            <th className="p-2 px-6">Email</th>
            <th className="p-2 px-6">Location</th>
            <th className="p-2 px-6">User Type</th>
            <th className="p-2 px-6">Use Case</th>
            <th className="p-2 px-6">Preferred Platform</th>
          </tr>
        </thead>
        <tbody>
          {waitlistData.map((row) => (
            <tr key={row.id} className="border-b border-black/8 hover:bg-gray-50 text-nowrap">
              <td className="p-2 py-4">{row.id}</td>
              <td className="px-6 py-4">{row.date}</td>
              <td className="px-6 py-4">{row.email}</td>
              <td className="px-6 py-4">{row.location}</td>
              <td className="px-6 py-4">{row.type}</td>
              <td className="px-6 py-4">{row.useCase}</td>
              <td className="px-6 py-4">{row.platform}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
