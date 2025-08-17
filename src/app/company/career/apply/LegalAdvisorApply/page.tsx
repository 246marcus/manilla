import CareerForm from "../../CareerForm";
import JobDetails from "../../JobDetail";
import JobOverview from "../../JobOverview";

const LegalAdvisorApply: React.FC = () => {
  const jobArray = [
    {
      title: "Job Description",
      content: [
        "As a Legal Advisor, you'll be a partner to our business teams, offering expert advice on a wide range of legal matters. You'll draft and review contracts, manage regulatory compliance, and mitigate legal risks.",
      ],
    },
    {
      title: "Job Responsibilities",
      content: [
        "Provide comprehensive legal advice and guidance to various business units on matters such as corporate law,contracts, intellectual property, and data privacy.",
        "Draft, review, and negotiate a variety of legal agreements, ensuring they align with company strategy and minimize risk.",
        "Conduct legal research and analysis to stay up-to-date on relevant laws and regulations impacting the business.",
        "Identify and mitigate potential legal risks associated with new ventures and ongoing operations.",
        "Identify and mitigate potential legal risks associated with new ventures and ongoing operations.",
        "Maintain a strong understanding of legal developments within the Nigerian tech industry.",
        "Collaborate effectively with internal stakeholders across departments to ensure informed decision-making.",
      ],
    },
    {
      title: "Job Requirements",
      content: [
        "A Bachelor’s Degree in Law (LL.B, B.L) and a license to practice in Nigeria.",
        "Minimum of 3+ years of experience working as a Legal Advisor or in a similar role within a reputable company.",
        "Proven ability to provide clear, concise, and commercially-focused legal advice.",
        "Strong understanding of Nigerian corporate law, contracts law, intellectual property law, and data privacy regulations.",
        "Strong understanding of Nigerian corporate law, contracts law, intellectual property law, and data privacy regulations.",
        "Excellent communication and interpersonal skills, with the ability to build strong relationships with internal stakeholders.",
        "Experience working within the Nigerian technology sector.",
        "Knowledge of international business law (beneficial but not required).",
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
        title="Legal Advisor"
        apply="Apply As Legal Advisor"
        discription=" Manilla Technologies is seeking a qualified and experienced Legal Advisor to join our growing team in Lagos, Nigeria. In this hybrid role, you'll play a vital role in supporting our business objectives by providing strategic legal counsel and ensuring compliance across all our operations."
        highlights={[
          "A Bachelor’s Degree in Law (LL.B, B.L) and a license to practice in Nigeria.",
          "Minimum of 3+ years of experience working as a Legal Advisor or in a similar role within a reputable company.",
          "Proven ability to provide clear, concise, and commercially-focused legal advice.",
          "Strong understanding of Nigerian corporate law, contracts law, intellectual property law, and data privacy regulations.",
        ]}
      />
      <JobDetails jobArray={jobArray} />
    </section>
  );
};

export default LegalAdvisorApply;
