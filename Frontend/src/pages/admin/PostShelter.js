// // import React, { useState } from 'react';

// // const PostShelter = () => {
// //     const [name, setName] = useState('');
// //     const [location, setLocation] = useState('');
// //     const [capacity, setCapacity] = useState('');
// //     const [isSubmitting, setIsSubmitting] = useState(false);  // Track submit state

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();  // Prevent the default form submission
// //         setIsSubmitting(true);  // Set the submit state to true

// //         try {
// //             const response = await fetch('http://localhost:5000/api/shelter/add', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ name, location, capacity }),
// //             });

// //             if (!response.ok) {
// //                 throw new Error('Failed to add shelter');
// //             }

// //             const result = await response.json();
// //             console.log('Shelter added:', result);
// //             alert('Shelter added successfully!');
            
// //             // Optionally reset the form fields
// //             setName('');
// //             setLocation('');
// //             setCapacity('');
// //         } catch (err) {
// //             console.error('Error during submission:', err);
// //             alert('Error during submission. Please try again later.');
// //         } finally {
// //             setIsSubmitting(false);  // Reset the submit state
// //         }
// //     };

// //     return (
// //         <div style={styles.container}>
// //             <div style={styles.formContainer}>
// //                 <h2 style={styles.title}>Post Shelter</h2>
// //                 <form onSubmit={handleSubmit} style={styles.form}>
// //                     <label style={styles.label}>
// //                         Shelter Name:
// //                         <input
// //                             type="text"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <label style={styles.label}>
// //                         Location:
// //                         <input
// //                             type="text"
// //                             value={location}
// //                             onChange={(e) => setLocation(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <label style={styles.label}>
// //                         Capacity:
// //                         <input
// //                             type="number"
// //                             value={capacity}
// //                             onChange={(e) => setCapacity(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <button
// //                         type="submit"
// //                         style={styles.submitButton}
// //                         disabled={isSubmitting || !name || !location || !capacity}  // Disable if form is incomplete
// //                     >
// //                         {isSubmitting ? 'Submitting...' : 'Submit'}
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // const styles = {
// //     container: {
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: '100vh',
// //         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         padding: '20px',
// //     },
// //     formContainer: {
// //         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
// //         padding: '30px',
// //         borderRadius: '10px',
// //         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //         width: '100%',
// //         maxWidth: '600px',
// //     },
// //     title: {
// //         textAlign: 'center',
// //         fontSize: '24px',
// //         marginBottom: '20px',
// //         color: '#333',
// //     },
// //     form: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: '15px',
// //     },
// //     label: {
// //         fontSize: '16px',
// //         color: '#333',
// //     },
// //     input: {
// //         padding: '12px',
// //         marginTop: '5px',
// //         fontSize: '14px',
// //         borderRadius: '5px',
// //         border: '1px solid #ccc',
// //         backgroundColor: '#f9f9f9',
// //         width: '100%',
// //         boxSizing: 'border-box',
// //     },
// //     submitButton: {
// //         padding: '12px',
// //         fontSize: '16px',
// //         backgroundColor: '#4CAF50',
// //         color: 'white',
// //         border: 'none',
// //         borderRadius: '5px',
// //         cursor: 'pointer',
// //         transition: 'background-color 0.3s',
// //     },
// // };

// // export default PostShelter;
// // import React, { useState } from 'react';

// // const PostShelter = () => {
// //     const [name, setName] = useState('');
// //     const [location, setLocation] = useState('');
// //     const [capacity, setCapacity] = useState('');
// //     const [availableSpace, setAvailableSpace] = useState('');  // Add availableSpace state
// //     const [contact, setContact] = useState('');  // Add contact state
// //     const [isSubmitting, setIsSubmitting] = useState(false);  // Track submit state

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();  // Prevent the default form submission
// //         setIsSubmitting(true);  // Set the submit state to true

// //         try {
// //             const response = await fetch('http://localhost:5000/api/shelter/add', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify({ name, location, capacity, availableSpace, contact }), // Include all fields
// //             });

// //             if (!response.ok) {
// //                 throw new Error('Failed to add shelter');
// //             }

// //             const result = await response.json();
// //             console.log('Shelter added:', result);
// //             alert('Shelter added successfully!');
            
// //             // Optionally reset the form fields
// //             setName('');
// //             setLocation('');
// //             setCapacity('');
// //             setAvailableSpace('');
// //             setContact('');
// //         } catch (err) {
// //             console.error('Error during submission:', err);
// //             alert('Error during submission. Please try again later.');
// //         } finally {
// //             setIsSubmitting(false);  // Reset the submit state
// //         }
// //     };

