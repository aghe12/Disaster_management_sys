import React, { useState } from 'react';

const UpdateShelter = () => {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [image, setImage] = useState(null);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f4f4f9',
        padding: '20px',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL")',  // Add your image URL here
        backgroundSize: 'cover',  // Makes sure the background covers the whole container
        backgroundPosition: 'center',  // Centers the background image
    };

    const formStyle = {
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '500px',
    };

    const labelStyle = {
        marginBottom: '10px',
        fontWeight: 'bold',
        fontSize: '16px',
        color: '#333',
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        fontSize: '14px',
        color: '#333',
    };

    const buttonStyle = {
        padding: '12px 20px',
        backgroundColor: '#4CAF50',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        fontSize: '16px',
        width: '100%',
        transition: 'background-color 0.3s',
        marginBottom: '10px',
    };

    const buttonHoverStyle = {
        backgroundColor: '#45a049',
    };

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    setError(null);
                },
                (err) => {
                    setError('Error getting location: ' + err.message);
                }
            );
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    };

    const handleImageUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImage(URL.createObjectURL(file));
        }
    };

    return (
        <div style={containerStyle}>
            <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Update Shelter</h2>
            <form style={formStyle}>
                <div>
                    <label style={labelStyle}>Shelter Name:</label>
                    <input type="text" placeholder="Enter shelter name" style={inputStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Location:</label>
                    <input type="text" placeholder="Enter new shelter location" style={inputStyle} />
                </div>
                <div>
                    <label style={labelStyle}>Capacity:</label>
                    <input type="number" placeholder="Enter new shelter capacity" style={inputStyle} />
                </div>

                {/* Live Geo Location */}
                <div>
                    <button
                        type="button"
                        style={buttonStyle}
                        onClick={getLocation}
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Get Live Location
                    </button>
                    {location && (
                        <div style={{ marginTop: '15px' }}>
                            <p>Latitude: {location.latitude}</p>
                            <p>Longitude: {location.longitude}</p>
                        </div>
                    )}
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>

                {/* Image Upload */}
                <div>
                    <label style={labelStyle}>Upload Shelter Image:</label>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={inputStyle} />
                    {image && <img src={image} alt="Shelter" style={{ width: '100%', marginTop: '15px', borderRadius: '8px' }} />}
                </div>

                {/* Map Buttons */}
                <div style={{ marginTop: '20px' }}>
                    <button
                        type="button"
                        style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Show Map
                    </button>
                    <button
                        type="button"
                        style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Update Map
                    </button>
                </div>

                {/* Update Button */}
                <div style={{ marginTop: '20px' }}>
                    <button
                        type="submit"
                        style={buttonStyle}
                        onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                        onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateShelter;
