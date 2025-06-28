import {
  FileText,
  ClipboardList,
  User,
  Building2,
  FileBadge,
  PlugZap,
} from "lucide-react";

const DocumentsRequiredSection = () => {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Documents Required
          </h2>
          <p className="mt-4 text-gray-600 max-w-xl mx-auto text-base sm:text-lg">
            Here's a checklist of essential documents needed to apply for a Pollution NOC.
          </p>
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Applicant KYC */}
          <div className="flex items-start gap-4">
            <User className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">KYC Documents</h3>
              <p className="text-sm text-gray-600">
                Aadhaar, PAN, and ID proof of the applicant or authorized signatory.
              </p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex items-start gap-4">
            <ClipboardList className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Email & Mobile Number
              </h3>
              <p className="text-sm text-gray-600">
                Active contact details of the applicant for communication.
              </p>
            </div>
          </div>

          {/* Utility Bill */}
          <div className="flex items-start gap-4">
            <PlugZap className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Utility Bill
              </h3>
              <p className="text-sm text-gray-600">
                Recent electricity or water bill of the premises.
              </p>
            </div>
          </div>

          {/* Site Plan / Layout */}
          <div className="flex items-start gap-4">
            <Building2 className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Site Plan/Layout</h3>
              <p className="text-sm text-gray-600">
                Detailed site layout showing plant, machinery, waste areas, etc.
              </p>
            </div>
          </div>

          {/* Manufacturing Process */}
          <div className="flex items-start gap-4">
            <FileText className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Manufacturing Process
              </h3>
              <p className="text-sm text-gray-600">
                Step-by-step description of operations and pollution potential.
              </p>
            </div>
          </div>

          {/* Raw Materials & Products */}
          <div className="flex items-start gap-4">
            <FileBadge className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Raw Materials & Products List
              </h3>
              <p className="text-sm text-gray-600">
                Complete list of input materials and final products.
              </p>
            </div>
          </div>

          {/* Consent Form */}
          <div className="flex items-start gap-4">
            <ClipboardList className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Consent Application Form
              </h3>
              <p className="text-sm text-gray-600">
                Filled-in application for Consent to Establish (CTE) or Operate (CTO).
              </p>
            </div>
          </div>

          {/* Hazardous Waste Authorization */}
          <div className="flex items-start gap-4">
            <FileText className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Hazardous Waste Authorization
              </h3>
              <p className="text-sm text-gray-600">
                If applicable, documents showing safe disposal plans and approvals.
              </p>
            </div>
          </div>

          {/* Ownership Proof */}
          <div className="flex items-start gap-4">
            <Building2 className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Ownership / Rent Proof
              </h3>
              <p className="text-sm text-gray-600">
                Sale deed or registered rent agreement of the premises.
              </p>
            </div>
          </div>

          {/* Undertaking or Affidavit */}
          <div className="flex items-start gap-4">
            <FileText className="text-[#7A3EF2] w-8 h-8 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Affidavit / Undertaking</h3>
              <p className="text-sm text-gray-600">
                Self-declaration or affidavit as per DPCC/PCB requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentsRequiredSection;
