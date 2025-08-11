import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
);

const CategorizedSkillsChart = () => {
    const chartData = {
        labels: [
            // Programming Languages
            'C Language', 'Python', 'Java', 'JavaScript',
            // Web Technologies  
            'HTML5', 'CSS3', 'Bootstrap', 'Tailwind CSS', 'jQuery', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'Git & GitHub', 'Postman',
            // AI & ML
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
                label: 'Web Technologies',
                data: [null, null, null, null, 90, 90, 70, 90, 80, 90, 70, 90, 90, 70, 70, 90, 90, null, null, null, null],
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
                label: 'AI & ML',
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

    const chartOptions = {
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
                        size: 10,
                        weight: '500'
                    },
                    maxRotation: 45,
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

    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-2xl border border-gray-700">
            <div className="h-80 w-full relative">
                <Line data={chartData} options={chartOptions} />
            </div>
            
            {/* Category Legend */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                    <h3 className="text-red-400 font-bold mb-2 flex items-center">
                        <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                        Programming Languages
                    </h3>
                    <p className="text-gray-300 text-sm">C, Python, Java, JavaScript</p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                    <h3 className="text-teal-400 font-bold mb-2 flex items-center">
                        <div className="w-3 h-3 bg-teal-400 rounded-full mr-2"></div>
                        Web Technologies
                    </h3>
                    <p className="text-gray-300 text-sm">Frontend, Backend, Database & Tools</p>
                </div>
                
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
                    <h3 className="text-yellow-400 font-bold mb-2 flex items-center">
                        <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                        AI & Machine Learning
                    </h3>
                    <p className="text-gray-300 text-sm">ML, LangChain, TensorFlow, OpenCV</p>
                </div>
            </div>
        </div>
    );
};

export default CategorizedSkillsChart;