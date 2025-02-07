import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SlPencil } from 'react-icons/sl';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)"); 

    if (mediaQuery.matches) {
      document.body.classList.add("overflow-hidden");
    }

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-indigo-100 via-indigo-200 to-indigo-300">
      <div className="flex flex-col flex-grow w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-5">
          <div className="w-full md:w-[30rem] font-serif text-lg bg-white shadow-lg rounded-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105">
            <Card>
              <div className="flex items-center p-5 max-sm:p-2">
                <CardHeader className="text-2xl font-semibold text-gray-800">
                  I am ..........
                </CardHeader>
                <SlPencil className="ml-[-20px] text-gray-600 text-lg" />
              </div>
              <CardContent className="p-6 text-gray-600 leading-relaxed">
                To leverage my technical expertise in Computer Science and Engineering,
                combined with my passion for learning new technologies, to develop
                innovative and impactful solutions. As a self-motivated and enthusiastic
                individual with proficiency in Full Stack Development (MERN), Machine
                Learning, and Image Processing in AI, I aim to contribute to cutting-edge
                projects while continuously growing as a skilled engineer and problem
                solver. My goal is to excel in a dynamic and challenging environment,
                driving technological advancements that make a difference.
              </CardContent>
            </Card>
          </div>
          <div className="h-[400px] md:h-[500px] w-full md:w-[500px] relative max-sm:hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-3xl">
                <div className="text-lg font-semibold flex text-blue-500 animate-spin">
                  <AiOutlineLoading3Quarters className="text-3xl" />
                </div>
              </div>
            )}
            <Spline
              scene="https://prod.spline.design/4y6MUt4fLXEbhlFX/scene.splinecode"
              className="rounded-3xl"
              onLoad={() => setIsLoading(false)}
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
