import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNode, FaGitAlt, FaAws } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri"; 
import { DiJqueryLogo } from "react-icons/di";
import { SiRedux, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import opencv from '../assets/images/opencv.svg';
import ml from '../assets/images/ml.png';
import tensorflow from '../assets/images/tensorflow.png';
import cnn from '../assets/images/cnn.png';
import SkillBarChart from '@/components/SkillBarChart';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { GiMuscleUp } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { SiFuturelearn } from "react-icons/si";
import { FaKeyboard } from "react-icons/fa";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import useScrollToTop from '@/components/useScrollTop';
import { SiLangchain } from "react-icons/si";

const Skills = () => {
  useScrollToTop();
  const [activeSection, setActiveSection] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
  };

  const showSkillLevels = activeSection === 'skillLevels';
  const showSkills = activeSection === 'skills';
  const showWebTech = activeSection === 'webTech';
  const showAI = activeSection === 'ai';
  const showFutureLearnings = activeSection === 'futureLearnings';

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white p-4 md:p-8 flex flex-col gap-4 md:gap-6 overflow-y-auto">

      <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: 0.2 }}
        className="flex bg-gray-700 hover:bg-gray-600 transition-all rounded-lg duration-500 w-full h-12 md:h-14 justify-center items-center cursor-pointer"
        onClick={() => toggleSection('skillLevels')}
      >
        <div className="text-xl md:text-3xl select-none flex gap-2 md:gap-4 items-center">
          <GiMuscleUp className="size-6 md:size-10 hover:scale-110 transition-all duration-500 text-orange-400" />
          <div>Skill Levels</div>
        </div>
        {showSkillLevels ? <FaAngleUp className="size-6 md:size-12" /> : <FaAngleDown className="size-6 md:size-12" />}
      </motion.div>
        <div
          className={`
            transition-all duration-1000
            ${showSkillLevels ? 'max-h-[570px]' : 'max-h-0'}
            overflow-hidden max-sm:overflow-y-scroll
          `}
        >
          <SkillBarChart />
        </div>

      <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: 0.2 }}
        className="flex bg-gray-700 hover:bg-gray-600 transition-all duration-500 rounded-lg w-full h-12 md:h-14 justify-center items-center cursor-pointer"
        onClick={() => toggleSection('skills')}
      >
        <div className="text-xl md:text-3xl select-none flex gap-2 md:gap-4 items-center">
          <FaKeyboard className="size-6 md:size-10 hover:scale-110 transition-all duration-500 text-yellow-400" />
          <div>Programming Languages</div>
        </div>
        {showSkills ? <FaAngleUp className="size-6 md:size-12" /> : <FaAngleDown className="size-6 md:size-12" />}
      </motion.div>
      <div className={`overflow-hidden transition-all duration-1000 ${showSkills ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 p-2 md:p-6">
          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <h1 className="text-3xl md:text-5xl text-center font-semibold text-orange-400">C</h1>
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">C Language <span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaPython className="text-yellow-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Python<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaJava className="text-red-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Java<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaJs className="text-yellow-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">JavaScript<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>
        </div>
      </div>

      <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: 0.2 }}
        className="flex bg-gray-700 hover:bg-gray-600 transition-all duration-500 rounded-lg w-full h-12 md:h-14 justify-center items-center cursor-pointer"
        onClick={() => toggleSection('webTech')}
      >
        <div className="text-xl md:text-3xl select-none flex gap-2 md:gap-4 items-center">
          <TbWorld className="size-6 md:size-10 hover:scale-110 transition-all duration-500 text-blue-400" />
          <div>Web Technologies</div>
        </div>
        {showWebTech ? <FaAngleUp className="size-6 md:size-12" /> : <FaAngleDown className="size-6 md:size-12" />}
      </motion.div>
      <div className={`overflow-hidden transition-all duration-1000 ${showWebTech ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 p-2 md:p-6">
          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaHtml5 className="text-orange-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">HTML5<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaCss3Alt className="text-blue-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">CSS3<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaBootstrap className="text-purple-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Bootstrap<span className='font-bold ml-1 font-serif'>(&#73;)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <RiTailwindCssLine className="text-teal-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Tailwind CSS<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <DiJqueryLogo className="text-blue-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">jQuery<span className='font-bold ml-1'>(B)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaReact className="text-cyan-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">React<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <SiRedux className="text-purple-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Redux<span className='font-bold ml-1 font-serif'>(I)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaNode className="text-green-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Node.js<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <SiExpress className="text-gray-300 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Express<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>
          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
      <svg className='text-purple-500' xmlns="http://www.w3.org/2000/svg" width={54} height={50} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m13.48 7.37-.02-5.38h-3l.02 5.38 1.5 2.06zm-3 9.22v5.4h3v-5.4l-1.5-2.06z"></path><path d="m13.48 16.6 3.16 4.36 2.42-1.76-3.16-4.36-2.42-.78zm-3-9.22L7.3 3.02 4.88 4.78l3.16 4.36 2.44.78z"></path><path d="M8.04 9.14 2.92 7.48 2 10.32 7.12 12l2.42-.8zm6.36 3.64 1.5 2.06 5.12 1.66.92-2.84L16.82 12zM16.82 12l5.12-1.68-.92-2.84-5.12 1.66-1.5 2.06zm-9.7 0L2 13.66l.92 2.84 5.12-1.66 1.5-2.06zM8.04 14.84 4.88 19.2l2.42 1.76 3.18-4.36v-2.54zm7.86-5.7 3.16-4.36-2.42-1.76-3.16 4.36v2.54z"></path></svg>              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">JWT<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>
          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <svg className="text-gray-300 text-3xl md:text-5xl"  xmlns="http://www.w3.org/2000/svg" width={54} height={50} fill={"currentColor"} viewBox="0 0 24 24">{/* Boxicons v3.0 https://boxicons.com | License  https://docs.boxicons.com/free */}<path d="m12,2.06c-5.52,0-10,4.46-10,9.97h0c0,5.5,4.48,9.97,10,9.97h0c5.52,0,10-4.46,10-9.97h0c0-5.51-4.48-9.97-10-9.97h0Zm-.69,4.51h6.29l-6.32,4.44h4.32l-9.2,6.47,2-4.44.91-2.03,2-4.44Z"></path></svg>
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">FastApi<span className='font-bold ml-1'>(M)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <SiMongodb className="text-green-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">MongoDB<span className='font-bold ml-1 font-serif'>(I)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <SiMysql className="text-blue-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">MySQL<span className='font-bold ml-1 font-serif'>(I)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <FaGitAlt className="text-red-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Git & GitHub<span className='font-bold'>(A)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <SiPostman className="text-orange-400 text-3xl md:text-5xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-gray-300">Postman<span className='font-bold ml-1'>(A)</span> </CardFooter>
            </Card>
          </Tilt>
        </div>
      </div>

      <motion.div
      initial={{ opacity: 0, x: 1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: 0.2 }}
        className="flex bg-gray-700 hover:bg-gray-600 transition-all duration-500 rounded-lg w-full h-12 md:h-14 justify-center items-center cursor-pointer"
        onClick={() => toggleSection('ai')}
      >
        <div className="text-xl md:text-3xl select-none flex gap-2 md:gap-4 items-center">
          <LuBrainCircuit className="size-6 md:size-10 hover:scale-110 transition-all duration-500 text-amber-400" />
          <div>AI & Machine Learning</div>
        </div>
        {showAI ? <FaAngleUp className="size-6 md:size-12" /> : <FaAngleDown className="size-6 md:size-12" />}
      </motion.div>
      <div className={`overflow-hidden transition-all duration-1000 ${showAI ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 p-2 md:p-6">
          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <img src={ml} className="w-16 h-16 md:w-20 md:h-20" alt="Machine Learning" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-blue-400">Machine Learning<span className='font-bold font-serif'>(I)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <SiLangchain className="w-16 h-16 md:w-24 md:h-[105px]" alt="LangChain"/>
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-green-400">LangChain<span className='font-bold '>(M)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6 max-sm:h-[11rem]">
              <CardContent className="flex justify-center">
                <img src={tensorflow} className="w-16 h-16 md:w-20 md:h-[6.5rem]" alt="TensorFlow" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-orange-400">TensorFlow<span className='font-bold ml-1'>(B)</span> </CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6">
              <CardContent className="flex justify-center">
                <img src={opencv} className="w-16 h-16 md:w-20 md:h-[6.5rem]" alt="OpenCV" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-teal-400">OpenCV<span className='font-bold ml-1'>(B)</span> </CardFooter>
            </Card>
          </Tilt>
        </div>
      </div>

      <motion.div
      initial={{ opacity: 0, x: -1000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.1, delay: 0.2 }}
        className="flex bg-gray-700 hover:bg-gray-600 transition-all duration-500 rounded-lg w-full h-12 md:h-14 justify-center items-center cursor-pointer"
        onClick={() => toggleSection('futureLearnings')}
      >
        <div className="text-xl md:text-3xl select-none flex gap-2 md:gap-4 items-center">
          <SiFuturelearn className="size-6 md:size-10 hover:scale-110 transition-all duration-500 text-green-400" />
          <div>Future Learnings</div>
        </div>
        {showFutureLearnings ? <FaAngleUp className="size-6 md:size-12" /> : <FaAngleDown className="size-6 md:size-12" />}
      </motion.div>
      <div className={`overflow-hidden transition-all duration-1000 ${showFutureLearnings ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="flex overflow-x-auto md:flex-wrap md:justify-center gap-4 md:gap-6 p-2 md:p-6">
          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6 max-sm:h-[12rem]">
              <CardContent className="flex justify-center">
                <FaAws className="text-yellow-400 text-6xl md:text-9xl" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-yellow-400">AWS (Cloud)</CardFooter>
            </Card>
          </Tilt>

          <Tilt options={{ max: 25, speed: 400 }}>
            <Card className="bg-gray-700 border-gray-600 shadow-lg w-40 md:w-52 p-3 md:p-5 m-2 md:m-6 max-sm:h-[12rem]">
              <CardContent className="flex justify-center">
                <img src={cnn} className="w-16 h-16 md:w-20 md:h-20" alt="CNN" />
              </CardContent>
              <CardFooter className="flex justify-center text-sm md:text-base text-blue-400">Convolutional Neural Network (CNN)</CardFooter>
            </Card>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Skills;