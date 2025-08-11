import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

const ResponsiveSkillsChart = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const lineChartData = {
        labels: [
            'C Language', 'Python', 'Java', 'JavaScript',
            'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'React', 'Redux',
            'Node.js', 'Express', 'MongoDB', 'MySQL', 'Git & GitHub', 'Postman',
            'Machine Learning', 'LangChain', 'TensorFlow', 'OpenCV'
        ],
        datasets: [
            {
                label: 'Programming Languages',
                data: [90, 90, 90, 90, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
                borderColor: '#FF6B6B',
                backgroundColor: 'rgba(255, 107, 107, 0.1)',
                pointBackgroundColor: '#FF6B6B',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: false,
                tension: 0.4,
                borderWidth: 3,
                spanGaps: false
            },
            {
                label: 'Frontend Technologies',
                data: [null, null, null, null, 90, 90, 70, 90, 80, 90, 70, null, null, null, null, null, null, null, null, null, null],
                borderColor: '#4ECDC4',
                backgroundColor: 'rgba(78, 205, 196, 0.1)',
                pointBackgroundColor: '#4ECDC4',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: false,
                tension: 0.4,
                borderWidth: 3,
                spanGaps: false
            },
            {
                label: 'Backend & Database',
                data: [null, null, null, null, null, null, null, null, null, null, null, 90, 90, 70, 70, 90, 90, null, null, null, null],
                borderColor: '#9B59B6',
                backgroundColor: 'rgba(155, 89, 182, 0.1)',
                pointBackgroundColor: '#9B59B6',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: false,
                tension: 0.4,
                borderWidth: 3,
                spanGaps: false
            },
            {
                label: 'AI & Machine Learning',
                data: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 70, 85, 80, 80],
                borderColor: '#FFE66D',
                backgroundColor: 'rgba(255, 230, 109, 0.1)',
                pointBackgroundColor: '#FFE66D',
                pointBorderColor: '#ffffff',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 8,
                fill: false,
                tension: 0.4,
                borderWidth: 3,
                spanGaps: false
            }
        ]
    };

    const pieChartData = {
        labels: ['Programming Languages', 'Frontend Technologies', 'Backend & Database', 'AI & Machine Learning'],
        datasets: [
            {
                data: [90, 83, 82, 79], 
                backgroundColor: ['#FF6B6B', '#4ECDC4', '#9B59B6', '#FFE66D'],
                borderColor: '#ffffff',
                borderWidth: 3,
                hoverBorderWidth: 4,
                hoverBorderColor: '#ffffff'
            }
        ]
    };

    const lineChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 14,
                        weight: 'bold'
                    },
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 20
                }
            },
            title: {
                display: true,
                text: 'Skills Progression by Category',
                color: '#ffffff',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                padding: 20
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#ffffff',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: true,
                filter: (tooltipItem) => tooltipItem.parsed.y !== null,
                callbacks: {
                    label: (context) => {
                        const value = context.parsed.y;
                        let level = '';
                        if (value >= 90) level = 'Expert Level';
                        else if (value >= 80) level = 'Advanced Level';
                        else if (value >= 70) level = 'Intermediate Level';
                        else level = 'Beginner Level';
                        
                        return [`${context.dataset.label}: ${value}%`, `Status: ${level}`];
                    }
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 100,
                grid: {
                    color: 'rgba(255, 255, 255, 0.1)',
                    lineWidth: 1
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 12
                    },
                    stepSize: 20,
                    callback: (value) => `${value}%`
                },
                title: {
                    display: true,
                    text: 'Proficiency Level (%)',
                    color: '#ffffff',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            },
            x: {
                grid: {
                    color: 'rgba(255, 255, 255, 0.05)',
                    lineWidth: 1
                },
                ticks: {
                    color: '#ffffff',
                    font: {
                        size: 11,
                        weight: '500'
                    },
                    maxRotation: 0,
                    minRotation: 0
                },
                title: {
                    display: true,
                    text: 'Technologies',
                    color: '#ffffff',
                    font: {
                        size: 14,
                        weight: 'bold'
                    }
                }
            }
        },
        animation: {
            duration: 2500,
            easing: 'easeInOutQuart'
        },
        interaction: {
            intersect: false,
            mode: 'index'
        },
        elements: {
            point: {
                hoverBackgroundColor: '#ffffff',
                hoverBorderColor: '#000000',
                hoverBorderWidth: 2
            }
        }
    };

    const pieChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom',
                labels: {
                    color: '#ffffff',
                    font: {
                        size: 12,
                        weight: 'bold'
                    },
                    usePointStyle: true,
                    pointStyle: 'circle',
                    padding: 15
                }
            },
            title: {
                display: true,
                text: 'Skills Overview by Category',
                color: '#ffffff',
                font: {
                    size: 16,
                    weight: 'bold'
                },
                padding: 20
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#ffffff',
                bodyColor: '#ffffff',
                borderColor: '#ffffff',
                borderWidth: 1,
                cornerRadius: 8,
                callbacks: {
                    label: (context) => {
                        const value = context.parsed;
                        const categorySkills = {
                            'Programming Languages': ['C Language (90%)', 'Python (90%)', 'Java (90%)', 'JavaScript (90%)'],
                            'Frontend Technologies': ['HTML5 (90%)', 'CSS3 (90%)', 'React (90%)', 'Tailwind CSS (90%)', 'jQuery (80%)', 'Bootstrap (70%)', 'Redux (70%)'],
                            'Backend & Database': ['Node.js (90%)', 'Express (90%)', 'Git & GitHub (90%)', 'Postman (90%)', 'MongoDB (70%)', 'MySQL (70%)'],
                            'AI & Machine Learning': ['Machine Learning (70%)', 'LangChain (85%)', 'TensorFlow (80%)', 'OpenCV (80%)']
                        };
                        
                        let level = '';
                        if (value >= 90) level = 'Expert Level';
                        else if (value >= 80) level = 'Advanced Level';
                        else if (value >= 70) level = 'Intermediate Level';
                        else level = 'Beginner Level';
                        
                        const skills = categorySkills[context.label] || [];
                        return [
                            `${context.label}: ${value}%`,
                            `Status: ${level}`,
                            '',
                            'Individual Skills:',
                            ...skills
                        ];
                    }
                }
            }
        },
        animation: {
            duration: 2000,
            easing: 'easeInOutQuart'
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-4 lg:p-6 rounded-xl shadow-2xl border border-gray-700">
            {isMobile ? (
                <>
                    <div className="h-80 w-full relative mb-4">
                        <Pie data={pieChartData} options={pieChartOptions} />
                    </div>
                    
                    <div className="grid grid-cols-1 gap-3  ">
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-red-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-red-400 rounded-full mr-2 flex-shrink-0"></div>
                                Programming Languages (90%)
                            </h3>
                            <p className="text-gray-300 text-xs">C, Python, Java, JavaScript</p>
                        </div>
                        
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-teal-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                                Frontend Technologies (83%)
                            </h3>
                            <p className="text-gray-300 text-xs">HTML5, CSS3, React, jQuery & Frameworks</p>
                        </div>
                        
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-purple-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                                Backend & Database (82%)
                            </h3>
                            <p className="text-gray-300 text-xs">Node.js, Express, MongoDB, MySQL & Tools</p>
                        </div>
                        
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-yellow-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></div>
                                AI & Machine Learning (79%)
                            </h3>
                            <p className="text-gray-300 text-xs">ML, LangChain, TensorFlow, OpenCV</p>
                        </div>
                    </div>
                </>
            ) : (
                <>
                    <div className="h-72 w-full relative">
                        <Line data={lineChartData} options={lineChartOptions} />
                    </div>
                    
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-red-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-red-400 rounded-full mr-2 flex-shrink-0"></div>
                                Programming Languages
                            </h3>
                            <p className="text-gray-300 text-xs">C, Python, Java, JavaScript</p>
                        </div>
                        
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-teal-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-teal-400 rounded-full mr-2 flex-shrink-0"></div>
                                Frontend Technologies
                            </h3>
                            <p className="text-gray-300 text-xs">HTML5, CSS3, React, jQuery & Frameworks</p>
                        </div>
                        
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-purple-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-purple-400 rounded-full mr-2 flex-shrink-0"></div>
                                Backend & Database
                            </h3>
                            <p className="text-gray-300 text-xs">Node.js, Express, MongoDB, MySQL & Tools</p>
                        </div>
                        
                        <div className="bg-gray-800 p-3 rounded-lg border border-gray-600">
                            <h3 className="text-yellow-400 font-bold mb-2 flex items-center text-sm">
                                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2 flex-shrink-0"></div>
                                AI & Machine Learning
                            </h3>
                            <p className="text-gray-300 text-xs">ML, LangChain, TensorFlow, OpenCV</p>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default ResponsiveSkillsChart;