// //     return (
// //         <div style={styles.container}>
// //             <div style={styles.formContainer}>
// //                 <h2 style={styles.title}>Post Shelter</h2>
// //                 <form onSubmit={handleSubmit} style={styles.form}>
// //                     <label style={styles.label}>
// //                         Shelter Name:
// //                         <input
// //                             type="text"
// //                             value={name}
// //                             onChange={(e) => setName(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <label style={styles.label}>
// //                         Location:
// //                         <input
// //                             type="text"
// //                             value={location}
// //                             onChange={(e) => setLocation(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <label style={styles.label}>
// //                         Capacity:
// //                         <input
// //                             type="number"
// //                             value={capacity}
// //                             onChange={(e) => setCapacity(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <label style={styles.label}>
// //                         Available Space:
// //                         <input
// //                             type="number"
// //                             value={availableSpace}
// //                             onChange={(e) => setAvailableSpace(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <label style={styles.label}>
// //                         Contact:
// //                         <input
// //                             type="text"
// //                             value={contact}
// //                             onChange={(e) => setContact(e.target.value)}
// //                             style={styles.input}
// //                         />
// //                     </label>
// //                     <button
// //                         type="submit"
// //                         style={styles.submitButton}
// //                         disabled={isSubmitting || !name || !location || !capacity || !availableSpace || !contact}  // Disable if any field is empty
// //                     >
// //                         {isSubmitting ? 'Submitting...' : 'Submit'}
// //                     </button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // const styles = {
// //     container: {
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         height: '100vh',
// //         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //         padding: '20px',
// //     },
// //     formContainer: {
// //         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
// //         padding: '30px',
// //         borderRadius: '10px',
// //         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
// //         width: '100%',
// //         maxWidth: '600px',
// //     },
// //     title: {
// //         textAlign: 'center',
// //         fontSize: '24px',
// //         marginBottom: '20px',
// //         color: '#333',
// //     },
// //     form: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: '15px',
// //     },
// //     label: {
// //         fontSize: '16px',
// //         color: '#333',
// //     },
// //     input: {
// //         padding: '12px',
// //         marginTop: '5px',
// //         fontSize: '14px',
// //         borderRadius: '5px',
// //         border: '1px solid #ccc',
// //         backgroundColor: '#f9f9f9',
// //         width: '100%',
// //         boxSizing: 'border-box',
// //     },
// //     submitButton: {
// //         padding: '12px',
// //         fontSize: '16px',
// //         backgroundColor: '#4CAF50',
// //         color: 'white',
// //         border: 'none',
// //         borderRadius: '5px',
// //         cursor: 'pointer',
// //         transition: 'background-color 0.3s',
// //     },
// // };

// // export default PostShelter;

// import React, { useState } from 'react';

// const PostShelter = () => {
//     const [name, setName] = useState('');
//     const [location, setLocation] = useState('');
//     const [capacity, setCapacity] = useState('');
//     const [availableSpace, setAvailableSpace] = useState('');
//     const [contact, setContact] = useState('');
//     const [image, setImage] = useState(null);  // Add image state
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     const handleImageChange = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         // Create a new FormData object to send the file along with other form data
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('location', location);
//         formData.append('capacity', capacity);
//         formData.append('availableSpace', availableSpace);
//         formData.append('contact', contact);
//         formData.append('coordinates', JSON.stringify({ latitude: 0, longitude: 0 }));  // Adjust based on actual input or leave as placeholders
//         if (image) {
//             formData.append('image', image);  // Append the selected file if there is one
//         }

//         try {
//             const response = await fetch('http://localhost:5000/api/shelter/add', {
//                 method: 'POST',
//                 body: formData, // Send the FormData object
//             });

//             if (!response.ok) {
//                 throw new Error('Failed to add shelter');
//             }

//             const result = await response.json();
//             console.log('Shelter added:', result);
//             alert('Shelter added successfully!');
            
//             // Optionally reset the form fields
//             setName('');
//             setLocation('');
//             setCapacity('');
//             setAvailableSpace('');
//             setContact('');
//             setImage(null);  // Reset the image field
//         } catch (err) {
//             console.error('Error during submission:', err);
//             alert('Error during submission. Please try again later.');
//         } finally {
//             setIsSubmitting(false);  // Reset the submit state
//         }
//     };

