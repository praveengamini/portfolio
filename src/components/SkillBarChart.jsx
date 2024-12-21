import React from 'react';
import { Chart as ChartJS, ArcElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(
    ArcElement,
    CategoryScale,
    LinearScale,
    Tooltip,
    Legend
);

const SkillBarChart = () => {
    const chartData = {
        labels: [
            'MERN Full-Stack Web Development (Advanced)', 
            'Data Structures and Algorithms (Intermediate)', 
            'C (Advanced)', 
            'Python (Advanced)', 
            'Java (Advanced)', 
            'JavaScript (Advanced)'
        ],
        datasets: [{
            label: 'Skill Level',
            data: [90, 70, 90, 95, 85, 90],
            backgroundColor: [
                '#FF5733', 
                '#33FF57', 
                '#3357FF', 
                '#8E44AD', 
                '#1F77B4', 
                '#FF69B4'
            ],
            borderColor: [
                '#FF5733', 
                '#33FF57',
                '#3357FF',
                '#8E44AD',
                '#1F77B4',
                '#FF69B4'
            ],
            borderWidth: 1
        }]
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        const { dataset, dataIndex } = tooltipItem;
                        return `${dataset.label}: ${dataset.data[dataIndex]}%`;
                    },
                },
            },
            legend: {
                position: 'top',
            },
            datalabels: {
                display: true,
                formatter: (value) => `${value}%`,
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14,
                },
            },
        },
    };

    return (
        <div className="flex justify-center  items-center p-6 rounded-lg  max-w-xl mx-auto">
            <div className="w-full">
                <div className="flex justify-center">
                    <Pie data={chartData} options={chartOptions} />
                </div>
            </div>
        </div>
    );
};

export default SkillBarChart;
