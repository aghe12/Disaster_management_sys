
import React, { useEffect, useState } from 'react';

const VolunteerProfile = () => {
    const [volunteerDetails, setVolunteerDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for fetching data
        const fetchMockedVolunteerDetails = () => {
            setLoading(true);
            setTimeout(() => {
                // Mocked data
                const mockData = {
                    name: '',
                    email: '',
                    phone: '',
                };
                setVolunteerDetails(mockData);
                setLoading(false);
            }, 1000); // Simulates a 1-second delay
        };

        fetchMockedVolunteerDetails();
    }, []);

    const styles = {
        dashboardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        dashboardProfileContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
        },
        dashboardTitle: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        dashboardButton: {
            padding: '15px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease-in-out',
        },
    };

    if (loading) {
        return <div style={styles.dashboardContainer}>Loading...</div>;
    }

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.dashboardProfileContainer}>
                <h2 style={styles.dashboardTitle}>Your Profile</h2>
                {volunteerDetails ? (
                    <>
                        <p>Name: {volunteerDetails.name}</p>
                        <p>Email: {volunteerDetails.email}</p>
                        <p>Phone: {volunteerDetails.phone}</p>
                        <button
                            style={styles.dashboardButton}
                            onClick={() => {
                                alert('Edit Profile Clicked');
                            }}
                        >
                            Edit Profile
                        </button>
                    </>
                ) : (
                    <p>No details available</p>
                )}
            </div>
        </div>
    );
};

export default VolunteerProfile;