//     return (
//         <div style={styles.container}>
//             <div style={styles.formContainer}>
//                 <h2 style={styles.title}>Post Shelter</h2>
//                 <form onSubmit={handleSubmit} style={styles.form}>
//                     <label style={styles.label}>
//                         Shelter Name:
//                         <input
//                             type="text"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Location:
//                         <input
//                             type="text"
//                             value={location}
//                             onChange={(e) => setLocation(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Capacity:
//                         <input
//                             type="number"
//                             value={capacity}
//                             onChange={(e) => setCapacity(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Available Space:
//                         <input
//                             type="number"
//                             value={availableSpace}
//                             onChange={(e) => setAvailableSpace(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Contact:
//                         <input
//                             type="text"
//                             value={contact}
//                             onChange={(e) => setContact(e.target.value)}
//                             style={styles.input}
//                         />
//                     </label>
//                     <label style={styles.label}>
//                         Upload Image:
//                         <input
//                             type="file"
//                             onChange={handleImageChange}
//                             style={styles.input}
//                         />
//                     </label>
//                     <button
//                         type="submit"
//                         style={styles.submitButton}
//                         disabled={isSubmitting || !name || !location || !capacity || !availableSpace || !contact}  // Disable if any field is empty
//                     >
//                         {isSubmitting ? 'Submitting...' : 'Submit'}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '100vh',
//         backgroundImage: 'url("https://img.freepik.com/free-vector/abstract-soft-colorful-watercolor-texture-background-design_1055-13589.jpg?semt=ais_hybrid")', // Replace with your background image URL
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         padding: '20px',
//     },
//     formContainer: {
//         backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent background
//         padding: '30px',
//         borderRadius: '10px',
//         boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
//         width: '100%',
//         maxWidth: '600px',
//     },
//     title: {
//         textAlign: 'center',
//         fontSize: '24px',
//         marginBottom: '20px',
//         color: '#333',
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '15px',
//     },
//     label: {
//         fontSize: '16px',
//         color: '#333',
//     },
//     input: {
//         padding: '12px',
//         marginTop: '5px',
//         fontSize: '14px',
//         borderRadius: '5px',
//         border: '1px solid #ccc',
//         backgroundColor: '#f9f9f9',
//         width: '100%',
//         boxSizing: 'border-box',
//     },
//     submitButton: {
//         padding: '12px',
//         fontSize: '16px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '5px',
//         cursor: 'pointer',
//         transition: 'background-color 0.3s',
//     },
// };

// export default PostShelter;

// 
import React, { useState } from 'react';

const PostShelter = () => {
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [capacity, setCapacity] = useState('');
    const [availableSpace, setAvailableSpace] = useState('');
    const [contact, setContact] = useState('');
    const [latitude, setLatitude] = useState(''); // New state for latitude
    const [longitude, setLongitude] = useState(''); // New state for longitude
    const [image, setImage] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        const formData = new FormData();
        formData.append('name', name);
        formData.append('location', location);
        formData.append('capacity', capacity);
        formData.append('availableSpace', availableSpace);
        formData.append('contact', contact);
        formData.append('latitude', latitude);  // Append latitude
        formData.append('longitude', longitude); // Append longitude
        if (image) formData.append('image', image); // Append image if selected

        try {
            const response = await fetch('http://localhost:5000/api/shelter/add', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to add shelter');
            }

            const result = await response.json();
            console.log('Shelter added:', result);
            alert('Shelter added successfully!');

            // Optionally reset the form fields
            setName('');
            setLocation('');
            setCapacity('');
            setAvailableSpace('');
            setContact('');
            setLatitude('');
            setLongitude('');
            setImage(null);
        } catch (err) {
            console.error('Error during submission:', err);
            setError('Error during submission. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formContainer}>
                <h2 style={styles.title}>Post Shelter</h2>
                {error && <p style={styles.error}>{error}</p>}
                <form onSubmit={handleSubmit} style={styles.form}>
                    <label style={styles.label}>
                        Shelter Name:
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Location:
                        <input
                            type="text"
                            value={location}
                            onChange={(e) => setLocation(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Capacity:
                        <input
                            type="number"
                            value={capacity}
                            onChange={(e) => setCapacity(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Available Space:
                        <input
                            type="number"
                            value={availableSpace}
                            onChange={(e) => setAvailableSpace(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Contact:
                        <input
                            type="text"
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Latitude:
                        <input
                            type="number"
                            value={latitude}
                            onChange={(e) => setLatitude(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Longitude:
                        <input
                            type="number"
                            value={longitude}
                            onChange={(e) => setLongitude(e.target.value)}
                            style={styles.input}
                        />
                    </label>
                    <label style={styles.label}>
                        Image:
                        <input
                            type="file"
                            onChange={(e) => setImage(e.target.files[0])}
                            style={styles.input}
                        />
                    </label>
                    <button
                        type="submit"
                        style={styles.submitButton}
                        disabled={isSubmitting || !name || !location || !capacity || !availableSpace || !contact || !latitude || !longitude}
                    >
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
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
    formContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
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
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
    },
    label: {
        fontSize: '16px',
        color: '#333',
    },
    input: {
        padding: '12px',
        marginTop: '5px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        backgroundColor: '#f9f9f9',
        width: '100%',
        boxSizing: 'border-box',
    },
    submitButton: {
        padding: '12px',
        fontSize: '16px',
        backgroundColor: '#4CAF50',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
    error: {
        color: 'red',
        fontSize: '14px',
        textAlign: 'center',
        marginBottom: '10px',
    },
};

export default PostShelter;
