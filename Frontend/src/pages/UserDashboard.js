import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
    const [isLoaded, setIsLoaded] = useState(false);  // For animation effect

    useEffect(() => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            // If there's no token, redirect to login
            navigate('/login');
        } else {
            // If token exists, mark the dashboard as loaded for animation
            setIsLoaded(true);
        }
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem('authToken');  // Remove token from localStorage
        navigate('/login');  // Redirect to login page
    };


    const containerStyle = {
        padding: '4rem',
        backgroundColor: '#f4f7fa',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: '2rem',
        position: 'relative',
        backgroundImage:
            "url('https://www.financialexpress.com/wp-content/uploads/2024/06/dave-goudreau-jviblDl60IE-unsplash-1.jpg?w=440')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
    };

    const headerStyle = {
        fontSize: '2.5rem',
        color: 'white',
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)', // Gradient color
        backgroundClip: 'text',
        fontWeight: 'bold',
        marginBottom: '3rem',
        textAlign: 'center',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        //fontFamily: "'Pacifico', cursive", // Handwritten-style font
    };

    const dashboardOptionsStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '2rem',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        maxWidth: '800px',
    };

    const linkStyle = (index) => ({
        display: 'block',
        textAlign: 'center',
        padding: '1.5rem',
        borderRadius: '12px',
        backgroundColor: '#007bff',
        color: 'white',
        textDecoration: 'none',
        width: '180px',
        fontSize: '1rem',
        fontWeight: '500',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        transition: 'transform 0.3s, background-color 0.3s, box-shadow 0.3s',
        opacity: isLoaded ? 1 : 0,
        animation: isLoaded ? `fadeIn 1s ease-out forwards ${index * 0.2}s` : 'none', // Delay based on index
    });

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>User Dashboard</h1>
            <button
                onClick={logout}
                style={{
                    padding: "12px 20px",
                    backgroundColor: "#cc0000",
                    color: "white",
                    fontSize: "1.2rem",
                    borderRadius: "8px",
                    border: "none",
                    cursor: "pointer",
                    marginBottom: "20px",
                }}
            >
                Logout
            </button>
            <div style={dashboardOptionsStyle}>
                <Link to="/user/view-disasters" style={linkStyle(0)}>View Disasters</Link>
                <Link to="/user/view-shelters" style={linkStyle(1)}>View Shelters</Link>
                <Link to="/user/post-sos" style={linkStyle(2)}>Post SOS</Link>
                <Link to="/user/view-sos" style={linkStyle(3)}>View SOS</Link>
                <Link to="/user/post-incident" style={linkStyle(4)}>Post Incident</Link>
                <Link to="/user/manage-incident" style={linkStyle(5)}>Manage Incident</Link>
                <Link to="/user/post-resource" style={linkStyle(6)}>Post Resource</Link>
                <Link to="/user/manage-resource" style={linkStyle(7)}>Manage Resource</Link>
            </div>

            {/* Inline the keyframes */}
            <style>
                {`
                    @keyframes fadeIn {
                        0% {
                            opacity: 0;
                            transform: translateY(20px);
                        }
                        100% {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }

                    a:hover {
                        background-color: #0056b3;
                        transform: translateY(-6px);
                        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                    }

                    @media (max-width: 600px) {
                        h1 {
                            font-size: 2rem;
                        }

                        .linkStyle {
                            width: 90%;
                            font-size: 1rem;
                        }
                    }
                `}
            </style>
        </div>
    );
};

export default Dashboard;
