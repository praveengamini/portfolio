import React from 'react';
import javapbl from '../assets/images/javapbl.png'
import { CardContent, Card, CardFooter, CardDescription } from '@/components/ui/card';
import qmart from '../assets/images/q-mart.png';
import { Button } from "@/components/ui/button";
import measurements from '../assets/images/measurements.png';
import smartStudy from '../assets/images/smartStudy.png';
import clock from '../assets/images/clock.png';
import useScrollToTop from '@/components/useScrollTop';
import meetingExtensionImg from '../assets/images/meetingExtensionImg.png'

const Projects = () => {
  useScrollToTop();
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <style jsx>{`
        .fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        .slide-down {
          animation: slideDown 0.6s ease-out forwards;
        }
        .slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
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
      `}</style>
      
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
        {/* Card 1 */}
        <Card className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] select-none hover:shadow-xl relative overflow-hidden group p-1 fade-in'>
          <CardContent className="relative h-64">
            <img src={qmart} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-80' alt="Q-Mart" />
<div className="absolute inset-0 select-none bg-black bg-opacity-75 flex flex-col justify-center items-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
               transform translate-y-4 group-hover:translate-y-0 
               p-4 space-y-3 overflow-hidden">              <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Quick Mart</h2>
              <CardDescription className='text-center text-lg font-medium text-gray-300'>
                A Full Stack E-commerce website built with React, Node.js, Express, MongoDB. Providing admin panel and user view as well.
              </CardDescription>
            </div>
          </CardContent>

          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down'>Quick Mart</h2>
          <CardFooter className='flex justify-center slide-up'>
            <a href="https://github.com/praveengamini/q-mart">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
          </CardFooter>
        </Card>

        {/* Meeting Summarizer Card */}
        <Card className="bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] hover:shadow-xl relative overflow-hidden group p-1 fade-in">
          <CardContent className="relative h-64">
            <img 
              src={meetingExtensionImg} 
              className="w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-80" 
              alt="Meeting Summarizer" 
            />
<div className="absolute inset-0 select-none bg-black bg-opacity-75 flex flex-col justify-center items-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
               transform translate-y-4 group-hover:translate-y-0 
               p-4 space-y-3 overflow-hidden">              <h2 className="text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300">
                Meeting Summarizer
              </h2>
              <CardDescription className="text-center text-lg font-medium text-gray-300">
                Chrome extension that records meetings, generates AI summaries, converts to PDF,
                and emails participants automatically.
              </CardDescription>
            </div>
          </CardContent>

          <h2 className="text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down">
            Meeting Summarizer
          </h2>

          <CardFooter className="flex justify-center slide-up mt-4">
            <a href="https://github.com/praveengamini/MeetingExtension.git" target="_blank" rel="noopener noreferrer">
              <Button className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 transition duration-300">
                Code
              </Button>
            </a>
          </CardFooter>
        </Card>

        {/* Card 2 */}
        <Card className='bg-gray-700 p-1 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] select-none hover:shadow-xl relative overflow-hidden group fade-in'>
          <CardContent className="relative h-64">
            <img src={measurements} className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-80' alt="Smart-Fit" />
<div className="absolute inset-0 select-none bg-black bg-opacity-75 flex flex-col justify-center items-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
               transform translate-y-4 group-hover:translate-y-0 
               p-4 space-y-3 overflow-hidden">              <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Smart-Fit</h2>
              <CardDescription className='text-center text-lg font-medium text-gray-300'>
                A full web application that uses computer vision to measure body measurements and provide accurate fit recommendations.
              </CardDescription>
            </div>
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down'>Smart-Fit</h2>
          <CardFooter className='flex justify-center slide-up'>
            <a href="https://github.com/praveengamini/SmarFitting">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
          </CardFooter>
        </Card>

        {/* Card 3 */}
        <Card className='bg-gray-700 p-1 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] select-none hover:shadow-xl relative overflow-hidden group fade-in'>
          <CardContent className="relative h-64">
            <img src={javapbl} className='w-full h-full object-fill rounded-lg transition-all duration-300 group-hover:opacity-80' alt="SmartStudy" />
<div className="absolute inset-0 select-none bg-black bg-opacity-75 flex flex-col justify-center items-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
               transform translate-y-4 group-hover:translate-y-0 
               p-4 space-y-3 overflow-hidden">              <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Basic Java E-commerce</h2>
              <CardDescription className='text-center text-lg font-medium text-gray-300'>
                A simple E-commerce application built with Java and MySQL and uses HTML, CSS, and JavaScript.
              </CardDescription>
            </div>
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down'>Java E-Commerce</h2>
          <CardFooter className='flex justify-center slide-up'>
            <a href="https://github.com/praveengamini/JavaEcommerce">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
          </CardFooter>
        </Card>

        {/* Card 4 */}
        <Card className='bg-gray-700 p-1 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] select-none hover:shadow-xl relative overflow-hidden group fade-in'>
          <CardContent className="relative h-64">
            <img src={smartStudy} className='w-full h-full object-fill rounded-lg transition-all duration-300 group-hover:opacity-80' alt="SmartStudy" />
<div className="absolute inset-0 select-none bg-black bg-opacity-75 flex flex-col justify-center items-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
               transform translate-y-4 group-hover:translate-y-0 
               p-4 space-y-3 overflow-hidden">              <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>SmartStudy</h2>
              <CardDescription className='text-center text-lg font-medium text-gray-300'>
                A front-end web application that helps students to study and learn more effectively. Built using HTML, CSS, JavaScript.
              </CardDescription>
            </div>
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down'>Smart Study</h2>

          <CardFooter className='flex justify-between slide-up'>
            <a href="https://github.com/praveengamini/SmartStudy">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
            <a href="https://praveengamini.github.io/SmartStudy/">
              <Button className='bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300'>Website</Button>
            </a>
          </CardFooter>
        </Card>

        {/* Card 5 */}
        <Card className='bg-gray-700 p-1 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] select-none hover:shadow-xl relative overflow-hidden group fade-in'>
          <CardContent className="relative h-64">
            <img src={clock} className='w-full h-full object-fill rounded-lg transition-all duration-300 group-hover:opacity-80' alt="Clock" />
<div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col justify-center items-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
               transform translate-y-4 group-hover:translate-y-0 
               p-4 space-y-3 overflow-hidden">              <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Clock</h2>
              <CardDescription className='text-center text-lg font-medium text-gray-300'>
                A C program that provides a timer, stopwatch, and digital clock functionality with user input for timing and displays real-time updates.
              </CardDescription>
            </div>
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down'>Clock</h2>
          <CardFooter className='flex justify-center slide-up'>
            <a href="https://onlinegdb.com/pHVyzhK5T">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Execute</Button>
            </a>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Projects;