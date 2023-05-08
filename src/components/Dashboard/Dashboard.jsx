import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';



const Dashboard = () => {

    const marksArray = [
        {
            id: 1,
            name: 'Alice',
            physics: 85,
            chemistry: 90,
            math: 75
        },
        {
            id: 2,
            name: 'Bob',
            physics: 80,
            chemistry: 70,
            math: 90
        },
        {
            id: 3,
            name: 'Charlie',
            physics: 90,
            chemistry: 85,
            math: 80
        },
        {
            id: 4,
            name: 'Dave',
            physics: 70,
            chemistry: 80,
            math: 75
        },
        {
            id: 5,
            name: 'Eve',
            physics: 75,
            chemistry: 90,
            math: 85
        },
        {
            id: 6,
            name: 'Frank',
            physics: 85,
            chemistry: 70,
            math: 80
        },
        {
            id: 7,
            name: 'Grace',
            physics: 90,
            chemistry: 85,
            math: 70
        },
        {
            id: 8,
            name: 'Hank',
            physics: 75,
            chemistry: 80,
            math: 85
        }
    ];

    return (
        <div className='px-20'>
            <h1 className="text-3xl font-semibold text-white bg-blue-400 text-center p-4">Dashboard here</h1>
            <div className="flex justify-between my-10">
                <LineChart
                width={500}
                height={400}
                data={marksArray}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line dataKey="physics" stroke='purple'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
                <Line dataKey="math" stroke='orange'></Line>
            </LineChart>
            <BarChart 
            width={500} 
            height={400} 
            data={marksArray}
            >
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="physics" fill='blue'></Bar>
                <Bar dataKey="chemistry" fill='purple'></Bar>
                <Bar dataKey="math" fill='orange'></Bar>
            </BarChart>
            </div>
        </div>
    );
};

export default Dashboard;