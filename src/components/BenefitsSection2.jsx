import { ShieldCheck, FileCheck, UserCheck, Sparkles } from "lucide-react";

const BenefitsSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="text-center mb-14 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Benefits of Obtaining a Pollution NOC
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-500 max-w-2xl mx-auto">
            A Pollution NOC is essential for compliance, credibility, and seamless operations.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {/* Legal Compliance */}
          <div className="group hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-100 text-center">
            <ShieldCheck className="text-[#7A3EF2] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#7A3EF2]">
              Legal Compliance
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Ensures your business meets environmental laws and avoids legal penalties.
            </p>
          </div>

          {/* Environmental Responsibility */}
          <div className="group hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-100 text-center">
            <Sparkles className="text-[#7A3EF2] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#7A3EF2]">
              Environmental Responsibility
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Reflects your commitment to sustainability and eco-friendly operations.
            </p>
          </div>

          {/* Smooth Operations */}
          <div className="group hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-100 text-center">
            <UserCheck className="text-[#7A3EF2] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#7A3EF2]">
              Smooth Operations
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Operate confidently without fear of closure or enforcement actions.
            </p>
          </div>

          {/* Credibility and Approvals */}
          <div className="group hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-100 text-center">
            <FileCheck className="text-[#7A3EF2] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#7A3EF2]">
              Credibility & Approvals
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Required to obtain factory licence, fire NOC, building approvals, and more.
            </p>
          </div>

          {/* Tender Eligibility */}
          <div className="group hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-100 text-center">
            <ShieldCheck className="text-[#7A3EF2] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#7A3EF2]">
              Tender Eligibility
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Essential for participating in government and corporate tenders.
            </p>
          </div>

          {/* Many More Benefits */}
          <div className="group hover:shadow-md transition-all duration-300 p-6 rounded-xl border border-gray-100 text-center">
            <Sparkles className="text-[#7A3EF2] w-10 h-10 mb-4 mx-auto" />
            <h3 className="text-lg font-semibold text-gray-800 group-hover:text-[#7A3EF2]">
              Many More Benefits
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Supports brand image, investment readiness, and ESG alignment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
