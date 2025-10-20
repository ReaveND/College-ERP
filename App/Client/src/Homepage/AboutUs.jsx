import React from "react";

function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-900">
      
      {/* Hero Section */}
      <section className="w-full bg-blue-950 text-white py-13 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          About Vedanta Institute of Technology
        </h1>
        <p className="max-w-3xl mx-auto text-lg text-gray-200">
          Established with a vision to foster innovation and excellence, Vedanta Institute of Technology 
          is committed to shaping the next generation of leaders, thinkers, and innovators.
        </p>
      </section>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-8xl mx-auto px-4 lg:px-5 py-12 gap-4">
        
        {/* Floating Sidebar */}
        <aside className="hidden lg:block w-64 sticky top-24 h-fit bg-white shadow-md rounded-xl border border-gray-200 p-10 mr-5">
          <h2 className="text-blue-950 text-lg font-bold mb-4">Contents</h2>
          <ul className="space-y-3 text-gray-700 text-sm">
            <li><a href="#vision" className="hover:text-yellow-600">Vision & Mission</a></li>
            <li><a href="#academic" className="hover:text-yellow-600">Academic Excellence</a></li>
            <li><a href="#infra" className="hover:text-yellow-600">Infrastructure</a></li>
            <li><a href="#research" className="hover:text-yellow-600">Research & Innovation</a></li>
            <li><a href="#life" className="hover:text-yellow-600">Vibrant Student Life</a></li>
            <li><a href="#industry" className="hover:text-yellow-600">Industry Partnerships</a></li>
            <li><a href="#community" className="hover:text-yellow-600">Beyond Academics</a></li>
          </ul>
        </aside>

        {/* Right Main Content */}
        <main className="flex-1 flex flex-col gap-16">
          
          {/* Vision & Mission */}
          <section id="vision" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Our Vision</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              To emerge as a premier institution of higher learning recognized globally for academic
              excellence, innovation, and societal impact. Vedanta Institute of Technology envisions
              creating leaders who combine deep subject knowledge with ethical values and social responsibility.
            </p>
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Our Mission</h2>
            <p className="text-gray-700 leading-relaxed">
              We aim to provide transformative education by nurturing talent, fostering creativity,
              and cultivating leadership qualities. Our mission is to equip students with
              cutting-edge knowledge, strong analytical skills, and hands-on experiences that enable them to excel 
              in their chosen careers and make meaningful contributions to society.
            </p>
          </section>

          {/* Academic Excellence */}
          <section id="academic" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">Academic Excellence</h2>
            <p className="text-gray-700 leading-relaxed mb-10 text-center">
              Academic rigor and innovation are the hallmarks of Vedanta Institute of Technology.
              Our curriculum is carefully designed to bridge the gap between theory and modern industry needs.
              Students are trained for real-world applications and research excellence.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">Undergraduate Programs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Programs in engineering, science, and humanities that combine theory, practical experience,
                  projects, and industry exposure.
                </p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-lg border border-gray-200 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold text-yellow-600 mb-3">Postgraduate Programs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Advanced programs fostering research, innovation, and domain expertise to prepare leaders
                  and specialists.
                </p>
              </div>
            </div>
          </section>

          {/* Infrastructure */}
          <section id="infra" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-6 text-center">World-Class Infrastructure</h2>
            <p className="text-gray-700 leading-relaxed mb-10 text-center">
              Our sprawling campus integrates classrooms, labs, collaborative spaces, digital libraries, and recreational areas.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-yellow-600 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">Advanced Labs</h3>
                <p className="text-gray-700 leading-relaxed">
                  Hands-on experience with state-of-the-art technology and instruments.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-yellow-600 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">Expert Faculty</h3>
                <p className="text-gray-700 leading-relaxed">
                  Learn from academics with strong industry exposure.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-2xl border-t-4 border-yellow-600 transform transition-transform duration-300 hover:scale-105">
                <h3 className="text-xl font-semibold mb-3">Digital Libraries</h3>
                <p className="text-gray-700 leading-relaxed">
                  Access thousands of journals, e-books, and research papers.
                </p>
              </div>
            </div>
          </section>

          {/* Thematic Sections */}
          <section id="research" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Research & Innovation</h2>
            <p className="text-gray-700 leading-relaxed">
              Encouraging students and faculty to explore emerging technologies, publish findings, and collaborate with industries. Innovation labs and incubation centers foster entrepreneurship.
            </p>
          </section>

          <section id="life" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Vibrant Student Life</h2>
            <p className="text-gray-700 leading-relaxed">
              Students participate in cultural events, sports, clubs, and social initiatives for holistic growth.
            </p>
          </section>

          <section id="industry" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Strong Industry Partnerships</h2>
            <p className="text-gray-700 leading-relaxed">
              Collaborations with industries provide practical exposure, live projects, workshops, and seamless placements.
            </p>
          </section>

          <section id="community" className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-yellow-600">
            <h2 className="text-3xl font-bold text-blue-950 mb-4">Commitment Beyond Academics</h2>
            <p className="text-gray-700 leading-relaxed">
              Vedanta Institute actively contributes to community development and sustainability projects, fostering responsible citizens.
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

export default AboutUs;
