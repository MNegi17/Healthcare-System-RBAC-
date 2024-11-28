import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import for navigation
import { getDashboard } from '../api';

const Dashboard = () => {
    const [dashboardData, setDashboardData] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Updated to use `navigate`
    const token = localStorage.getItem('authToken'); // Get token from localStorage

    useEffect(() => {
        if (!token) {
            navigate('/login');  // Redirect to login if no token
            return;
        }

        const fetchData = async () => {
            try {
                const data = await getDashboard(token);
                setDashboardData(data);
            } catch (err) {
                setError(err.message);
            }
        };

        fetchData();
    }, [token, navigate]);  // Re-run the effect if token or navigate changes

    if (error) return <p>{error}</p>;

    return (
        <div>
            <h2>Dashboard</h2>
            {dashboardData ? (
                <div>
                    <p>Welcome, {dashboardData.username}</p>
                    <p>Your role: {dashboardData.role}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Dashboard;
