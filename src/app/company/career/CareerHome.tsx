import React from "react";
import Button from "@/components/ui/Button";
import careerbg from "../../../../public/images/careerbg.png";
import careerimg from "../../../../public/images/careerimg.png";
import careerW from "../../../../public/images/careerWbg.png";
import Link from "next/link";

interface Role {
  title: string;
  type: string;
}

const CareerHome: React.FC = () => {
  const roles: Role[] = [
    { title: "Senior Blockchain Developer", type: "Hybrid" },
    { title: "Growth Hack Specialist", type: "Hybrid" },
    { title: "Legal Advisor", type: "Hybrid" },
  ];

  return (
    <div
      className=" bg-gradient-to-br pt-30 pb-12 from-gray-100 relative to-white"
      style={{
        backgroundImage: `url(${careerbg.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-sm w-40 hidden md:inline-block left-10 top-18 absolute text-center rounded-full text-white px-4 py-2 mt-10 bg-black/30">
        <Link href="/">
          <span className="hover:underline cursor-pointer">Home</span>
        </Link>{" "}
        &gt; <span className="">Career</span>
      </div>

      <div className="max-w-6xl mx-auto px-2 md:px-12 flex flex-col lg:flex-row items-center lg:gap-6 ">
        <div
          className="hidden lg:inline-flex min-h-170 md:flex-4/12 bg-cover bg-center h-full"
          style={{
            backgroundImage: `url(${careerW.src})`,
          }}
        >
          <img
            src={careerimg.src}
            alt="Career Person"
            className="w-60 flex-1 lg:scale-125 md:w-120 object-contain"
          />
        </div>

        <div className=" text-white rounded-2xl p-8 md:flex-8/12 ">
          <div className="flex flex-col mt-3 items-center justify-center text-center">
            <h1 className="text-3xl  lg:text-4xl font-bold mb-6">Careers</h1>
            <p className="md:text-lg text-sm font-semibold mb-4 shadow shadow-white py-2 px-4 rounded-full bg-black/30">
              Join Our Mission. Shape the future of digital finance
            </p>
            <p className="text-sm leading-relaxed mb-8 p-4 rounded-md bg-white/5">
              Manilla Finance is a user-focused fintech company, and maintaining
              an efficient ecosystem requires the expertise of talented and
              experienced professionals. We invite individuals from all across
              the globe to complete our application form and submit their resume
              to our talent pool. As an equal opportunity employer, Manilla
              encourages everyone to apply for roles that align with their
              skills. Only shortlisted candidates will be contacted.
            </p>
          </div>

          <div className="space-y-4 bg-black/25 md:p-6  rounded-2xl">
            <h2 className="text-xl font-semibold mb-4 flex justify-between items-center bg-white/8 rounded-tr-full border-l-3 border-l-gray-400 rounded-br-full px-4 py-3">
              Open Roles
            </h2>

            {/* Role 1 */}
            <div className="flex flex-col text-center text-sm md:text-base md:text-start md:flex-row justify-between items-center bg-black/30 rounded-tr-full border-l-3 border-l-yellow-400 rounded-br-full px-4 py-3 gap-2">
              <div>
                <h3 className="font-medium">Senior Blockchain Developer</h3>
                <p className="text-xs text-gray-300">Hybrid</p>
              </div>
              <Link href="/company/career/apply/SeniorDevApply">
                <Button className="bg-transparent border rounded-full text-black hover:border-yellow-300">
                  Apply <span className="text-yellow-300">→</span>
                </Button>
              </Link>
            </div>

            {/* Role 2 */}
            <div className="flex flex-col text-center text-sm md:text-base md:text-start md:flex-row justify-between items-center bg-black/30 rounded-tr-full border-l-3 border-l-blue-700 rounded-br-full px-4 py-3 gap-2">
              <div>
                <h3 className="font-medium">Growth Hack Specialist</h3>
                <p className="text-xs text-gray-300">Hybrid</p>
              </div>
              <Link href="/company/career/apply/GrowthSpecialistApply">
                <Button className="bg-transparent border rounded-full text-black hover:border-yellow-300">
                  Apply <span className="text-yellow-300">→</span>
                </Button>
              </Link>
            </div>

            {/* Role 3 */}
            <div className="flex flex-col text-center text-sm md:text-base md:text-start md:flex-row justify-between items-center bg-black/30 rounded-tr-full border-l-3 border-l-green-300 rounded-br-full px-4 py-3 gap-2">
              <div>
                <h3 className="font-medium">Legal Advisor</h3>
                <p className="text-xs text-gray-300">Hybrid</p>
              </div>
              <Link href="/company/career/apply/LegalAdvisorApply">
                <Button className="bg-transparent border rounded-full text-black hover:border-yellow-300">
                  Apply <span className="text-yellow-300">→</span>
                </Button>
              </Link>
            </div>

            <p className="text-[10px] bg-black/60 text-yellow-400 mt-6">
              * NOTE – Please DO NOT send any mail to Manilla Finance’s mail
              addresses. Use the online form only.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerHome;
