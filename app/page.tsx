'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast, Toaster } from 'sonner';

/* ─── data ─────────────────────────────────────────────── */
const sliderImages = [
  '/images/front.jpg',
  '/images/inside.jpg',
  '/images/audito.jpg',
  '/images/library.jpg',
  '/images/gradu.jpg',
];

const taglines = [
  'Knowledge. Innovation. Excellence – Nurturing talent, inspiring success.',
  'Empowering Minds, Shaping Futures.',
  'Where Learning Meets Leadership.',
  'Recognised for Excellence in Technical Education and Research',
  'Approved by AICTE, Affiliated to MAKAUT, Accredited by NBA',
];

const courseData = [
  {
    title: 'Engineering',
    icon: 'fas fa-cogs',
    courses: ['Mechanical', 'Civil', 'Electrical', 'Electronics'],
  },
  {
    title: 'Computer Science',
    icon: 'fas fa-laptop-code',
    courses: ['AI & ML', 'Data Science', 'Cybersecurity', 'Software Engineering'],
  },
  {
    title: 'Business Administration',
    icon: 'fas fa-briefcase',
    courses: ['BBA General', 'BBA Finance', 'BBA Marketing'],
  },
  {
    title: "Master's Courses",
    icon: 'fas fa-university',
    courses: ['M.Tech', 'MBA', 'MCA'],
  },
];

