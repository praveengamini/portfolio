import React from 'react'
import javaPbl from '../assets/videos/javaPbl.mp4'
import { CardContent,Card,CardFooter,CardDescription } from '@/components/ui/card'
import qmart from '../assets/images/q-mart.png'
import { Button } from "@/components/ui/button"
import measurements from '../assets/images/measurements.png'
import smartStudy from '../assets/images/smartStudy.png'
import clock from '../assets/images/clock.png'
const Projects = () => {
  return (
 <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-2 bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300">
<Card className='max-w-sm shadow-lg h-[600px]'>
      <CardContent>
        <img src={qmart} className='w-full h-64 object-cover rounded-lg' alt="Q-Mart" />
      </CardContent>
    <h2 className='text-center text-xl font-bold'>Quick Mart</h2>
      <CardDescription className='text-center text-lg font-medium h-40'>An Full Stack E-commerce website built with React, Node.js, Express, MongoDB.
        providing admin panel and user view as well
      </CardDescription>
      <CardFooter className='flex justify-between '>
        <a href="https://github.com/praveengamini/q-mart">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Code</Button>
        </a>
        <a  href='/pdfs/DBMS_PBL_1.pdf' target="_blank" rel="noopener noreferrer">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Pdf</Button>
        </a>
      </CardFooter>
    </Card>
  
    <Card className='max-w-sm shadow-lg'>
      <CardContent>
      <img src={measurements} className='w-full h-64 object-cover rounded-lg' alt="smartFitting" />
        <h2 className='text-center text-xl font-bold'>Smart-Fit</h2>
      </CardContent>
      <CardDescription className='text-center text-lg font-medium h-40'>
        A Full web application that uses computer vision to measure body measurements and provide accurate fit recommendations.
      </CardDescription>
      <CardFooter className='flex justify-between'>
        <a href="https://github.com/praveengamini/SmarFitting">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Code</Button>
        </a>
        <a  href='/pdfs/AITT_PBL_BATCH-16A_1.pdf' target="_blank" rel="noopener noreferrer">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Pdf</Button>
        </a>
      </CardFooter>
    </Card>
  
    <Card className='max-w-sm shadow-lg'>

    <CardContent className='w-full object-cover rounded-lg'>
        <video src={javaPbl} controls loop muted className='rounded-2xl h-64'>
          Your browser does not support the video.
        </video>
      </CardContent>
      <h2 className='text-center text-xl font-bold'>Basic Java E-commerce</h2>
      <CardDescription className='text-center text-lg font-medium h-40'>
        A simple E-commerce application built with Java and MySQL and use html,css and JavaScript
      </CardDescription>
      <CardFooter className='flex justify-center'>
        <a href="https://github.com/praveengamini/JavaEcommerce">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Code</Button>
        </a>
      </CardFooter>
      <CardContent>
      </CardContent>
      
    </Card>
    <Card className='max-w-sm shadow-lg'>
      <CardContent>
      <img src={smartStudy} className='w-full h-64 object-fill mt-4 rounded-lg ' alt="smartFitting" />
        <h2 className='text-center text-xl font-bold'>SmartStudy-</h2>
      </CardContent>
      <CardDescription className='text-center text-lg font-medium h-36'>
        A Front-end web application that helps students to study and learn more effectively.
        Built using Html,css,JavaScript
      </CardDescription>
      <CardFooter className='flex  justify-between'>
        <a href="https://github.com/praveengamini/index">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Code</Button>
        </a>
        <a href="https://praveengamini.github.io/index/">
          <Button className=' bg-blue-500 text-white rounded-md px-4 py-2 mt-4 hover:bg-blue-600'>Website</Button>
        </a>
      </CardFooter>
    </Card>

    <Card className='max-w-sm shadow-lg'>
      <CardContent>
      <img src={clock} className='w-full h-64 object-fill mt-4 rounded-lg ' alt="smartFitting" />
        <h2 className='text-center text-xl font-bold'>Clock</h2>
      </CardContent>
      <CardDescription className='text-center text-lg font-medium h-40'>
      A C program provides a timer, stopwatch, and digital clock functionality with user input for timing and displays real-time updates.
      </CardDescription>
      <CardFooter className=' flex justify-center'>
        <a href="https://onlinegdb.com/pHVyzhK5T">
          <Button className=' text-white rounded-md px-4 py-2 mt-4'>Execute</Button>
        </a>
      </CardFooter>
    </Card>
  </div>
  
  
  )
}

export default Projects
