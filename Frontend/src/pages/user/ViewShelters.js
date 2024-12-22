import React, { useState, useEffect } from 'react';

const ViewShelter = () => {
    const [shelters, setShelters] = useState([]);

    useEffect(() => {
        // Simulate fetching shelter data (you can replace it with an API call)
        setShelters([
            { id: 1, name: 'Shelter 1', location: 'City A', capacity: '100' },
            { id: 2, name: 'Shelter 2', location: 'City B', capacity: '200' },
        ]);
    }, []);

    return (
        <div style={styles.container}>
            <div style={styles.shelterContainer}>
                <h2 style={styles.title}>View Shelters</h2>
                <ul style={styles.shelterList}>
                    {shelters.map((shelter) => (
                        <li key={shelter.id} style={styles.shelterItem}>
                            <h3 style={styles.shelterName}>{shelter.name}</h3>
                            <p style={styles.shelterDetails}>
                                Location: {shelter.location}<br />
                                Capacity: {shelter.capacity}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    shelterContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        padding: '40px',
        borderRadius: '10px',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
        textAlign: 'center',
    },
    title: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '20px',
    },
    shelterList: {
        listStyleType: 'none',
        padding: 0,
    },
    shelterItem: {
        backgroundColor: '#f9f9f9',
        padding: '15px',
        marginBottom: '15px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
    },
    shelterName: {
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#333',
    },
    shelterDetails: {
        fontSize: '14px',
        color: '#666',
    },
};

export default ViewShelter;
