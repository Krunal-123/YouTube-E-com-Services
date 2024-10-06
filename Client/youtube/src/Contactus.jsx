import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import './ContactUs.css'; // Optional for additional custom styling
import { toast } from 'react-toastify';

function ContactUs() {
  return (
    <div className="contact-us-section">
      {/* Header Section */}
      <div className="bg-gray-900 h-64 text-white flex justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>
          <p className="mt-2 text-xl">We'd love to hear from you. Get in touch with us!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="md:col-span-2">
            <div className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-[1.02]">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  toast.success('Submitted Details', {
                    position: 'top-center',
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: 'light',
                  });
                }}
              >
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formName">
                    Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formEmail">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formSubject">
                    Subject
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter the subject"
                    required
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="formMessage">
                    Message
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    rows="5"
                    placeholder="Enter your message"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    className="bg-blue-500 text-white font-bold py-2 px-6 rounded-lg shadow-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <FaMapMarkerAlt size={30} className="text-blue-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Our Office</h3>
              <p className="text-gray-600">
                1234 Street Name, <br />
                City, State, 56789
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <FaPhone size={30} className="text-green-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-gray-600">(123) 456-7890</p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 text-center transition-transform transform hover:scale-105">
              <FaEnvelope size={30} className="text-red-500 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
              <p className="text-gray-600">YoutubeE-com@company.com</p>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-6">Find Us on the Map</h2>
          <div className="relative h-96 w-full shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59057.61598779181!2d73.15126761085229!3d22.312019710910043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8f9fe8910a9%3A0xc8c935280ab4cfd2!2sMadhuvan%20Residency%20-%20Rami%20Vidyalaya!5e0!3m2!1sen!2sin!4v1724626082121!5m2!1sen!2sin"
              className="absolute inset-0 w-full h-full border-none"
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
