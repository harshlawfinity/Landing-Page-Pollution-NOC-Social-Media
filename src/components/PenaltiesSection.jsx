import { Gavel, AlertTriangle } from "lucide-react";

const PenaltiesSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <Gavel className="w-10 h-10 text-red-600" />
        </div>

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          Penalties for Not Having Pollution NOC
        </h2>

        {/* Operating Without NOC */}
        <div className="flex items-start gap-4 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
          <p className="text-gray-700 text-base">
            <strong>Operating without a valid Pollution NOC</strong> may lead to heavy fines, disconnection of electricity/water supply, legal prosecution, and even closure of the industrial unit.
          </p>
        </div>

        {/* Nature of Violation */}
        <div className="flex items-start gap-4 mb-6">
          <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
          <p className="text-gray-700 text-base">
            The <strong>penalty amount varies</strong> based on the category of the industry and severity of environmental violations.
          </p>
        </div>

        {/* Repeat Offenses */}
        <div className="flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
          <p className="text-gray-700 text-base">
            <strong>Repeat violations</strong> can lead to cancellation of licence, blacklisting of the company, and stricter regulatory scrutiny.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PenaltiesSection;
