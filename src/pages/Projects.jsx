import React from 'react';
import javaPbl from '../assets/videos/javaPbl.mp4';
import { CardContent, Card, CardFooter, CardDescription } from '@/components/ui/card';
import qmart from '../assets/images/q-mart.png';
import { Button } from "@/components/ui/button";
import measurements from '../assets/images/measurements.png';
import smartStudy from '../assets/images/smartStudy.png';
import clock from '../assets/images/clock.png';

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-8">
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <Card className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500  hover:shadow-xl'>
          <CardContent>
            <img src={qmart} className='w-full h-64 object-cover rounded-lg transition-all duration-300 hover:opacity-80' alt="Q-Mart" />
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Quick Mart</h2>
          <CardDescription className='text-center text-lg font-medium text-gray-300'>
            A Full Stack E-commerce website built with React, Node.js, Express, MongoDB. Providing admin panel and user view as well.
          </CardDescription>
          <CardFooter className='flex justify-between'>
            <a href="https://github.com/praveengamini/q-mart">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
            <a href='/pdfs/DBMS_PBL_1.pdf' target="_blank" rel="noopener noreferrer">
              <Button className='bg-gray-800 text-white rounded-md px-4 py-2 mt-4 hover:bg-gray-900 transition duration-300'>Pdf</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500  hover:shadow-xl'>
          <CardContent>
            <img src={measurements} className='w-full h-64 object-cover rounded-lg transition-all duration-300 hover:opacity-80' alt="Smart-Fit" />
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Smart-Fit</h2>
          <CardDescription className='text-center text-lg font-medium text-gray-300'>
            A full web application that uses computer vision to measure body measurements and provide accurate fit recommendations.
          </CardDescription>
          <CardFooter className='flex justify-between'>
            <a href="https://github.com/praveengamini/SmarFitting">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
            <a href='/pdfs/AITT_PBL_BATCH-16A_1.pdf' target="_blank" rel="noopener noreferrer">
              <Button className='bg-gray-800 text-white rounded-md px-4 py-2 mt-4 hover:bg-gray-900 transition duration-300'>Pdf</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500  hover:shadow-xl'>
          <CardContent className='w-full object-cover rounded-lg'>
            <video src={javaPbl} controls loop muted className='rounded-2xl h-64 transition-all duration-300 hover:opacity-80'>
              Your browser does not support the video.
            </video>
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Basic Java E-commerce</h2>
          <CardDescription className='text-center text-lg font-medium text-gray-300'>
            A simple E-commerce application built with Java and MySQL and uses HTML, CSS, and JavaScript.
          </CardDescription>
          <CardFooter className='flex justify-center'>
            <a href="https://github.com/praveengamini/JavaEcommerce">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500  hover:shadow-xl'>
          <CardContent>
            <img src={smartStudy} className='w-full h-64 object-fill mt-4 rounded-lg transition-all duration-300 hover:opacity-80' alt="SmartStudy" />
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>SmartStudy</h2>
          <CardDescription className='text-center text-lg font-medium text-gray-300'>
            A front-end web application that helps students to study and learn more effectively. Built using HTML, CSS, JavaScript.
          </CardDescription>
          <CardFooter className='flex justify-between'>
            <a href="https://github.com/praveengamini/index">
              <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>Code</Button>
            </a>
            <a href="https://praveengamini.github.io/index/">
              <Button className='bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600 transition duration-300'>Website</Button>
            </a>
          </CardFooter>
        </Card>

        <Card className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500  hover:shadow-xl'>
          <CardContent>
            <img src={clock} className='w-full h-64 object-fill mt-4 rounded-lg transition-all duration-300 hover:opacity-80' alt="Clock" />
          </CardContent>
          <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>Clock</h2>
          <CardDescription className='text-center text-lg font-medium text-gray-300'>
            A C program that provides a timer, stopwatch, and digital clock functionality with user input for timing and displays real-time updates.
          </CardDescription>
          <CardFooter className='flex justify-center'>
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