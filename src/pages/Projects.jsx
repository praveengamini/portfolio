import React, { useState } from 'react';
import javapbl from '../assets/images/javapbl.png'
import { CardContent, Card, CardFooter, CardDescription } from '@/components/ui/card';
import qmart from '../assets/images/q-mart.png';
import { Button } from "@/components/ui/button";
import measurements from '../assets/images/measurements.png';
import smartStudy from '../assets/images/smartStudy.png';
import clock from '../assets/images/clock.png';
import ChatPdf from '../assets/images/ChatPdf.png';
import useScrollToTop from '@/components/useScrollTop';
import meetingExtensionImg from '../assets/images/meetingExtensionImg.png'
import portfolioproject from '../assets/images/portfolioproject.png'
import AiTaskFlowImage from '../assets/images/AiTaskFlowImage.png'
const Projects = () => {
  useScrollToTop();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const projects = [
     {
      id: 0,
      title: 'AI-TaskFlow',
      categories: ['Full Stack', 'AI/ML'],
      image: AiTaskFlowImage,
      description: 'An AI-powered MERN web application that generates personalized weekly and daily task plans based on user-defined goals and timelines. It helps users stay organized and achieve their objectives efficiently through intelligent task flow management.',
      codeLink: 'https://github.com/praveengamini/Ai-TaskFlow',
      websiteLink: 'https://ai-taskflow-frontend.onrender.com/',
      hasWebsite: true
    },
    {
      id: 1,
      title: 'ChatPdf',
      categories: ['Full Stack', 'AI/ML'],
      image: ChatPdf,
      description: 'ChatPDF is a MERN application integrated with langchain used for interacting with PDFs. Upload any PDF and start having conversations with your content using AI.',
      codeLink: 'https://github.com/praveengamini/ChatPdf',
      websiteLink: 'https://chatpdf-frontend.onrender.com',
      hasWebsite: true
    },
    {
      id: 2,
      title: 'Quick Mart',
      categories: ['Full Stack'],
      image: qmart,
      description: 'A Full Stack E-commerce website built with React, Node.js, Express, MongoDB. Providing admin panel and user view as well.',
      codeLink: 'https://github.com/praveengamini/q-mart',
      hasWebsite: false
    },
    {
      id: 3,
      title: 'Meeting Summarizer',
      categories: ['Extensions', 'AI/ML'],
      image: meetingExtensionImg,
      description: 'Chrome extension that records meetings, generates AI summaries, converts to PDF, and emails participants automatically.',
      codeLink: 'https://github.com/praveengamini/MeetingExtension.git',
      hasWebsite: false
    },
    {
      id: 4,
      title: 'Body-Metric',
      categories: ['AI/ML'],
      image: measurements,
      description: 'A full web that uses computer vision to measure body measurements and provide accurate fit recommendations.',
      codeLink: 'https://github.com/praveengamini/Body-Metric',
      websiteLink: 'https://body-metric-zfey.vercel.app/',
      hasWebsite: true
    },
    {
      id: 5,
      title: 'Java E-Commerce',
      categories: ['Basic Projects'],
      image: javapbl,
      description: 'A simple E-commerce application built with Java and MySQL and uses HTML, CSS, and JavaScript.',
      codeLink: 'https://github.com/praveengamini/JavaEcommerce',
      hasWebsite: false
    },
    {
      id: 6,
      title: 'Smart Study',
      categories: ['Frontend'],
      image: smartStudy,
      description: 'A front-end web application that helps students to study and learn more effectively. Built using HTML, CSS, JavaScript.',
      codeLink: 'https://github.com/praveengamini/SmartStudy',
      websiteLink: 'https://praveengamini.github.io/SmartStudy/',
      hasWebsite: true
    },
    {
      id: 7,
      title: 'Portfolio',
      categories: ['Frontend'],
      image: portfolioproject,
      description: 'My personal portfolio website showcasing my projects, skills, and experience. Built with modern web technologies.',
      codeLink: 'https://github.com/praveengamini/portfolio',
      websiteLink: 'https://praveengamini.netlify.app',
      hasWebsite: true,
      isPortfolio: true
    },
    {
      id: 8,
      title: 'Clock',
      categories: ['Basic Projects'],
      image: clock,
      description: 'A C program that provides a timer, stopwatch, and digital clock functionality with user input for timing and displays real-time updates.',
      codeLink: 'https://onlinegdb.com/pHVyzhK5T',
      hasWebsite: false,
      isExecutable: true
    }
  ];

  const categories = [
    { name: 'All', icon: '🚀', count: projects.length },
    { name: 'AI/ML', icon: '🤖', count: projects.filter(p => p.categories.includes('AI/ML')).length },
    { name: 'Full Stack', icon: '💻', count: projects.filter(p => p.categories.includes('Full Stack')).length },
    { name: 'Frontend', icon: '🎨', count: projects.filter(p => p.categories.includes('Frontend')).length },
    { name: 'Extensions', icon: '🔌', count: projects.filter(p => p.categories.includes('Extensions')).length },
    { name: 'Basic Projects', icon: '📚', count: projects.filter(p => p.categories.includes('Basic Projects')).length }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.categories.includes(activeCategory));

  const activeTabData = categories.find(cat => cat.name === activeCategory);

  const handleCategorySelect = (categoryName) => {
    setActiveCategory(categoryName);
    setIsDropdownOpen(false);
  };

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
      
      <div className="mb-8">
        <div className="hidden md:flex flex-wrap justify-center gap-2 mb-6">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                activeCategory === category.name
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white'
              }`}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
              <span className="text-xs bg-gray-600 rounded-full px-2 py-1">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        <div className="md:hidden relative mb-6">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg flex items-center justify-between hover:bg-gray-600 transition-all duration-300"
          >
            <div className="flex items-center gap-2">
              <span>{activeTabData?.icon}</span>
              <span className="font-medium">{activeTabData?.name}</span>
              <span className="text-xs bg-gray-600 rounded-full px-2 py-1">
                {activeTabData?.count}
              </span>
            </div>
            <svg
              className={`w-5 h-5 transition-transform duration-300 ${
                isDropdownOpen ? 'rotate-180' : ''
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-gray-700 rounded-lg shadow-xl z-30 overflow-hidden">
              {categories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => handleCategorySelect(category.name)}
                  className={`w-full px-4 py-3 text-left hover:bg-gray-600 transition-all duration-200 flex items-center gap-2 ${
                    activeCategory === category.name
                      ? 'bg-indigo-600 text-white'
                      : 'text-gray-300'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="font-medium">{category.name}</span>
                  <span className="text-xs bg-gray-600 rounded-full px-2 py-1 ml-auto">
                    {category.count}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filteredProjects.map((project) => (
          <Card key={project.id} className='bg-gray-700 max-w-sm shadow-lg transform transition-all duration-500 h-[360px] select-none hover:shadow-xl relative overflow-hidden group p-1 fade-in'>
            <CardContent className="relative h-64">
              <img 
                src={project.image} 
                className='w-full h-full object-cover rounded-lg transition-all duration-300 group-hover:opacity-80' 
                alt={project.title} 
              />
              <div className="absolute inset-0 select-none bg-black bg-opacity-75 flex flex-col justify-center items-center 
                             opacity-0 group-hover:opacity-100 
                             transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] 
                             transform translate-y-4 group-hover:translate-y-0 
                             p-4 space-y-3 overflow-hidden">
                <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300'>
                  {project.title}
                </h2>
                <CardDescription className='text-center text-lg font-medium text-gray-300'>
                  {project.description}
                </CardDescription>
              </div>
            </CardContent>

            <h2 className='text-center text-xl font-bold text-white hover:text-indigo-400 transition-colors duration-300 slide-down'>
              {project.title}
            </h2>
            
            <CardFooter className={`flex ${project.hasWebsite ? 'justify-between' : 'justify-center'} slide-up`}>
              {project.codeLink && (
                <a target="_blank" href={project.codeLink} rel="noopener noreferrer">
                  <Button className='bg-indigo-600 text-white rounded-md px-4 py-2 mt-4 hover:bg-indigo-700 transition duration-300'>
                    {project.isExecutable ? 'Execute' : 'Code'}
                  </Button>
                </a>
              )}
              {project.hasWebsite && (
                <a target="_blank" href={project.websiteLink} rel="noopener noreferrer">
                  <Button className={`${project.isPortfolio ? 'bg-green-600 hover:bg-green-700' : 'bg-blue-500 hover:bg-blue-600'} text-white rounded-md px-4 py-2 mt-4 transition duration-300`}>
                    {project.isPortfolio ? 'Visit Portfolio' : 'Website'}
                  </Button>
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Projects;