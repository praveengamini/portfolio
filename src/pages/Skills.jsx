import React, { useState } from 'react';
import { FaAngleUp, FaAngleDown, FaJava, FaPython, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNode, FaGitAlt, FaAws } from "react-icons/fa";
import { RiTailwindCssLine } from "react-icons/ri"; 
import { DiJqueryLogo } from "react-icons/di";
import { SiRedux, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import opencv from '../assets/images/opencv.svg';
import ml from '../assets/images/ml.png';
import nlp from '../assets/images/nlp.png';
import tensorflow from '../assets/images/tensorflow.png';
import cnn from '../assets/images/cnn.png';
import SkillBarChart from '@/components/SkillBarChart';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { GiSkills } from "react-icons/gi";
import { GiMuscleUp } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import { LuBrainCircuit } from "react-icons/lu";
import { SiFuturelearn } from "react-icons/si";
import { FaKeyboard } from "react-icons/fa";
import { Tilt } from 'react-tilt';
const Skills = () => {
  const [showSkills, setShowSkills] = useState(false);
  const [showWebTech, setShowWebTech] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showFutureLearnings, setShowFutureLearnings] = useState(false);
  const [showSkillLevels, setShowSkillLevels] = useState(false);

  return (
    <div className='bg-gradient-to-r from-indigo-300 via-indigo-200 to-indigo-300 min-h-screen  flex flex-col  max-sm:justify-start gap-3 pr-20 pl-20 max-sm:pl-3 max-sm:pr-3'>
      <div
        className="flex bg-slate-200 hover:bg-slate-400 transition-all  rounded-[10rem] duration-500 w-full h-14 justify-center cursor-pointer max-sm:h-14 mt-4 "
        onClick={() => setShowSkillLevels(!showSkillLevels)}
      >
        <div className="text-3xl select-none flex gap-4 max-sm:mt-3 max-sm:text-xl">
        <GiMuscleUp className='size-10 hover:scale-110 transition-all duration-500 select-none text-orange-950 max-sm:size-7 ' />
          <div>
              Skill Levels 
        </div>
        </div>  
        {showSkillLevels ? <FaAngleUp className="size-12" /> : <FaAngleDown className="size-12  max-sm:size-10 max-sm:mt-2" />}
      </div>
      <div className={`overflow-hidden transition-all duration-1000 ${showSkillLevels ? 'max-h-[570px]' : 'max-h-0'}`}>
        <SkillBarChart />
      </div>

      <div
        className="flex bg-slate-200 hover:bg-slate-400 transition-all duration-500 rounded-[60px] w-full mt-6  h-14 justify-center cursor-pointer "
        onClick={() => setShowSkills(!showSkills)}
      >
        <div className="text-3xl select-none flex gap-4  max-sm:text-xl max-sm:mt-4">
        <FaKeyboard className='size-10 hover:scale-110 transition-all duration-500 select-none text-yellow-500  max-sm:size-7' />
          <div>
              Programming Languages
        </div>
        </div> 
        {showSkills ? <FaAngleUp className="size-12" /> : <FaAngleDown className="size-12 max-sm:size-9 max-sm:mt-3" />}
      </div>
      <div className={`overflow-hidden transition-all duration-1000 ${showSkills ? 'max-h-[1000px]' : 'max-h-0'}`}>
      <div className="flex max-sm:overflow-scroll">
      <Tilt options={{ max: 25, speed: 400 }}>

        <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
          <CardContent className="flex justify-center">
            <h1 className="text-5xl text-center font-semibold text-orange-600">C</h1> 
          </CardContent>
          <CardFooter className="flex justify-center">C Language</CardFooter>
        </Card>
      </Tilt>

      <Tilt options={{ max: 25, speed: 400 }}>

      <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
        <CardContent className="flex justify-center">
          <FaPython className="text-yellow-600 text-5xl" /> 
        </CardContent>
        <CardFooter className="flex justify-center">Python</CardFooter>
      </Card>
      </Tilt>


      <Tilt options={{ max: 25, speed: 400 }}>

        <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
          <CardContent className="flex justify-center">
            <FaJava className="text-red-600 text-5xl" />
          </CardContent>
          <CardFooter className="flex justify-center">Java</CardFooter>
        </Card>
      </Tilt>
      <Tilt options={{ max: 25, speed: 400 }}>

      <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
        <CardContent className="flex justify-center">
          <FaJs className="text-yellow-500 text-5xl" /> 
        </CardContent>
        <CardFooter className="flex justify-center">JavaScript</CardFooter>
      </Card>
      </Tilt>



</div>

      </div>

      <div
        className="flex bg-slate-200 hover:bg-slate-400 transition-all duration-500 w-full rounded-[60px] h-14 justify-center cursor-pointer mt-6"
        onClick={() => setShowWebTech(!showWebTech)}
      >
         <div className="text-3xl select-none flex gap-4 max-sm:text-xl max-sm:mt-2">
        <TbWorld className='size-10 hover:scale-110 transition-all duration-500 select-none text-sky-500 max-sm:size-9' />
          <div>
           Web Technologies
        </div>
        </div> 
        {showWebTech ? <FaAngleUp className="size-12" /> : <FaAngleDown className="size-12 max-sm:size-10 max-sm:mt-1" />}
      </div>
      <div className={`overflow-x-scroll transition-all duration-1000 ${showWebTech ? 'max-h-[1000px]' : 'max-h-0'}`}>
      <div className="flex">
      <Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaHtml5 className="text-orange-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">HTML5</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaCss3Alt className="text-blue-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">CSS3</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaBootstrap className="text-purple-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Bootstrap</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <RiTailwindCssLine className="text-teal-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Tailwind CSS</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <DiJqueryLogo className="text-blue-400 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">jQuery</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaReact className="text-cyan-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">React</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <SiRedux className="text-purple-700 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Redux</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaNode className="text-green-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Node.js</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <SiExpress className="text-gray-800 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Express</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <SiMongodb className="text-green-500 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">MongoDB</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <SiMysql className="text-blue-700 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">MySQL</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaGitAlt className="text-red-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Git & GitHub</CardFooter>
  </Card>
</Tilt>

<Tilt options={{ max: 25, speed: 400 }}>
  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <SiPostman className="text-orange-600 text-5xl" />
    </CardContent>
    <CardFooter className="flex justify-center">Postman</CardFooter>
  </Card>
</Tilt>

    </div>
      </div>

      <div
        className="flex bg-slate-200 hover:bg-slate-400 transition-all duration-500 w-full  rounded-[60px] h-14 justify-center cursor-pointer mt-6"
        onClick={() => setShowAI(!showAI)}
      >
         <div className="text-3xl select-none flex gap-4 max-sm:text-xl max-sm:mt-3 ">
        <LuBrainCircuit className='size-10 hover:scale-110 transition-all duration-500 select-none text-amber-800 max-sm:size-9' />
          <div>
           AI & Machine Learning
        </div>
        </div>
        {showAI ? <FaAngleUp className="size-12" /> : <FaAngleDown className="size-12 max-sm:size-9 max-sm:mt-2" />}
      </div>
      <div className={`overflow-hidden transition-all duration-1000 ${showAI ? 'max-h-[1000px]' : 'max-h-0'}`}>
      <div className="flex max-sm:overflow-x-auto">
      <Tilt options={{ max: 25, speed: 400 }}>

    <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
      <CardContent className="flex justify-center">
        <img src={ml} className="w-20 h-20" alt="" /> 
      </CardContent>
      <CardFooter className="flex justify-center text-blue-600">Machine Learning</CardFooter> 
    </Card>
      </Tilt>


      <Tilt options={{ max: 25, speed: 400 }}>

  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6 ">
    <CardContent className="flex justify-center">
      <img src={nlp} className="w-20 h-20" alt="" /> 
    </CardContent>
    <CardFooter className="flex justify-center text-green-600">Text Summarization</CardFooter> 
  </Card>
      </Tilt>


      <Tilt options={{ max: 25, speed: 400 }}>
    <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
      <CardContent className="flex justify-center">
        <img src={tensorflow} className="w-20 h-[6.5rem]" alt="" /> 
      </CardContent>
      <CardFooter className="flex justify-center text-orange-600">TensorFlow</CardFooter> 
    </Card>
      </Tilt>
      <Tilt options={{ max: 25, speed: 400 }}>

  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <img src={opencv} className="w-20 h-[6.5rem]" alt="" /> 
    </CardContent>
    <CardFooter className="flex justify-center text-teal-600">Basic-OpenCV</CardFooter> 
  </Card>
      </Tilt>

</div>

      </div>

      <div
        className="flex bg-slate-200 hover:bg-slate-400 transition-all  rounded-[10rem] duration-500 w-full h-14 justify-center cursor-pointer mt-6"
        onClick={() => setShowFutureLearnings(!showFutureLearnings)}
      >
          <div className="text-3xl select-none flex gap-4 max-sm:text-xl max-sm:mt-3 ">
        <SiFuturelearn className='size-10 hover:scale-110 transition-all duration-500 select-none text-green-600 max-sm:size-9' />
          <div>
          Future Learnings
        </div>
        </div>
        {showFutureLearnings ? <FaAngleUp className="size-12" /> : <FaAngleDown className="size-12 max-sm:size-9 max-sm:mt-2" />}
      </div>
      <div className={`overflow-hidden transition-all duration-1000 ${showFutureLearnings ? 'max-h-[1000px]' : 'max-h-0'}`}>
      <div className="flex max-sm:overflow-scroll">
      <Tilt options={{ max: 25, speed: 400 }}>

    <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <FaAws className="text-yellow-600 text-9xl " /> 
    </CardContent>
    <CardFooter className="flex justify-center text-yellow-600">AWS (Cloud)</CardFooter> 
  </Card>
      </Tilt>

      <Tilt options={{ max: 25, speed: 400 }}>

  <Card className="border-slate-400 shadow-lg w-52 p-5 m-6">
    <CardContent className="flex justify-center">
      <img src={cnn} className="w-20 h-20" alt="" /> 
    </CardContent>
    <CardFooter className="flex justify-center text-blue-600">Convolutional Neural Network (CNN)</CardFooter> 
  </Card>
      </Tilt>

</div>

      </div>
    </div>
  );
};

export default Skills;
