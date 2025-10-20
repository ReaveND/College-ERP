import React from "react";

function ContactUs() {
  return (
    <div className="contact-page font-sans text-gray-800">
      

      {/* Hero Section */}
      <section className="contact-hero bg-gradient-to-r from-[#162456] to-[#0d183f] text-white py-12 px-6 flex flex-col items-center justify-center text-center">
        
        <div className="hero-text">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg max-w-2xl">
            We’re here to assist you. Reach out for admissions, support, or general queries.
          </p>
        </div>
      </section>

      {/* Info Section */}
      <section className="contact-info flex flex-wrap justify-around p-10 bg-gray-100">
        <div className="info-card bg-[#162456] hover:bg-yellow-600 text-white p-6 m-3 flex-1 min-w-[220px] max-w-[250px] rounded-lg shadow-md text-center cursor-pointer transition-all duration-500 hover:scale-105">
          <h2 className="mb-2 text-lg font-semibold">📍 Address</h2>
          <p className="text-sm">123 College Road, City, State - 700001</p>
        </div>

        <div className="info-card bg-[#162456] hover:bg-yellow-600 text-white p-6 m-3 flex-1 min-w-[220px] max-w-[250px] rounded-lg shadow-md text-center cursor-pointer transition-all duration-500 hover:scale-105">
          <h2 className="mb-2 text-lg font-semibold">📞 Phone</h2>
          <p className="text-sm">+91 98765 43210</p>
        </div>

        <div className="info-card bg-[#162456] hover:bg-yellow-600 text-white p-6 m-3 flex-1 min-w-[220px] max-w-[250px] rounded-lg shadow-md text-center cursor-pointer transition-all duration-500 hover:scale-105">
          <h2 className="mb-2 text-lg font-semibold">📧 Email</h2>
          <p className="text-sm">vedantainstitute341736@gmail.com </p>
        </div>

        <div className="info-card bg-[#162456] hover:bg-yellow-600 text-white p-6 m-3 flex-1 min-w-[220px] max-w-[250px] rounded-lg shadow-md text-center cursor-pointer transition-all duration-500 hover:scale-105">
          <h2 className="mb-2 text-lg font-semibold">🗺 Campus Map</h2>
          <a
            href="https://www.google.com/maps/place/Meghnad+Saha+Institute+of+Technology"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-bold hover:underline"
          >
            View on Google Maps
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form py-10 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
        <form className="max-w-xl mx-auto flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-md text-base"
          />
          <input
            type="email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-md text-base"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            required
            className="p-3 border border-gray-300 rounded-md text-base"
          ></textarea>
          <button
            type="submit"
            className="bg-[#162456] hover:bg-yellow-600 transition-colors duration-300 text-white py-3 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Map */}
      <section className="contact-map mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.8324128287754!2d88.41251337534263!3d22.510470079535978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0273f14bca0c15%3A0xbd1ef59baa5eafd0!2sMeghnad%20Saha%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1757425980288!5m2!1sen!2sin"
          className="w-full h-96 rounded-lg shadow-md border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </div>
  );
}

export default ContactUs;
