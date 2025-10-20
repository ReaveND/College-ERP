import React from "react";
import CampImg from "../assets/HomeIMG/topview.jpg"; 
import facultyImg from "../assets/HomeIMG/campusfaculty .jpg"; 
import libraryImg from "../assets/HomeIMG/library.jpg"; 
import classImg from "../assets/HomeIMG/campusclassroom.jpg"; 
import audiImg from "../assets/HomeIMG/audito.jpg"; 
import footballImg from "../assets/HomeIMG/campusfootball.jpg"; 
import basketballImg from "../assets/HomeIMG/campusbasketball.jpg"; 
import swimmingPoolImg from "../assets/HomeIMG/campuspool.jpg"; 


const CampusView = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full">
        <img
          src={CampImg}
          alt="Campus Banner"
          className="w-full h-[45vh] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Life at Vedanta Campus
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
A vibrant hub for learning, growth, and innovation, where academics seamlessly meet opportunities. Our institute fosters curiosity, creativity, and critical thinking, empowering students to become leaders and innovators of tomorrow."          </p>
        </div>
      </section>

      {/* Intro Blog */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-4">
          Our Beautiful Campus
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          Vedanta Institute of Technology provides an inspiring environment designed to nurture 
          both intellectual and personal growth. Our campus combines modern infrastructure, 
          world-class academic resources, and vibrant cultural spaces to create a holistic 
          learning experience. From spacious classrooms to advanced laboratories, 
          and from a vast library to state-of-the-art sports facilities – the campus 
          is a perfect blend of learning and recreation.
        </p>
      </section>

      {/* Faculty */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <img src={facultyImg} alt="Faculty" className="w-full md:w-1/2 rounded-lg shadow-md object-cover"/>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Distinguished Faculty</h3>
          <p className="font-body text-gray-700 leading-relaxed max-w-4xl mx-auto text-justify">
  Our experienced faculty members bring a wealth of knowledge and industry expertise. 
  They guide students through both theoretical and practical learning, ensuring that 
  graduates are not only academically strong but also professionally competent. 
  With a deep commitment to research and innovation, they foster an environment 
  that encourages curiosity, problem-solving, and critical thinking.  
  Their mentorship extends beyond classrooms, shaping students into leaders 
  who are prepared to excel in diverse global careers.  
  Through seminars, workshops, and collaborative projects, our faculty ensures 
  that students remain connected with the latest industry trends and practices.  
  This holistic approach empowers graduates with the skills, ethics, and confidence 
  needed to make meaningful contributions to society.  
</p>

        </div>
      </section>

      {/* Library */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <div className="flex flex-col justify-center md:order-1 order-2">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Resourceful Library</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
    Our library is a vibrant hub of knowledge, housing an extensive collection of books, 
    journals, research papers, and digital resources across multiple disciplines. Students 
    have access to quiet study areas for focused learning, as well as collaborative spaces 
    for group discussions and projects. The library is equipped with modern research tools 
    and digital databases, enabling students to explore both classical and contemporary 
    knowledge. With dedicated staff to assist in research and reference, the library fosters 
    intellectual curiosity and supports academic excellence, ensuring that every learner 
    finds the resources they need to thrive.
  </p>
        </div>
        <img src={libraryImg} alt="Library" className="w-full md:w-1/2 rounded-lg shadow-md object-cover md:order-2 order-1"/>
      </section>

      {/* Classrooms */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <img src={classImg} alt="Classroom" className="w-full md:w-1/2 rounded-lg shadow-md object-cover"/>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Modern Classrooms</h3>
            <p className="text-gray-700 leading-relaxed text-justify">
    Our classrooms are spacious, modern, and tech-enabled, designed to promote interactive 
    and engaging learning. Each room is equipped with smart boards, projectors, and 
    audio-visual aids to facilitate dynamic teaching and multimedia presentations. Comfortable 
    seating arrangements ensure that students can focus for extended periods without fatigue. 
    The layout encourages group discussions, collaborative exercises, and active participation. 
    By blending technology with thoughtful design, our classrooms create an ideal environment 
    for academic growth, creativity, and intellectual exploration.
  </p>
        </div>
      </section>

      {/* Auditorium */}
      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <div className="flex flex-col justify-center md:order-1 order-2">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Grand Auditorium</h3>
          <p className="text-gray-700 leading-relaxed text-justify">
    Our auditorium is a vibrant hub for cultural events, seminars, workshops, and guest lectures. 
    Designed with modern acoustics and advanced lighting systems, it ensures an immersive experience 
    for both speakers and audiences. With a large seating capacity, it comfortably accommodates 
    students, faculty, and guests for academic and extracurricular gatherings. The space is 
    thoughtfully arranged to encourage engagement, collaboration, and celebration of talent. 
    Regular events held here provide students with opportunities to showcase skills, develop 
    confidence, and participate in campus life actively.
  </p>
        </div>
        <img src={audiImg} alt="Auditorium" className="w-full md:w-1/2 rounded-lg shadow-md object-cover md:order-2 order-1"/>
      </section>

      {/* Sports & Activities */}
<section className="max-w-6xl mx-auto px-6 py-16 flex flex-col gap-10 border-t-4 border-blue-950 border-b-4 border-yellow-600 bg-gray-50 rounded-xl shadow-sm">
  
  {/* Section Text */}
  <div className="flex flex-col space-y-4 text-center md:text-left">
    <h4 className="text-lg font-semibold text-yellow-600 uppercase tracking-wide">
      Beyond Academics
    </h4>
    <h3 className="text-3xl font-bold text-blue-950">
      Sports & Activities
    </h3>
    <p className="text-gray-700 leading-relaxed text-justify">
    At Vedanta Institute of Technology, we prioritize the overall development of students, 
    combining academics with physical and cultural growth. Our campus features a football ground, 
    basketball court, and swimming pool, promoting fitness, teamwork, and healthy competition. 
    Cultural events, creative clubs, and student societies offer platforms for artistic expression 
    and leadership development. Regular workshops, talent shows, and inter-college competitions 
    enrich the student experience. By participating in these activities, students cultivate 
    discipline, collaboration, and personal confidence, ensuring a balanced and fulfilling campus life.
  </p>
  </div>

  {/* Sports Images */}
  <div className="flex flex-col md:flex-row gap-6 mt-6">
    <img 
      src={footballImg} 
      alt="Football Ground" 
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
    />
    <img 
      src={basketballImg} 
      alt="Basketball Court" 
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
    />
    <img 
      src={swimmingPoolImg} 
      alt="Swimming Pool" 
      className="w-full md:w-1/3 h-64 object-cover rounded-lg shadow-lg border-2 border-gray-200 hover:scale-105 transition-transform duration-300"
    />
  </div>
</section>
<footer className="bg-blue-950 text-white px-6 py-10 mt-15">
  <div className="flex justify-center items-start gap-x-20 text-sm">
    {/* Registration Office */}
    <div className="text-center">
      <h3 className="font-semibold text-lg mb-2">Registration Office</h3>
      <p>Email: <a href="mailto:info@regsite.com" className="underline">info@regsite.com</a></p>
      <p>Tel: 123-456-7890</p>
    </div>

    {/* Admissions Office */}
    <div className="text-center">
      <h3 className="font-semibold text-lg mb-2">Admissions Office</h3>
      <p>Email: <a href="mailto:info@regsite.com" className="underline">info@regsite.com</a></p>
      <p>Tel: 123-456-7890</p>
    </div>

    {/* Financial Aid Office */}
    <div className="text-center">
      <h3 className="font-semibold text-lg mb-2">Financial Aid Office</h3>
      <p>Email: <a href="mailto:info@regsite.com" className="underline">info@regsite.com</a></p>
      <p>Tel: 123-456-7890</p>
    </div>
  </div>

  {/* Footer Bottom */}
  <div className="mt-10 text-center text-[16px] text-gray-300">
    © 2025 by Vedanta Institute of Technology
  </div>
</footer>


    </div>
  );
};

export default CampusView;
