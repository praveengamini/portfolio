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

const SkillBarChart = () => {
    const chartData = {
        labels: [
            'C Programming',
            'Python', 
            'Java',
            'JavaScript',
            'DSA',
            'MERN Stack'
        ],
        datasets: [{
            label: 'Skill Level',
            data: [90, 95, 85, 90, 70, 90],
            borderColor: '#00D4FF',
            backgroundColor: 'rgba(0, 212, 255, 0.1)',
            pointBackgroundColor: '#00D4FF',
            pointBorderColor: '#ffffff',
            pointBorderWidth: 2,
            pointRadius: 6,
            pointHoverRadius: 8,
            fill: true,
            tension: 0.4,
            borderWidth: 3
        }]
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
                    pointStyle: 'circle'
                }
            },
            title: {
                display: true,
                text: 'Skills Progression Graph',
                color: '#ffffff',
                font: {
                    size: 18,
                    weight: 'bold'
                },
                padding: 20
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                titleColor: '#00D4FF',
                bodyColor: '#ffffff',
                borderColor: '#00D4FF',
                borderWidth: 1,
                cornerRadius: 8,
                displayColors: false,
                callbacks: {
                    label: (context) => {
                        const value = context.parsed.y;
                        let level = '';
                        if (value >= 90) level = 'Expert Level';
                        else if (value >= 80) level = 'Advanced Level';
                        else if (value >= 70) level = 'Intermediate Level';
                        else level = 'Beginner Level';
                        
                        return [`Proficiency: ${value}%`, `Status: ${level}`];
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
                hoverBackgroundColor: '#00D4FF',
                hoverBorderColor: '#ffffff',
                hoverBorderWidth: 3
            }
        }
    };

    return (
        <div className="bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-xl shadow-2xl border border-gray-700">
            <div className="h-72 w-full relative">
                <Line data={chartData} options={chartOptions} />
            </div>
            
        
        </div>
    );
};

export default SkillBarChart;