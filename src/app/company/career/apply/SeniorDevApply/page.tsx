// import CareerForm from "../../CareerForm";
import JobDetails from "../../JobDetail";
import JobOverview from "../../JobOverview";

const SeniorDevApply: React.FC = () => {
  const displayTitle="Senior Blockchain Developer"
  const jobArray = [
    {
      title: "Job Description",
      content: [
        "As a Senior Blockchain Developer, you'll be responsible for the entire development lifecycle of our blockchain projects. You'll work closely with product managers, engineers, and designers to translate complex business needs into secure, scalable, and efficient blockchain solutions.",
      ],
    },
    {
      title: "Job Responsibilities",
      content: [
        "Design, develop, and deploy smart contracts on industry-leading blockchain platforms.",
        "Build and integrate decentralized applications (dApps) that leverage smart contract functionality.",
        "Collaborate with the security team to ensure the highest level of security for our blockchain applications.",
        "Write clean, well-documented, and efficient code that adheres to best practices.",
        "Stay up-to-date on the latest advancements in blockchain technology and identify new opportunities for its application within our FinTech products.",
        "Participate in code reviews.",
      ],
    },
    {
      title: "Job Requirements",
      content: [
        "Minimum 5+ years of experience in software development with a strong focus on blockchain technologies.",
        "Expertise in one or more popular blockchain programming languages (e.g., Solidity, Rust).",
        "Knowledge of DeFi (Decentralized Finance) protocols and applications.",
        "In-depth understanding of blockchain concepts such as consensus mechanisms, cryptography, and distributed ledger technology.",
        "Strong communication and collaboration skills.",
        "Ability to work independently and manage multiple projects simultaneously.",
        "A passion for FinTech and its potential to revolutionize the financial industry.",
      ],
    },
    {
      title: "Working At Manila",
      content: [
        " Working at Manilla means joining a forward-thinking, inclusive blockchain company where innovation thrives. Your ideas are valued, your growth is nurtured, and your contributions help shape a smarter, more accessible financial future for everyone.",
      ],
    },
  ];
  return (
    <section className=" overflow-hidden mt-10 lg:mt-15">
      <JobOverview
        title="Senior Blockchain Developer"
        apply="Apply As Developer"
        discription="Manilla Finance is seeking a highly motivated and experienced Senior Blockchain Developer to join its growing team. In this role, you'll play a pivotal part in designing, developing, and implementing innovative blockchain-based solutions that empower our FinTech solutions."
        highlights={[
          "Minimum 5+ years of experience in software development with a strong focus on blockchain technologies.",
          "Proven experience designing, developing, and deploying smart contracts.",
          "Expertise in one or more popular blockchain programming languages (e.g., Solidity, Rust).",
          "Knowledge of DeFi (Decentralized Finance) protocols and applications.",
        ]}
      />
      <JobDetails jobArray={jobArray} displayTitle={displayTitle} />
    </section>
  );
};

export default SeniorDevApply;