/* ─── component ─────────────────────────────────────────── */
export default function Home() {
  const [slide, setSlide] = useState(0);
  const [tagline, setTagline] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
  const router = useRouter();

  /* auto-advance slider every 3 s */
  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % sliderImages.length), 3000);
    return () => clearInterval(t);
  }, []);

  /* rotate tagline every 3 s */
  useEffect(() => {
    const t = setInterval(() => setTagline(p => (p + 1) % taglines.length), 3000);
    return () => clearInterval(t);
  }, []);

  /* show logout toast if redirected after logout */
  useEffect(() => {
    const msg = sessionStorage.getItem('logoutToast');
    if (msg) {
      toast.success(msg);
      sessionStorage.removeItem('logoutToast');
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Toaster position="bottom-right" />

      {/* ────────────────── HEADER ────────────────── */}
      <div className="bg-gray-100 shadow-md p-4">
        <div className="bg-gray-200 px-10 py-5 rounded-lg flex items-center">

          {/* logo + name */}
          <div className="flex items-center space-x-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/logo.jpeg"
              alt="College Logo"
              className="h-20 w-20 md:h-24 md:w-24 object-cover rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
            />
            <div className="flex flex-col justify-center">
              <span className="text-2xl md:text-3xl font-extrabold text-blue-950 border-b-2 border-blue-950 pb-1">
                Vedanta Institute of Technology
              </span>
              <span className="ml-2 text-yellow-600 font-medium text-sm md:text-base mt-1 transition-all duration-500">
                {taglines[tagline]}
              </span>
            </div>
          </div>

          {/* dashboard button */}
          <div className="p-8 ml-auto">
            <button
              onClick={() => setModalOpen(true)}
              className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-yellow-600 transition hover:scale-105 duration-500 cursor-pointer font-semibold"
            >
              Dashboard
            </button>
          </div>
        </div>

        {/* nav */}
        <ul className="flex flex-wrap justify-center mt-3 space-x-6 text-gray-800 font-medium">
          {[
            { label: 'Home', href: '#' },
            { label: 'Academics', href: '/academics' },
            { label: 'Faculty', href: '/our-faculty' },
            { label: 'Placement', href: '/placements' },
            { label: 'Admission', href: '/admission' },
            { label: 'Contact', href: '/contact' },
            { label: 'About', href: '/about' },
          ].map(({ label, href }) => (
            <li key={label}>
              <a href={href} className="rounded hover:bg-yellow-600 hover:text-white px-4 py-2 transition block">
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ────────────────── MARQUEE ────────────────── */}
      <div className="w-full bg-blue-950 overflow-hidden py-2">
        <div style={{ display: 'inline-block', whiteSpace: 'nowrap', animation: 'marquee 22s linear infinite' }}>
          <span className="mx-8 text-white">🎓 Admissions Open 2025!</span>
          <span className="mx-8 text-white">📢 Annual Tech Fest Coming Soon!</span>
          <span className="mx-8 text-white">💡 Scholarship Applications Accepted!</span>
          <span className="mx-8 text-white">🎓 Admissions Open 2025!</span>
          <span className="mx-8 text-white">📢 Annual Tech Fest Coming Soon!</span>
          <span className="mx-8 text-white">💡 Scholarship Applications Accepted!</span>
        </div>
        <style>{`@keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}`}</style>
      </div>

      {/* ────────────────── SLIDER ────────────────── */}
      <div className="relative w-full overflow-hidden" style={{ height: '680px' }}>
        {/* track */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            height: '100%',
            width: `${sliderImages.length * 100}vw`,
            transform: `translateX(-${slide * 100}vw)`,
          }}
        >
          {sliderImages.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={i}
              src={src}
              alt=""
              style={{ width: '100vw', height: '100%', flexShrink: 0, objectFit: 'cover' }}
            />
          ))}
        </div>

        {/* overlay text */}
        <div className="absolute inset-0 flex flex-col justify-end pb-12 px-8 md:px-16">
          <div className="bg-black/45 p-10 rounded-xl max-w-6xl mx-auto">
            <h1 className="text-white text-4xl font-extrabold drop-shadow-lg leading-tight mb-4">
              Simplifying Education with Technology.
            </h1>
            <p className="text-gray-200 text-lg font-medium leading-relaxed">
              Unlock your potential with{' '}
              <span className="text-white font-semibold">world-class education</span>, innovative
              research, and a vibrant community. At Uneza University, we inspire leaders, foster
              innovation, and prepare you for success in a rapidly evolving world.
              Join us and shape your future today!
            </p>
          </div>
        </div>

        {/* dot nav */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {sliderImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`w-3 h-3 rounded-full border-2 border-white transition-colors duration-300 ${i === slide ? 'bg-white' : 'bg-white/30'}`}
            />
          ))}
        </div>
      </div>

      {/* ────────────────── CAMPUS VIEW ────────────────── */}
      <div className="campus max-w-7xl mx-auto px-6 py-12 border-b-2 border-gray-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 text-center md:text-left">
          Campus View
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/campusview.jpg"
            alt="Campus"
            className="h-[60vh] w-full md:w-[45vw] rounded-xl shadow-lg border-4 border-gray-200 object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="flex flex-col space-y-4 md:mx-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Outlook about Vedanta</h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
              Vedanta Institute of Technology is a leading institution committed to excellence in
              engineering and technology education. The college offers modern classrooms,
              well-equipped laboratories, and a rich library to support both learning and research.
              Experienced faculty guide students through theoretical and practical knowledge,
              fostering strong technical skills. The institute emphasizes innovation, skill
              development, and holistic growth, encouraging participation in workshops, seminars,
              and extracurricular activities. With a dynamic and supportive environment, Vedanta
              Institute of Technology prepares students to excel academically, professionally, and
              personally.
            </p>
            <Link
              href="/campus-view"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md w-max transition-all duration-300"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>

      {/* ────────────────── EVENT LIFE ────────────────── */}
      <div className="event-life max-w-7xl mx-auto px-6 py-12 border-b-2 border-gray-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-8 text-center md:text-left">
          Event Life
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="flex flex-col space-y-4 md:mx-6 order-1">
            <h2 className="text-3xl md:text-4xl font-semibold text-blue-900">Life at Vedanta Institute</h2>
            <p className="text-gray-700 text-justify text-base md:text-lg leading-relaxed">
              At Vedanta Institute of Technology, student life is vibrant and full of opportunities.
              Our campus hosts a wide range of events including cultural fests, tech workshops,
              seminars, sports competitions, and community service activities. Students are
              encouraged to participate, collaborate, and develop leadership skills in a lively and
              supportive environment. Experience a campus culture where learning, creativity, and
              fun come together to shape well-rounded individuals.
            </p>
            <a
              href="#"
              className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md w-max transition-all duration-300"
            >
              Explore
            </a>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/images/event.jpg"
            alt="Event Life"
            className="h-[60vh] w-full md:w-[45vw] rounded-xl shadow-lg border-4 border-gray-200 object-cover hover:scale-105 transition-transform duration-500 order-2"
          />
        </div>
      </div>

      {/* ────────────────── ACADEMICS ────────────────── */}
      <div id="academics" className="max-w-7xl mx-auto px-6 py-12 border-b-2 border-gray-300">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 text-center md:text-left">
          Academics &amp; Programs
        </h1>

        {/* flip cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 place-items-center">
            {courseData.map((item, index) => (
              <div
                key={index}
                className="relative w-72 cursor-pointer"
                style={{ height: '220px' }}
                onMouseEnter={() => setFlipped(index)}
                onMouseLeave={() => setFlipped(null)}
              >
                <div
                  style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    transition: 'transform 0.8s',
                    transformStyle: 'preserve-3d',
                    transform: flipped === index ? 'rotateY(180deg)' : 'rotateY(0deg)',
                  }}
                >
                  {/* Front */}
                  <div
                    style={{ backfaceVisibility: 'hidden' }}
                    className="absolute inset-0 bg-blue-50 rounded-2xl shadow-lg flex flex-col justify-center items-center p-6"
                  >
                    <div className="p-4 rounded-full mb-4 flex items-center justify-center text-3xl bg-blue-900 text-white shadow-md">
                      <i className={item.icon}></i>
                    </div>
                    <div
                      className="text-xl font-semibold text-gray-800 tracking-wide border-b-4 pb-1 px-2 text-center"
                      style={{ borderColor: 'rgb(30 58 138)' }}
                    >
                      {item.title}
                    </div>
                  </div>

                  {/* Back */}
                  <div
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                    className="absolute inset-0 bg-white rounded-2xl shadow-xl p-6 flex flex-col justify-between"
                  >
                    <div>
                      <h3 className="text-xl font-extrabold text-gray-900 mb-3 border-b pb-2">
                        {item.title}
                      </h3>
                      <ul className="space-y-2">
                        {item.courses.map((course, i) => (
                          <li key={i} className="text-gray-700 text-base font-medium hover:text-gray-900 transition">
                            {course}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Link
          href="/academics"
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-lg shadow-md w-max transition-all duration-300 inline-block"
        >
          Know More
        </Link>
      </div>

      {/* ────────────────── FOOTER ────────────────── */}
      <footer id="contact" className="bg-blue-950 text-gray-300 mt-16">
        <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Your College Name</h2>
            <p className="text-gray-400">
              Excellence in Education, Innovation, and Research. Empowering students with
              knowledge, skills, and values to lead in a dynamic world.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Quick Links</h2>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-blue-300 transition">Home</a></li>
              <li><a href="/about" className="hover:text-blue-300 transition">About Us</a></li>
              <li><a href="/admission" className="hover:text-blue-300 transition">Admissions</a></li>
              <li><a href="/contact" className="hover:text-blue-300 transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white mb-3">Contact Us</h2>
            <p className="text-sm">📍 123 College Road, City, State, India</p>
            <p className="text-sm">📧 info@yourcollege.edu</p>
            <p className="text-sm">📞 +91 98765 43210</p>
          </div>
        </div>
        <div className="py-4 text-center text-gray-400 text-sm border-t border-blue-800">
          &copy; {new Date().getFullYear()} Your College Name. All Rights Reserved.
        </div>
      </footer>

      {/* ────────────────── DASHBOARD MODAL ────────────────── */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          style={{ backdropFilter: 'blur(12px)', backgroundColor: 'rgba(0,0,0,0.3)' }}
          onClick={() => setModalOpen(false)}
        >
          <div
            className="relative rounded-lg shadow-lg w-full max-w-md p-6"
            style={{ background: 'linear-gradient(to top, #1e3a8a, #172554)' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-5 text-white hover:text-gray-400 text-2xl font-bold cursor-pointer"
              onClick={() => setModalOpen(false)}
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center text-white">Login to Dashboard</h2>
            <p className="mb-6 text-white text-center">Welcome to VIT. Please choose your Login method!</p>
            <div className="flex justify-between gap-2">
              <button
                onClick={() => {
                  setModalOpen(false);
                  router.push('/student/login');
                }}
                className="px-3.5 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:scale-105 transition duration-300 cursor-pointer font-semibold"
              >
                Student Login
              </button>

              <button
                onClick={() => {
                  setModalOpen(false);
                  router.push('/faculty/login');
                }}
                className="px-3.5 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:scale-105 transition duration-300 cursor-pointer font-semibold"
              >
                Faculty Login
              </button>

              <button
                onClick={() => {
                  setModalOpen(false);
                  router.push('/admin/login');
                }}
                className="px-3.5 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 hover:scale-105 transition duration-300 cursor-pointer font-semibold"
              >
                Admin Login
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}

