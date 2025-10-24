import React from "react";

function Admission1() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">

      {/* Hero Section */}
      <section className="w-full bg-blue-950 text-white py-13 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Admissions 2025
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Welcome to Vedanta Institute of Technology. Here’s all you need to know to join our premier institution.
        </p>
      </section>

      {/* Main Content Wrapper */}
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto px-6 lg:px-12 py-12 gap-16">

        {/* Floating Sidebar */}
        <aside className="hidden lg:block w-64 sticky top-24 h-fit bg-white shadow-md rounded-xl border border-gray-200 p-6 mr-5">
          <h2 className="text-blue-950 text-lg font-bold mb-4">Contents</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><a href="#mandatory" className="hover:text-yellow-600">Mandatory Documents</a></li>
            <li><a href="#important-note" className="hover:text-yellow-600">Important Note</a></li>
            <li><a href="#soft-copy" className="hover:text-yellow-600">Soft Copy Upload</a></li>
              <li><a href="#eligibility" className="hover:text-yellow-600">Eligibility & Admission</a></li> {/* new link */}

            <li><a href="#contact" className="hover:text-yellow-600">Contact</a></li>
            <li><a href="#additional-info" className="hover:text-yellow-600">Additional Information</a></li>
          </ul>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 flex flex-col gap-12">

          {/* Mandatory Documents */}
          <section id="mandatory" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Mandatory Documents (Photocopies Required)</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Class 10 Admit Card (Xerox Copy)</li>
              <li>Class 10 Mark Sheet (Xerox Copy)</li>
              <li>Class 12 Mark Sheet (Xerox Copy)</li>
              <li>WBJEE/JEE-Main Rank Card</li>
              <li>WBJEE/JEE-Main Allotment Letter</li>
              <li>Student’s Aadhaar Card</li>
              <li>Three (3) Passport-size Color Photographs</li>
              <li>PAN Card of Student’s Father/Mother</li>
              <li>Bank Payment Details of WBJEE Counselling Fee (₹5000/-)</li>
              <li>No Cash Transactions Allowed</li>
            </ul>
          </section>

          {/* Important Note */}
          <section id="important-note" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Important Note</h2>
            <p className="text-gray-700 leading-relaxed">
              Keep all original documents handy for verification.
            </p>
          </section>

          {/* Documents for MAKAUT Online Registration */}
          <section id="soft-copy" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Documents Required for MAKAUT Online Registration 2025</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              (Soft Copy & Hard Copy – All documents must be verified and stamped by the college before uploading)
            </p>
            <h3 className="text-xl font-semibold text-yellow-600 mb-2">Soft Copy Requirements (Upload in the following formats)</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Student’s Photograph – JPEG/JPG (Max 180KB)</li>
              <li>Student’s Signature – JPEG/JPG (Max 180KB)</li>
              <li>Verified Class 12 Mark Sheet – PDF (Max 180KB) (Net copy not allowed)</li>
              <li>Verified DOB Proof (10th Admit Card/Birth Certificate) – PDF (Max 180KB)</li>
              <li>Provisional Seat Allotment Letter (WBJEEB) – PDF (Max 180KB)</li>
              <li>Online Anti-Ragging Declaration – PDF (Max 180KB) (Verified by the college)</li>
              <li>Domicile Certificate (For West Bengal Residents Only) – PDF (Max 180KB) (Verified by the college)</li>
              <li>Caste Certificate (If Applicable) – PDF (Max 180KB) (Verified by the college)</li>
              <li>Aadhaar Card – PDF (Max 180KB) (Verified by the college)</li>
            </ul>
          </section>
          {/* Right Main Content: Place this AFTER Soft Copy Section */}
