import CareerForm from "./CareerForm";
import JobDetails from "./JobDetail";
import JobOverview from "./JobOverview";

export default function HomePage() {
  return (
    <section className="bg-gradient-to-b from-blue-900 to-blue-950 rounded-t-3xl rounded-b-3xl shadow-lg max-w-6xl mx-auto overflow-hidden">
      <JobOverview />
      <JobDetails />
      <CareerForm />
    </section>
  );
}
