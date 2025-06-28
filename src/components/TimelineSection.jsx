import { CalendarDays } from "lucide-react";

const TimelineSection = () => {
  return (
    <section className="bg-violet-50 py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <CalendarDays className="w-10 h-10 text-[#7A3EF2]" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
          Timeline to Get Pollution NOC
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto mb-4">
          <strong>Consent to Establish (CTE)</strong>: Typically takes <strong>20 to 30 working days</strong>.<br />
          <strong>Consent to Operate (CTO)</strong>: Generally granted within <strong>45 to 60 working days</strong> after application.
        </p>

        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          Timelines may vary depending on document accuracy and inspection clearance. <strong>Lawfinity</strong> ensures faster processing with expert follow-ups and proper documentation.
        </p>
      </div>
    </section>
  );
};

export default TimelineSection;
