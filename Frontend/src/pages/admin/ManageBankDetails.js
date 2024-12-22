import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ManageBankDetails = () => {
    const [bankDetails, setBankDetails] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    // Fetch bank details from the backend
    useEffect(() => {
        const fetchBankDetails = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/bank');
                const data = await response.json();
                setBankDetails(data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching bank details:', err);
                setLoading(false);
            }
        };

        fetchBankDetails();
    }, []);

    // Handle Edit functionality
    const handleEdit = (id) => {
        navigate(`/edit-bank-detail/${id}`);
    };

    // Handle Delete functionality
    const handleDelete = async (id) => {
        const confirmed = window.confirm('Are you sure you want to delete this bank detail?');
        if (confirmed) {
            try {
                const response = await fetch(`http://localhost:5000/api/bank/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    setBankDetails(bankDetails.filter(bank => bank._id !== id)); // Remove from state
                    alert('Bank detail deleted successfully.');
                }
            } catch (err) {
                console.error('Error deleting bank detail:', err);
            }
        }
    };

    // Handle Add New functionality
    const handleAddNew = () => {
        navigate('/add-bank-detail');
    };

    if (loading) {
        return <p>Loading bank details...</p>;
    }

    return (
        <div style={styles.container}>
            <div style={styles.content}>
                <h2 style={styles.title}>Manage Bank Details</h2>

                {/* Add New Bank Detail button */}
                <button onClick={handleAddNew} style={styles.addButton}>Add New Bank Detail</button>

                {/* Bank Details List */}
                <ul style={styles.bankList}>
                    {bankDetails.map((bank) => (
                        <li key={bank._id} style={styles.bankItem}>
                            <div>
                                <strong>{bank.bankName}</strong> - {bank.accountNumber} - {bank.ifscCode}
                            </div>
                            <div style={styles.buttons}>
                                <button onClick={() => handleEdit(bank._id)} style={styles.editButton}>
                                    Edit
                                </button>
                                <button onClick={() => handleDelete(bank._id)} style={styles.deleteButton}>
                                    Delete
                                </button>
                            </div>
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
        backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
    },
    content: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Slight transparency for background content
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '600px',
    },
    title: {
        textAlign: 'center',
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333',
    },
    addButton: {
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
        marginBottom: '20px',
        width: '100%',
        fontSize: '16px',
    },
    bankList: {
        listStyleType: 'none',
        padding: '0',
    },
    bankItem: {
        backgroundColor: '#f4f4f4',
        margin: '10px 0',
        padding: '12px',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        fontSize: '16px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#333',
        transition: 'background-color 0.3s, transform 0.3s',
    },
    buttons: {
        display: 'flex',
        gap: '10px',
    },
    editButton: {
        backgroundColor: '#ffcc00',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
    deleteButton: {
        backgroundColor: '#e74c3c',
        color: 'white',
        padding: '8px 12px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
    },
};

export default ManageBankDetails;
