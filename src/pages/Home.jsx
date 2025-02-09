import React, { useState, useEffect, lazy, Suspense } from 'react';
import Footer from '../components/Footer';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { SlPencil } from 'react-icons/sl';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { motion } from 'framer-motion';

// Lazy load the Spline component
const Spline = lazy(() => import('@splinetool/react-spline'));

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [splineError, setSplineError] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
    };

    if (mediaQuery.matches) {
      document.body.classList.add("overflow-hidden");
    }

    window.addEventListener("resize", handleResize);

    return () => {
      document.body.classList.remove("overflow-hidden");
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSplineLoad = () => {
    setIsLoading(false);
  };

  const handleSplineError = () => {
    setSplineError(true);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="flex flex-col flex-grow w-full px-6 md:px-12 lg:px-20 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-5">
          {/* Card Section */}
          <motion.div
            className="w-full md:w-[30rem] bg-gray-700 shadow-lg rounded-lg hover:shadow-2xl transition-transform duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gray-700 border-none">
              <div className="flex items-center p-5 max-sm:p-2">
                <CardHeader className="text-2xl font-semibold text-white">
                  I am ..........
                </CardHeader>
                <SlPencil className="ml-[-20px] text-gray-300 text-lg" aria-hidden="true" />
              </div>
              <CardContent className="p-6 text-gray-300 leading-relaxed">
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
          </motion.div>

          {/* Spline Section */}
          <div className="h-[400px] md:h-[500px] w-full md:w-[500px] relative max-sm:hidden">
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-3xl">
                <div className="text-lg font-semibold flex text-blue-500 animate-spin">
                  <AiOutlineLoading3Quarters className="text-3xl" aria-label="Loading" />
                </div>
              </div>
            )}
            {splineError ? (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-800 rounded-3xl">
                <p className="text-red-500">Failed to load 3D animation.</p>
              </div>
            ) : (
              <Suspense fallback={<div>Loading...</div>}>
                <Spline
                  scene="https://prod.spline.design/4y6MUt4fLXEbhlFX/scene.splinecode"
                  className="rounded-3xl"
                  onLoad={handleSplineLoad}
                  onError={handleSplineError}
                />
              </Suspense>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;