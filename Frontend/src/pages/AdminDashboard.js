
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Set loaded to true after the component mounts, ensuring animation triggers
        setIsLoaded(true);
    }, []);

    const containerStyle = {
        padding: "4rem",
        backgroundColor: "#f4f7fa",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: "2rem",
        position: "relative",
        backgroundImage:
            "url('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg/1200px-Port_and_lighthouse_overnight_storm_with_lightning_in_Port-la-Nouvelle.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow: "hidden",
    };

    const headerStyle = {
        fontSize: "2.5rem",
        color: "white",
        fontWeight: "bold",
        marginBottom: "3rem",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "1px",
    };

    const dashboardOptionsStyle = {
        display: "flex",
        flexWrap: "wrap",
        gap: "2rem",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        maxWidth: "800px",
    };

    const linkStyle = (index) => ({
        display: "block",
        textAlign: "center",
        padding: "1.5rem",
        borderRadius: "12px",
        backgroundColor: "#007bff",
        color: "white",
        textDecoration: "none",
        width: "180px",
        fontSize: "1rem",
        fontWeight: "500",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s, background-color 0.3s, box-shadow 0.3s",
        opacity: isLoaded ? 1 : 0,
        animation: isLoaded ? `fadeIn 1s ease-out forwards ${index * 0.2}s` : "none", // Delay based on index
    });

    return (
        <div style={containerStyle}>
            <h1 style={headerStyle}>Admin Dashboard</h1>
            <div style={dashboardOptionsStyle}>
                <Link to="/admin/add-bank-details" style={linkStyle(0)}>Add Bank Details</Link>
                <Link to="/admin/manage-bank-details" style={linkStyle(1)}>Manage Bank Details</Link>
                <Link to="/admin/post-disaster" style={linkStyle(2)}>Post Disasters</Link>
                <Link to="/admin/post-shelters" style={linkStyle(3)}>Post Shelters</Link>
                <Link to="/admin/update-disasters" style={linkStyle(4)}>Update Disaster</Link>
                <Link to="/admin/update-shelter" style={linkStyle(5)}>Update Shelter</Link>
                <Link to="/admin/view-emergency-sources" style={linkStyle(6)}>View Emergency Sources</Link>
                <Link to="/admin/view-user-details" style={linkStyle(7)}>View User Details</Link>
                <Link to="/admin/view-volunteers" style={linkStyle(8)}>View Volunteers</Link>
                <Link to="/admin/view-volunteer-tasks" style={linkStyle(9)}>View Volunteer Tasks</Link>
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

                    @keyframes slideInRight {
                        0% {
                            transform: translateX(100%);
                            opacity: 0;
                        }
                        100% {
                            transform: translateX(0);
                            opacity: 1;
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
