import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import { SlPencil } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import praveenprofile from '../assets/images/praveen-profile.jpg';
import { GiCoffeeCup } from "react-icons/gi";
import background from '../assets/images/background.png';

const Home = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Detect if the device is a mobile device
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust breakpoint as needed
    };

    // Check on mount and on window resize
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const handleDownloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/13Lorj0A0VgolEoXH1rB-4lE66SHr7k1z/view?usp=sharing';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.target = '_blank';
    link.download = 'Praveen_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Cracked Glass Effect */}
      <div className="absolute inset-0 bg-[url('/src/assets/images/cracked-glass.png')] bg-cover bg-center opacity-30 pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col flex-grow w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-5 flex-grow">
          {/* Left Side: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-1/2"
          >
            <div className="space-y-6">
            <h1 className="text-2xl md:text-5xl font-bold flex items-center whitespace-nowrap">
            <TypeAnimation
              sequence={[
                "Hello, I'm a Developer",
                1000,
                "Hello, I'm a Problem Solver",
                1000,
                "Hello, I'm a Tech Enthusiast",
                1000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ display: 'inline-block' }} // Ensure the animation stays inline
            />
            <motion.span transition={{ duration: 2, repeat: Infinity }}>
              <SlPencil className="text-white text-4xl md:text-5xl" />
            </motion.span>
          </h1>
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in creating innovative and impactful solutions using cutting-edge technologies. With expertise in Full Stack Development (MERN), Machine Learning, and AI, I aim to drive technological advancements that make a difference.
              </p>
              <div className="flex gap-4">
                <button
                  className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/projects')}
                >
                  View My Work
                </button>
                <button
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                  onClick={handleDownloadResume}
                >
                  Download Resume
                </button>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Profile Image with Hover Effect */}
          <motion.div
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div
              className="relative rounded-2xl h-96 w-full overflow-hidden"
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => !isMobile && setIsHovered(false)}
            >
              {/* Background Image */}
              <img
                src={background}
                alt="Background"
                className={`w-full h-full object-cover rounded-2xl border-4 border-gray-700 shadow-lg transition-opacity duration-300 ${
                  isHovered && !isMobile ? 'opacity-0' : 'opacity-100' 
                } ${isMobile?'hidden':''} `}
              />

              {/* Hover Overlay (Only for Non-Mobile Devices) */}
              {!isMobile && (
                <div className="absolute inset-0 flex">
                  {/* Left Half: Praveen Profile */}
                  <div
                    className={`w-[600px] h-[600px] flex items-center justify-center transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <img
                      src={praveenprofile}
                      alt="Praveen Profile"
                      className="w-[500px] h-[1000px] object-contain rounded-lg border-1 border-white shadow-lg"
                    />
                  </div>

                  {/* Right Half: Buy Me a Coffee Button */}
                  <div
                    className={`w-1/2 h-full flex items-center justify-center transition-opacity duration-300 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <button
                      className="flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                      onClick={() => window.open('https://buymeacoffee.com/praveengamini', '_blank')}
                    >
                      <GiCoffeeCup className="text-2xl mr-2" />
                      Buy Me a Coffee
                    </button>
                  </div>
                </div>
              )}

              {/* Mobile Layout (Static) */}
              {isMobile && (
  <div className="flex flex-col items-center justify-center h-full">
    {/* Top Half: Praveen Profile */}
    <div className=" h-[500px] flex items-center justify-center mb-4">
      <img
        src={praveenprofile}
        alt="Praveen Profile"
        className=" h-[280px] object-contain border-1 rounded-lg border-white shadow-lg"
      />
    </div>

    {/* Bottom Half: Buy Me a Coffee Button */}
    <div className="w-full flex items-center justify-center">
      <button
        className="flex items-center justify-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105"
        onClick={() => window.open('https://buymeacoffee.com/praveengamini', '_blank')}
      >
        <GiCoffeeCup className="text-2xl mr-2" />
        Buy Me a Coffee
      </button>
    </div>
  </div>
)}
            </div>
          </motion.div>
        </div>
      </div>
      <div className=" z-10 mt-auto">
        <Footer />
      </div>
    </div>
  );
};

export default Home;