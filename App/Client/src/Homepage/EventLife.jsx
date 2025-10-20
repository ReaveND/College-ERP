import React from "react";
import eventHero from "../assets/HomeIMG/event1.jpg";
import culturalImg from "../assets/HomeIMG/cultural.jpg";
import workshopImg from "../assets/HomeIMG/workshop.jpg";
import seminarImg from "../assets/HomeIMG/seminar.jpg";
import sportsImg from "../assets/HomeIMG/sports_event.jpg";
import communityImg from "../assets/HomeIMG/community.jpg";

const EventLife = () => {
  return (
    <div className="bg-white text-gray-800 relative">
      {/* Hero Section */}
      <section className="relative w-full h-[60vh]">
        <img
          src={eventHero}
          alt="Event Life Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">
            Event Life at Vedanta Institute
          </h1>
          <p className="mt-4 text-lg text-gray-200 max-w-2xl">
"A vibrant campus where academics, creativity, and collaboration come together.
Students enjoy a balanced environment that fosters fun, leadership, and growth."          </p>
        </div>
      </section>

      {/* Intro Blog */}
      <section className="max-w-6xl mx-auto px-6 py-12 text-center">
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          At Vedanta Institute of Technology, student life is vibrant and full of opportunities. 
          Our campus hosts a wide range of events including cultural fests, tech workshops, 
          seminars, sports competitions, and community service activities. Students are encouraged 
          to participate, collaborate, and develop leadership skills in a lively and supportive environment. 
          Experience a campus culture where learning, creativity, and fun come together to shape well-rounded individuals.
        </p>
      </section>

      {/* Cultural Fests */}
      <section id="cultural" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <img src={culturalImg} alt="Cultural Fests" className="w-full md:w-1/2 rounded-lg shadow-md object-cover"/>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Cultural Fests</h3>
          <p className="text-gray-700 leading-relaxed">
            'Our annual fests celebrate arts, music, drama, and dance, bringing the entire campus together in a 
            vibrant atmosphere. These events provide students with a platform to express their creativity, collaborate with 
            peers, and showcase their unique talents. Beyond entertainment, the fests foster teamwork, leadership, and 
            organizational skills, creating lasting memories and enriching the overall campus experience.''
          </p>
        </div>
      </section>

      {/* Technical Workshops */}
      <section id="workshops" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <div className="flex flex-col justify-center md:order-1 order-2">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Technical Workshops</h3>
          <p className="text-gray-700 leading-relaxed">
            "Hackathons, coding bootcamps, robotics competitions, AI/ML workshops, and other 
            technology-driven events provide students with hands-on opportunities to innovate and 
            experiment. These initiatives encourage collaborative problem-solving, critical thinking, 
            and practical application of classroom knowledge. Participants gain exposure to real-world challenges, 
            develop technical and soft skills, and build projects that can make a tangible impact. Such experiences inspire 
            creativity, foster teamwork, and prepare students to thrive in a rapidly evolving technological landscape."
          </p>
        </div>
        <img src={workshopImg} alt="Workshops" className="w-full md:w-1/2 rounded-lg shadow-md object-cover md:order-2 order-1"/>
      </section>

      {/* Seminars & Guest Lectures */}
      <section id="seminars" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <img src={seminarImg} alt="Seminars" className="w-full md:w-1/2 rounded-lg shadow-md object-cover"/>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Seminars & Guest Lectures</h3>
          <p className="text-gray-700 leading-relaxed">
            "Industry experts and renowned academicians frequently visit the campus to share insights, 
            emerging trends, and real-world experiences through seminars, guest lectures, and workshops. These sessions provide
             students with practical knowledge that goes beyond textbooks, bridging the gap between theory and industry
              practice. Students gain exposure to innovative ideas, best practices, and professional perspectives that inspire 
              critical thinking and creativity. Engaging with experts helps them understand current market demands, emerging 
              technologies, and career opportunities. Such interactions foster networking, mentorship, and a broader understanding of 
              their chosen fields, preparing them to excel academically and professionally."
          </p>
        </div>
      </section>

      {/* Sports Competitions */}
      <section id="sports" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300">
        <div className="flex flex-col justify-center md:order-1 order-2">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Sports Competitions</h3>
          <p className="text-gray-700 leading-relaxed">
            "Inter-college tournaments, as well as indoor and outdoor sports, provide students with opportunities to compete, collaborate, and showcase their talents. Regular fitness activities and sports events encourage a healthy lifestyle and build physical endurance. Participating in team sports fosters communication, leadership, and teamwork skills, essential for personal and professional growth. Students learn to handle both victories and setbacks gracefully, developing resilience and sportsmanship. These activities also create a sense of camaraderie and belonging, enhancing the overall campus experience. Through consistent engagement in sports, students cultivate discipline, strategic thinking, and a balanced approach to academics and extracurricular pursuits."
          </p>
        </div>
        <img src={sportsImg} alt="Sports" className="w-full md:w-1/2 rounded-lg shadow-md object-cover md:order-2 order-1"/>
      </section>

      {/* Community Service */}
      <section id="community" className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-8 border-t border-gray-300 border-b-4 border-blue-950">
        <img src={communityImg} alt="Community Service" className="w-full md:w-1/2 rounded-lg shadow-md object-cover"/>
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-bold text-blue-950 mb-2">Community Service</h3>
          <p className="text-gray-700 leading-relaxed">
            "Students actively engage in social initiatives, volunteering programs, and community development projects, fostering a sense of empathy and compassion. By participating in these activities, they develop leadership skills and learn the importance of teamwork and collaboration. Community outreach encourages students to understand societal challenges and contribute meaningfully to solutions. These experiences instill social responsibility and ethical values that extend beyond the classroom. Through consistent involvement, students cultivate a lifelong commitment to service, becoming responsible citizens who positively impact their communities."
          </p>
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

export default EventLife;
