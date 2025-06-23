import React, { useEffect, useState } from 'react';
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { FaBookOpen, FaUser, FaTrophy, FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { GrCertificate } from "react-icons/gr";
import { IoLanguage } from "react-icons/io5";
import { PiMaskHappyLight } from "react-icons/pi";
import { RiFeedbackLine } from "react-icons/ri";
import { CiMail } from "react-icons/ci";
import emailjs from 'emailjs-com';
import Copyright from '../components/Copyright';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';
import useScrollToTop from '@/components/useScrollTop';

const About = () => {
  const [name, setName] = useState("");
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isFooterOpen, setIsFooterOpen] = useState(false); 
  const [loading, setLoading] = useState(false); 
  useScrollToTop();
  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  useEffect(()=>{
        console.log(import.meta.env.VITE_PUBLIC_API_KEY);
  },[])
  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  const handleFeedbackSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); 
    const emailData = {
      name: name,
      message: feedback,
    };

    
    try {
      await emailjs.send(
         import.meta.env.VITE_SERVICE_ID,
         import.meta.env.VITE_TEMPLATE_ID,
         emailData,
         import.meta.env.VITE_PUBLIC_API_KEY
      );
      setSubmitted(true);
      setName("");
      setFeedback("");
      toast.success("Feedback sent successfully!"); 
    } catch (error) {
      console.error("Error sending feedback:", error);
      toast.error("Failed to send feedback. Please try again."); 
    } finally {
      setLoading(false);
    }
  };
  const toggleFooter = () => {
    setIsFooterOpen(!isFooterOpen);
  };

  return (
    <div className='flex flex-col'>
<style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .slide-down {
          animation: slideDown 0.6s ease-out forwards;
        }
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
      `}</style>

      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex">
      <div className="fixed bottom-4 right-4 md:hidden z-50">
        <button
          onClick={toggleFooter}
          className="p-3 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all"
        >
          <IoIosArrowDroprightCircle className="text-white text-2xl" />
        </button>
      </div>

         <div
        className={`fixed left-0 top-1/2 z-10 transform -translate-y-1/2 flex flex-col gap-6 p-4 bg-gray-700/50 backdrop-blur-md rounded-r-lg shadow-lg transition-all duration-300 ${
          isFooterOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0`}
      >
        <a href="https://github.com/praveengamini" target="_blank" rel="noopener noreferrer">
          <FaGithub className="size-8 hover:scale-125 transition-transform duration-300 text-white" />
        </a>
        <a href="https://www.linkedin.com/in/praveen-gamini-3bb729273" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="size-8 text-blue-800 hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="https://www.instagram.com/praveengamini/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="size-8 text-pink-800 hover:scale-125 transition-transform duration-300" />
        </a>
        <a href="https://mail.google.com/mail/?view=cm&to=praveengamini009@gmail.com" target="_blank" rel="noopener noreferrer">
          <CiMail className="size-8 text-orange-500 hover:scale-125 transition-transform duration-300" />
        </a>
      </div>

        <div className="flex-1 flex flex-col items-center py-5 px-6">
          <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all fade-in">
              <FaTrophy className="text-yellow-400 text-4xl mb-3 slide-down" />
              <h3 className="text-2xl font-semibold slide-down">Achievements</h3>
              <ul className="list-disc pl-6">
              <li className="text-gray-300 mt-2 slide-up">Winner-2 at National Level Hackathon at AITEM College</li>
              <li className="text-gray-300 mt-2 slide-up">participated in Finals of NLP Challenge, Organized by IIT Kharagpur</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all fade-in">
              <FaBookOpen className="text-blue-400 text-4xl mb-3 slide-down" />
              <h3 className="text-2xl font-semibold slide-down">Education</h3>
              <div className="text-gray-300 mt-2 slide-up">
                <ul className="list-disc pl-6">
                  <li>MVGR College of Engineering, 2022-2026. CGPA: 8.83 (for 5 semesters)</li>
                  <li>SriViswa Jr. College, Intermediate: MPC, 2022. Percentage: 97.5%</li>
                  <li>Ravindra Bharathi School, 2020</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all fade-in">
              <GrCertificate className="text-green-400 text-4xl mb-3 slide-down" />
              <h3 className="text-2xl font-semibold slide-down">Certifications</h3>
              <ul className="list-disc pl-6 text-gray-300 mt-2 slide-up">
                <li>Udemy: Web Development - MERN Stack</li>
                <li>NPTEL (elite): Programming in C</li>
                <li>NPTEL (elite): Cloud Computing</li>
                <li>Workshop: AI Tools and Techniques @be10x</li>
                <li>Udemy: Machine Learning and Data Science with Python</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all fade-in">
              <IoLanguage className="text-purple-400 text-4xl mb-3 slide-down" />
              <h3 className="text-2xl font-semibold slide-down">Languages</h3>
              <ul className="list-disc pl-6 text-gray-300 mt-2 slide-up">
                <li>English (full proficiency)</li>
                <li>Telugu (native)</li>
                <li>Hindi (limited work proficiency)</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all fade-in">
              <PiMaskHappyLight className="text-yellow-400 text-4xl mb-3 slide-down" />
              <h3 className="text-2xl font-semibold slide-down">Hobbies</h3>
              <ul className="list-disc pl-6 text-gray-300 mt-2 slide-up">
                <li>Watching Movies</li>
                <li>Singing</li>
                <li>Exploring Quantum Mechanics</li>
              </ul>
            </div>

            <div className="bg-gray-700 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all fade-in">
              <FaUser className="text-red-400 text-4xl mb-3 slide-down" />
              <h3 className="text-2xl font-semibold slide-down">Personal Info</h3>
              <p className="text-gray-300 mt-2 slide-up">Born on 28th January 2004. Currently living in Kailasapatnam, Kotauratla, Visakhapatnam.</p>
            </div>
          </div>

          <div className="mt-10 bg-gray-700 p-6 rounded-lg shadow-lg w-full max-w-2xl fade-in">
            <h3 className="text-2xl font-semibold mb-4 flex items-center slide-down">
              Feedback <RiFeedbackLine className="text-amber-400 ml-2" />
            </h3>
            <form onSubmit={handleFeedbackSubmit} className="slide-up">
              <input
                type="text"
                value={name}
                onChange={handleNameChange}
                placeholder="Your Name"
                className="w-full p-3 border-none rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 mb-3"
                required
              />
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder="Leave your feedback..."
                className="w-full p-3 border-none rounded-md bg-gray-800 text-white focus:ring-2 focus:ring-blue-500 mb-3"
                rows="4"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-all disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? "Sending..." : "Submit Feedback"}
              </button>
            </form>
            {submitted && (
              <p className="mt-3 text-green-400 text-sm slide-up">Thank you for your feedback!</p>
            )}
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Copyright />
    </div>
  );
};

export default About;