<section id="eligibility" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
  <h2 className="text-3xl font-bold text-blue-950 mb-6">Eligibility Criteria & Admission Process</h2>

  {/* B.Tech */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-900 mb-3">B.Tech: Eligibility Criteria</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1 mb-2">
      <li>Must have passed 10+2 with Physics & Mathematics + one of Chemistry / Biology / Computer Science / Technical Vocational Subject.</li>
      <li>Minimum Marks: General – 45%, Reserved – 40%; English at 10+2 – at least 30%.</li>
      <li>Exam board recognized by Central/State Government.</li>
    </ul>

    <h4 className="text-xl font-semibold text-yellow-600 mt-3 mb-2">Admission Procedure</h4>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Based on WBJEE / JEE Main scores.</li>
      <li>Participate in WBJEEB / JOSAA counseling.</li>
      <li>Seats allotted based on rank, choice, category & availability.</li>
      <li>Report to college within timeline for final admission.</li>
      <li>Required Documents: Class 10 & 12 marksheets, admit cards, allotment letter, domicile/caste certificates, Aadhaar/PAN, Annual Income Certificate (if applicable).</li>
    </ul>
  </div>

  {/* M.Tech */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-900 mb-3">M.Tech: Eligibility & Selection</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>B.E./B.Tech in relevant discipline.</li>
      <li>Minimum 60% marks or 6.75 CGPA in graduation.</li>
      <li>Admission based on GATE / PGET + CCMT/university counseling.</li>
      <li>GATE-qualified candidates get additional weightage.</li>
      <li>Final-year candidates may apply but must produce proof at admission.</li>
    </ul>
  </div>

  {/* MCA */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-900 mb-3">MCA: Eligibility & Selection</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>BCA / B.Sc./B.Com./B.A. with Mathematics (10+2 or graduation). Bridge courses may apply.</li>
      <li>Minimum Marks: General – 50%, Reserved – 45% in graduation.</li>
      <li>Admission based on WB JECA scores & counseling.</li>
    </ul>
  </div>

  {/* BCA */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-900 mb-3">BCA: Eligibility & Selection</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Pass 10+2 in General/Vocational stream from recognized board.</li>
      <li>Admission based on CET merit & counseling.</li>
    </ul>
  </div>

  {/* BBA */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-900 mb-3">BBA: Eligibility & Selection</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Pass 10+2 in any stream from recognized board.</li>
      <li>Admission based on CET merit & counseling.</li>
    </ul>
  </div>

  {/* MBA */}
  <div className="mb-6">
    <h3 className="text-2xl font-semibold text-blue-900 mb-3">MBA: Eligibility & Selection</h3>
    <ul className="list-disc list-inside text-gray-700 space-y-1">
      <li>Completed Bachelor’s degree (full-time) in any field.</li>
      <li>Valid JEMAT score required.</li>
      <li>Admission based on JEMAT scores & counseling by MAKAUT.</li>
    </ul>
  </div>

  <p className="text-gray-700 mt-4 font-semibold">
    For further inquiries, call: 7044598807
  </p>
</section>


          {/* Contact */}
          <section id="contact" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Contact</h2>
            <p className="text-gray-700 leading-relaxed">
              For any inquiries, Call: <span className="font-semibold">7044598807</span>
            </p>
          </section>

          {/* Additional Information */}
          <section id="additional-info" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Additional Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We look forward to welcoming you to Vedanta Institute of Technology, Kolkata! Please ensure all documents are correctly prepared to avoid delays. Follow instructions carefully during registration and online submission to secure your admission.
            </p>
          </section>

        </main>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 text-white px-6 py-10 mt-12 w-full">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10 text-sm text-center md:text-left">
          <div>
            <h3 className="font-semibold text-lg mb-2">Registration Office</h3>
            <p>Email: info@vedanta.edu</p>
            <p>Tel: 123-456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Admissions Office</h3>
            <p>Email: admissions@vedanta.edu</p>
            <p>Tel: 123-456-7890</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Financial Aid Office</h3>
            <p>Email: aid@vedanta.edu</p>
            <p>Tel: 123-456-7890</p>
          </div>
        </div>
        <div className="mt-10 text-center text-gray-300 text-sm">
          © 2025 Vedanta Institute of Technology. All Rights Reserved.
        </div>
      </footer>

    </div>
  );
}

export default Admission1;
