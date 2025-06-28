import {
  Tags,
  FileEdit,
  UserCheck,
  ClipboardList,
  FileCheck,
  UploadCloud,
  RefreshCcw,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Tags,
    title: "Category Identification",
    desc: "Classify the unit as Red, Orange, Green, or White based on pollution potential.",
  },
  {
    number: 2,
    icon: FileEdit,
    title: "Application Filing",
    desc: "Submit the application online through the respective State PCB portal.",
  },
  {
    number: 3,
    icon: UserCheck,
    title: "Inspection by Authorities",
    desc: "Site verification by Pollution Control Board officials.",
  },
  {
    number: 4,
    icon: FileCheck,
    title: "Grant of CTE",
    desc: "Receive Consent to Establish (CTE) after successful evaluation.",
  },
  {
    number: 5,
    icon: UploadCloud,
    title: "Apply for CTO",
    desc: "Once setup is complete, apply for Consent to Operate (CTO).",
  },
  {
    number: 6,
    icon: RefreshCcw,
    title: "Renewal",
    desc: "Renew your CTO periodically to maintain compliance.",
  },
];

const PollutionNOCStepsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Steps to Obtain Pollution NOC
          </h2>
          <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
            Follow these key stages to get your Consent to Establish (CTE) and Consent to Operate (CTO) from the Pollution Control Board.
          </p>
        </div>

        {/* Steps Flow */}
        <div className="flex flex-col items-center space-y-12 md:space-y-0 md:flex-row md:justify-between relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="flex flex-col items-center text-center w-40 relative">
                {/* Step Number Circle */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#7A3EF2] text-white font-semibold mb-3">
                  {step.number}
                </div>

                {/* Icon */}
                <Icon className="w-6 h-6 text-[#7A3EF2] mb-2" />

                {/* Title & Description */}
                <h4 className="text-sm font-semibold text-gray-800">{step.title}</h4>
                <p className="text-xs text-gray-500 mt-1">{step.desc}</p>

                {/* Arrow Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 right-[-28px]">
                    <ArrowRight className="w-5 h-5 text-gray-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PollutionNOCStepsSection;
