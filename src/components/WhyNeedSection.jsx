import {
  Factory,
  Users,
  BadgeCheck,
  LayoutDashboard,
  ShieldCheck,
  Trash2,
  Gavel,
  RefreshCcw,
  FileCheck,
} from "lucide-react";

const WhyNeedSection = () => {
  return (
    <section className="bg-violet-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Why You Need a Pollution NOC
          </h2>
        </div>

        {/* Intro */}
        <div className="text-base sm:text-lg text-gray-700 leading-relaxed mb-12 max-w-4xl mx-auto text-center">
          <p>
            A Pollution NOC ensures that your industrial or service operations do not harm the environment. It's a legal requirement under the <strong>Air and Water (Prevention & Control of Pollution) Acts</strong> and must be obtained before setting up or expanding any manufacturing or service unit.
          </p>
        </div>

        {/* Main Icons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Applicability */}
          <div className="flex items-start gap-4">
            <Users className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Who Needs It</h3>
              <p className="text-gray-600 text-sm mt-1">
                Mandatory for any business planning to start or expand manufacturing, processing, or service operations.
              </p>
            </div>
          </div>

          {/* Issuing Authority */}
          <div className="flex items-start gap-4">
            <BadgeCheck className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Issued By</h3>
              <p className="text-gray-600 text-sm mt-1">
                Granted by the <strong>State Pollution Control Board</strong> based on environmental impact assessment.
              </p>
            </div>
          </div>

          {/* Project Evaluation */}
          <div className="flex items-start gap-4">
            <LayoutDashboard className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Project Evaluation</h3>
              <p className="text-gray-600 text-sm mt-1">
                Boards evaluate pollution risk from emissions, effluents, waste, and noise.
              </p>
            </div>
          </div>

          {/* Waste Management */}
          <div className="flex items-start gap-4">
            <Trash2 className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Waste Management Plan</h3>
              <p className="text-gray-600 text-sm mt-1">
                You must have a proper plan for waste disposal, emissions control, and environment protection.
              </p>
            </div>
          </div>

          {/* Environmental Compliance */}
          <div className="flex items-start gap-4">
            <ShieldCheck className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Stay Legally Compliant</h3>
              <p className="text-gray-600 text-sm mt-1">
                Operating without NOC may lead to notices, prosecution, and loss of business continuity.
              </p>
            </div>
          </div>

          {/* Penalties */}
          <div className="flex items-start gap-4">
            <Gavel className="text-red-600 w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Avoid Legal Trouble</h3>
              <p className="text-gray-600 text-sm mt-1">
                Without NOC, your business risks <strong>fines, closure, and court proceedings</strong>.
              </p>
            </div>
          </div>

          {/* Renewal */}
          <div className="flex items-start gap-4">
            <RefreshCcw className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Timely Renewals</h3>
              <p className="text-gray-600 text-sm mt-1">
                Pollution NOCs are time-bound and must be renewed periodically to remain valid.
              </p>
            </div>
          </div>

          {/* We Handle It */}
          <div className="flex items-start gap-4">
            <FileCheck className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="font-semibold text-gray-800 text-lg">Lawfinity Does It for You</h3>
              <p className="text-gray-600 text-sm mt-1">
                <strong>Lawfinity</strong> manages your end-to-end Pollution NOC — from application to clearance — ensuring speed, accuracy, and compliance.
              </p>
            </div>
          </div>
        </div>

        {/* Outro */}
        <div className="mt-14 text-center text-gray-800 text-lg font-medium">
          Focus on building your business — Lawfinity ensures your environmental compliance is smooth, legal, and hassle-free.
        </div>
      </div>
    </section>
  );
};

export default WhyNeedSection;
