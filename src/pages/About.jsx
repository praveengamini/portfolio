import React, { useState } from 'react';
import { FaBookOpen, FaUser, FaTrophy } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { PiMaskHappyLight } from "react-icons/pi";
import emailjs from 'emailjs-com';
import { RiFeedbackLine } from "react-icons/ri";

const About = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();

    const emailData = {
      name: name,
      message: feedback,
    };

    try {
      await emailjs.send(
        "service_9z7vxc8",
        "template_ahvjdbe",
        emailData,
        "CrWfBmyGuGMK6qKnv"
      );
      setSubmitted(true);
      setName("");
      setFeedback("");
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300 p-8 rounded-xl shadow-lg w-full mx-auto">

      <div className="flex flex-col space-y-6 w-full">
      <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50">
          <FaTrophy className="text-yellow-500 text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Achievements</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
              <li>Winner-2 at National Level Hackathon at AITEM College</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50">
          <FaBookOpen className="text-blue-500 text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Education</h3>
            <div className="relative pl-6 mt-2">
              <ul className="list-none">
                <li className="text-gray-600 relative pl-6">
                  <span className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-green-500"></span>
                  MVGR College of Engineering, 2022-2026. CGPA: 8.89 (for 4 semesters)
                </li>
                <li className="text-gray-600 relative pl-6 mt-4">
                  <span className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-yellow-500"></span>
                  SriViswa Jr. College, Intermediate: MPC, 2022. Percentage: 97.5%
                </li>
                <li className="text-gray-600 relative pl-6 mt-4">
                  <span className="absolute left-[-8px] top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full bg-red-500"></span>
                  Ravindra Bharathi School, 2020
                </li>
              </ul>
              <div className="absolute left-[23px] rounded-md top-0 bottom-0 border-l-[] border-black"></div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50">
          <GrCertificate className="text-green-500 text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Certifications</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
              <li>Udemy: Web Development - MERN Stack</li>
              <li>NPTEL (elite): Programming in C</li>
              <li>NPTEL (elite): Cloud Computing</li>
              <li>Workshop: AI Tools and Techniques @be10x</li>
              <li>Udemy: Machine Learning and Data Science with Python</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50">
          <IoLanguage className="text-purple-500 text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Languages</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
              <li>English (full proficiency)</li>
              <li>Telugu (native)</li>
              <li>Hindi (limited work proficiency)</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50">
          <PiMaskHappyLight className="text-yellow-500 text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Hobbies</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-600 mt-2">
              <li>Watching Movies</li>
              <li>Singing</li>
              <li>Exploring Quantum Mechanics</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50">
          <FaUser className="text-red-500 text-3xl" />
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-800">Personal Info</h3>
            <p className="text-gray-600 mt-2">Born on 28th January 2004. Currently living in Kailsapatnam, Kotauratla, Visakhapatnam.</p>
          </div>
        </div>

      

        <div className="bg-white p-6 rounded-lg shadow-md hover:bg-indigo-50 mt-8">
          <div className='flex text-2xl'>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Feedback</h3>
            <RiFeedbackLine className='text-amber-500 hover:scale-110 transition-all duration-1000' />
          </div>
          <form onSubmit={handleFeedbackSubmit}>
            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Your Name"
              className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
              required
            />
            <textarea
              value={feedback}
              onChange={handleFeedbackChange}
              placeholder="Leave your feedback here..."
              className="w-full p-4 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              rows="4"
              required
            />
            <button
              type="submit"
              className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
              Submit Feedback
            </button>
          </form>
          {submitted && (
            <p className="mt-4 text-green-500 text-sm">
              Thank you for your feedback!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default About;
