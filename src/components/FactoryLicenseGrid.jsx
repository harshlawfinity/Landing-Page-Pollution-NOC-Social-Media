// Lazy load icons
import { FiFileText, FiShield, FiUsers } from "react-icons/fi";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbBuildingFactory2 } from "react-icons/tb";
import { MdAutorenew } from "react-icons/md";

const PollutionNocGrid = () => {
  const services = [
    {
      title: "Pollution NOC Application",
      desc: "Complete support to apply for Consent to Establish (CTE) and Consent to Operate (CTO) from SPCB/CPCB.",
      icon: <FiFileText className="text-purple-600 text-2xl" />,
    },
    {
      title: "Environmental Compliance",
      desc: "Ensure your industrial unit meets environmental norms and avoids penalties.",
      icon: <FiShield className="text-purple-600 text-2xl" />,
    },
    {
      title: "Document Preparation",
      desc: "We handle technical documentation, reports, and annexures needed for pollution NOC filing.",
      icon: <FaRegCheckCircle className="text-purple-600 text-2xl" />,
    },
    {
      title: "Site Assessment Support",
      desc: "Get expert advice and assistance on location suitability and pollution clearance.",
      icon: <TbBuildingFactory2 className="text-purple-600 text-2xl" />,
    },
    {
      title: "Liaison with Boards",
      desc: "We coordinate with State & Central Pollution Control Boards for seamless processing.",
      icon: <FiUsers className="text-purple-600 text-2xl" />,
    },
    {
      title: "Renewals & Monitoring",
      desc: "Stay compliant with timely NOC renewals and ongoing environmental monitoring guidance.",
      icon: <MdAutorenew className="text-purple-600 text-2xl" />,
    },
  ];

  return (
    <div className="py-16 px-4 bg-white" aria-label="Pollution NOC Services Grid Section">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="md:text-4xl text-3xl font-semibold text-gray-900 mb-10">
          Pollution NOC & Environmental Clearance Services
        </h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-left"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm text-justify">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PollutionNocGrid;
