import React, { useState } from 'react';

const EditProfile = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Profile updated:', { name, email });
        // Logic to update profile (e.g., send to API)
    };

    const styles = {
        dashboardContainer: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            fontFamily: 'Roboto, sans-serif',
        },
        dashboardFormContainer: {
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            width: '100%',
            maxWidth: '600px',
            textAlign: 'center',
            transition: 'transform 0.3s ease-in-out',
        },
        dashboardTitle: {
            fontSize: '26px',
            fontWeight: '700',
            color: '#333',
            marginBottom: '20px',
            textTransform: 'uppercase',
        },
        dashboardInput: {
            width: '100%',
            padding: '15px',
            marginBottom: '20px',
            border: '2px solid #ccc',
            borderRadius: '8px',
            fontSize: '16px',
            color: '#333',
            backgroundColor: '#f9f9f9',
            transition: 'border-color 0.3s ease-in-out',
        },
        dashboardInputFocus: {
            borderColor: '#4CAF50',
            outline: 'none',
        },
        dashboardButton: {
            padding: '15px 20px',
            backgroundColor: '#4CAF50',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            width: '100%',
            transition: 'background-color 0.3s ease-in-out',
        },
        dashboardButtonHover: {
            backgroundColor: '#45a049',
        },
    };

    return (
        <div style={styles.dashboardContainer}>
            <div style={styles.dashboardFormContainer}>
                <h2 style={styles.dashboardTitle}>Edit Profile</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.dashboardInput}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.dashboardInput}
                    />
                    <button
                        type="submit"
                        style={styles.dashboardButton}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = styles.dashboardButtonHover.backgroundColor)}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = styles.dashboardButton.backgroundColor)}
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
