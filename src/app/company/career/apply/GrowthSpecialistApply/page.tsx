import CareerForm from "../../CareerForm";
import JobDetails from "../../JobDetail";
import JobOverview from "../../JobOverview";

const GrowthSpecialistApply: React.FC = () => {
  const displayTitle="Growth Hack Specialist"
  const jobArray = [
    {
      title: "Job Description",
      content: [
        "As a Senior Growth Hack Specialist, you'll be responsible for identifying and capitalizing on growth opportunities across all channels. You'll leverage your analytical expertise and creativity to design, implement, and measure the effectiveness of growth hacking campaigns.",
      ],
    },
    {
      title: "Job Responsibilities",
      content: [
        "Conduct in-depth market research to understand target audiences, competitor strategies, and industry trends.",
        "Identify growth bottlenecks and develop data-driven solutions to overcome them.",
        "Analyze marketing performance metrics and translate insights into actionable recommendations.",
        "Stay on top of the latest growth hacking techniques and tools and identify new opportunities for their application.",
        "Collaborate cross-functionally with marketing, product, and engineering teams to ensure seamless campaign execution.",
        "Develop and maintain clear documentation of growth hacking strategies and experiments.",
      ],
    },
    {
      title: "Job Requirements",
      content: [
        "Minimum 3+ years of experience in growth hacking or a related field (e.g., digital marketing, performance marketing).",
        "Proven track record of successfully implementing growth hacking initiatives that deliver measurable results",
        "Strong analytical skills with experience in marketing analytics platforms.",
        "Excellent understanding of marketing funnels, user acquisition strategies, and conversion optimization techniques.",
        "A creative and data-driven mindset with a passion for experimentation and innovation.",
        "Excellent communication and collaboration skills.",
        "Ability to work independently and manage multiple projects simultaneously.",
      ],
    },
    {
      title: "Working At Manila",
      content: [
        "Working at Manilla means joining a forward-thinking, inclusive blockchain company where innovation thrives. Your ideas are valued, your growth is nurtured, and your contributions help shape a smarter, more accessible financial future for everyone.",
      ],
    },
  ];
  return (
    <section className=" overflow-hidden mt-10 lg:mt-15">
      <JobOverview
        title="Growth Hack Specialist"
        apply="Apply As Growth Specialist"
        discription="We are searching for a brilliant and data-driven Senior Growth Hack Specialist to join our team. In this fast-paced role, you'll be a key player in developing and executing innovative growth hacking strategies that propel our company forward."
        highlights={[
          "Minimum 3+ years of experience in growth hacking or a related field (e.g., digital marketing, performance marketing).",
          "Proven track record of successfully implementing growth hacking initiatives that deliver measurable results",
          "Strong analytical skills with experience in marketing analytics platforms.",
          "Excellent understanding of marketing funnels, user acquisition strategies, and conversion optimization techniques.",
        ]}
      />
      <JobDetails jobArray={jobArray} displayTitle={displayTitle}/>
    </section>
  );
};

export default GrowthSpecialistApply;
