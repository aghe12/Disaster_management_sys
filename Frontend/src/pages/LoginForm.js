// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate} from "react-router-dom";

// // // CSS Styles in JS (Inline Style)
// // const style = {
// //     /* General Reset */
// //     "*": {
// //         margin: 0,
// //         padding: 0,
// //         boxSizing: "border-box",
// //     },

// //     body: {
// //         fontFamily: "'Arial', sans-serif",
// //         height: "100vh",
// //         backgroundColor: "#f0f0f0",
// //         overflow: "hidden",
// //     },

// //     /* Full Screen Background Image */
// //     carousel: {
// //         position: "absolute",
// //         top: 0,
// //         left: 0,
// //         width: "100%",
// //         height: "100%",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundImage: "url('https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=')", // Add your background image link here
// //     },

// //     /* Login Form Container */
// //     loginContainer: {
// //         position: "absolute",
// //         top: "50%",
// //         left: "50%",
// //         transform: "translate(-50%, -50%)",
// //         backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
// //         padding: "40px",
// //         borderRadius: "10px",
// //         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
// //         width: "100%",
// //         maxWidth: "400px",
// //     },

// //     h1: {
// //         textAlign: "center",
// //         color: "#333",
// //         marginBottom: "20px",
// //         fontSize: "36px",
// //     },

// //     form: {
// //         display: "flex",
// //         flexDirection: "column",
// //     },

// //     label: {
// //         fontSize: "18px",
// //         marginBottom: "8px",
// //         color: "#333",
// //     },

// //     input: {
// //         padding: "10px",
// //         margin: "10px 0 20px",
// //         borderRadius: "5px",
// //         border: "1px solid #ddd",
// //         fontSize: "16px",
// //         outline: "none",
// //         transition: "border-color 0.3s",
// //     },

// //     button: {
// //         backgroundColor: "#0066cc",
// //         color: "white",
// //         fontSize: "18px",
// //         padding: "12px",
// //         borderRadius: "5px",
// //         border: "none",
// //         cursor: "pointer",
// //         transition: "background-color 0.3s",
// //     },

// //     buttonHover: {
// //         backgroundColor: "#004d99",
// //     },

// //     /* Responsive Design */
// //     "@media screen and (max-width: 480px)": {
// //         loginContainer: {
// //             padding: "20px",
// //             width: "80%",
// //         },

// //         h1: {
// //             fontSize: "28px",
// //         },

// //         label: {
// //             fontSize: "16px",
// //         },

// //         input: {
// //             fontSize: "14px",
// //         },

// //         button: {
// //             fontSize: "16px",
// //         },
// //     },
// // };

// // const LoginForm = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const history = useNavigate();  // Using React Router's useHistory hook

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             // Send login request to backend
// //             const response = await axios.post("http://localhost:5000/api/auth/login", {
// //                 email,
// //                 password
// //             });

// //             // Get the role from the response
// //             const { token, role } = response.data;

// //             // Store the token in localStorage or sessionStorage
// //             localStorage.setItem('authToken', token);

// //             // Redirect based on role
// //             if (role === 'admin') {
// //                 history.push('/admin-dashboard');
// //             } else if (role === 'volunteer') {
// //                 history.push('/volunteer-dashboard');
// //             } else {
// //                 history.push('/user-dashboard');
// //             }

// //         } catch (error) {
// //             console.error(error);
// //             alert(error.response ? error.response.data.message : "Login failed");
// //         }
// //     };
// //     return (
// //         <div style={style.carousel}>
// //             {/* Login Form Container */}
// //             <div style={style.loginContainer}>
// //                 <h1 style={style.h1}>Login</h1>
// //                 <form style={style.form}>
// //                     <label style={style.label}>
// //                         Email:
// //                         <input style={style.input} type="email" name="email" />
// //                     </label>
// //                     <label style={style.label}>
// //                         Password:
// //                         <input style={style.input} type="password" name="password" />
// //                     </label>
// //                     <button style={style.button} type="submit">Login</button>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginForm;






// // import React, { useState } from "react";
// // import axios from "axios";
// // import { useNavigate } from "react-router-dom";

// // // CSS Styles in JS (Inline Style)
// // const style = {
// //     /* General Reset */
// //     "*": {
// //         margin: 0,
// //         padding: 0,
// //         boxSizing: "border-box",
// //     },

// //     body: {
// //         fontFamily: "'Arial', sans-serif",
// //         height: "100vh",
// //         backgroundColor: "#f0f0f0",
// //         overflow: "hidden",
// //     },

// //     /* Full Screen Background Image */
// //     carousel: {
// //         position: "absolute",
// //         top: 0,
// //         left: 0,
// //         width: "100%",
// //         height: "100%",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundImage: "url('https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=')", // Add your background image link here
// //     },

// //     /* Login Form Container */
// //     loginContainer: {
// //         position: "absolute",
// //         top: "50%",
// //         left: "50%",
// //         transform: "translate(-50%, -50%)",
// //         backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
// //         padding: "40px",
// //         borderRadius: "10px",
// //         boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
// //         width: "100%",
// //         maxWidth: "400px",
// //     },

// //     h1: {
// //         textAlign: "center",
// //         color: "#333",
// //         marginBottom: "20px",
// //         fontSize: "36px",
// //     },

// //     form: {
// //         display: "flex",
// //         flexDirection: "column",
// //     },

// //     label: {
// //         fontSize: "18px",
// //         marginBottom: "8px",
// //         color: "#333",
// //     },

// //     input: {
// //         padding: "10px",
// //         margin: "10px 0 20px",
// //         borderRadius: "5px",
// //         border: "1px solid #ddd",
// //         fontSize: "16px",
// //         outline: "none",
// //         transition: "border-color 0.3s",
// //     },

// //     button: {
// //         backgroundColor: "#0066cc",
// //         color: "white",
// //         fontSize: "18px",
// //         padding: "12px",
// //         borderRadius: "5px",
// //         border: "none",
// //         cursor: "pointer",
// //         transition: "background-color 0.3s",
// //     },

// //     buttonHover: {
// //         backgroundColor: "#004d99",
// //     },

// //     /* Responsive Design */
// //     "@media screen and (max-width: 480px)": {
// //         loginContainer: {
// //             padding: "20px",
// //             width: "80%",
// //         },

// //         h1: {
// //             fontSize: "28px",
// //         },

// //         label: {
// //             fontSize: "16px",
// //         },

// //         input: {
// //             fontSize: "14px",
// //         },

// //         button: {
// //             fontSize: "16px",
// //         },
// //     },
// // };

// // const LoginForm = () => {
// //     const [email, setEmail] = useState('');
// //     const [password, setPassword] = useState('');
// //     const [error, setError] = useState('');  // To handle error messages
// //     const navigate = useNavigate();  // Using React Router's useNavigate hook

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         try {
// //             // Send login request to backend
// //             const response = await axios.post("http://localhost:5000/api/auth/login", {
// //                 email,
// //                 password
// //             });

// //             // Get the role from the response
// //             const { token, role } = response.data;

// //             // Store the token in localStorage or sessionStorage
// //             localStorage.setItem('authToken', token);

// //             // Redirect based on role
// //             if (role === 'admin') {
// //                 navigate('/admin-dashboard');
// //             } else if (role === 'volunteer') {
// //                 navigate('/volunteer-dashboard');
// //             } else {
// //                 navigate('/user-dashboard');
// //             }

// //         } catch (error) {
// //             console.error(error);
// //             setError(error.response ? error.response.data.message : "Login failed");  // Handle error messages
// //         }
// //     };

// //     return (
// //         <div style={style.carousel}>
// //             {/* Login Form Container */}
// //             <div style={style.loginContainer}>
// //                 <h1 style={style.h1}>Login</h1>
// //                 <form style={style.form} onSubmit={handleSubmit}>
// //                     <label style={style.label}>
// //                         Email:
// //                         <input
// //                             style={style.input}
// //                             type="email"
// //                             name="email"
// //                             value={email}
// //                             onChange={(e) => setEmail(e.target.value)}  // Bind email input to state
// //                             required
// //                         />
// //                     </label>
// //                     <label style={style.label}>
// //                         Password:
// //                         <input
// //                             style={style.input}
// //                             type="password"
// //                             name="password"
// //                             value={password}
// //                             onChange={(e) => setPassword(e.target.value)}  // Bind password input to state
// //                             required
// //                         />
// //                     </label>
// //                     <button style={style.button} type="submit">Login</button>
// //                 </form>
// //                 {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Display error message */}
// //             </div>
// //         </div>
// //     );
// // };

// // export default LoginForm;


// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const LoginForm = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [error, setError] = useState('');  // To handle error messages
//     const [isHovered, setIsHovered] = useState(false);
//     const navigate = useNavigate();  // Using React Router's useNavigate hook

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Send login request to backend
//             const response = await axios.post("http://localhost:5000/api/auth/login", {
//                 email,
//                 password
//             });

//             // Get the role from the response
//             const { token, role } = response.data;

//             // Store the token in localStorage or sessionStorage
//             localStorage.setItem('authToken', token);

//             // Redirect based on role
//             if (role === 'admin') {
//                 navigate('/admin-dashboard');
//             } else if (role === 'volunteer') {
//                 navigate('/volunteer-dashboard');
//             } else {
//                 navigate('/user-dashboard');
//             }

//         } catch (error) {
//             console.error(error);
//             setError(error.response ? error.response.data.message : "Login failed");  // Handle error messages
//         }
//     };

//     return (
//         <div style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//             backgroundImage: "url('https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=')"
//         }}>
//             {/* Login Form Container */}
//             <div style={{
//                 position: "absolute",
//                 top: "50%",
//                 left: "50%",
//                 transform: "translate(-50%, -50%)",
//                 backgroundColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent background
//                 padding: "40px",
//                 borderRadius: "10px",
//                 boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
//                 width: "100%",
//                 maxWidth: "400px",
//             }}>
//                 <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontSize: "36px" }}>Login</h1>
//                 <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
//                     <label style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
//                         Email:
//                         <input
//                             style={{
//                                 padding: "10px",
//                                 margin: "10px 0 20px",
//                                 borderRadius: "5px",
//                                 border: "1px solid #ddd",
//                                 fontSize: "16px",
//                                 outline: "none",
//                                 transition: "border-color 0.3s",
//                             }}
//                             type="email"
//                             name="email"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}  // Bind email input to state
//                             required
//                         />
//                     </label>
//                     <label style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
//                         Password:
//                         <input
//                             style={{
//                                 padding: "10px",
//                                 margin: "10px 0 20px",
//                                 borderRadius: "5px",
//                                 border: "1px solid #ddd",
//                                 fontSize: "16px",
//                                 outline: "none",
//                                 transition: "border-color 0.3s",
//                             }}
//                             type="password"
//                             name="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}  // Bind password input to state
//                             required
//                         />
//                     </label>
//                     <button
//                         style={isHovered ? { backgroundColor: "#004d99", color: "white", fontSize: "18px", padding: "12px", borderRadius: "5px", border: "none", cursor: "pointer" } : { backgroundColor: "#0066cc", color: "white", fontSize: "18px", padding: "12px", borderRadius: "5px", border: "none", cursor: "pointer" }}
//                         type="submit"
//                         onMouseEnter={() => setIsHovered(true)}
//                         onMouseLeave={() => setIsHovered(false)}
//                     >
//                         Login
//                     </button>
//                 </form>
//                 {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>} {/* Display error message */}
//             </div>
//         </div>
//     );
// };

// export default LoginForm;





import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(''); // Clear previous errors


        try {
            // Send login request to backend
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email,
                password,
            });

            // Extract role from the response
            const { userType,token } = response.data;
            localStorage.setItem('authToken', token);

            // Redirect based,tokrn,token on role
            if (userType === 'admin') {
                navigate('/admin/dashboard'); // Admin dashboard route
            } else if (userType === 'volunteer') {
                navigate('/volunteer/dashboard'); // Volunteer dashboard route
            }else if (userType === 'user') {
                    navigate('/user/dashboard'); // Volunteer dashboard route
            } else {
                setError('Unauthorized role');
            }
        } catch (error) {
            console.error(error);
            setError(error.response ? error.response.data.message : "Login failed");
        }
    };

    return (
        <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: "url('https://media.istockphoto.com/id/1263562386/photo/beautifully-structured-thunderstorm-in-bulgarian-plains.jpg?s=612x612&w=0&k=20&c=rwkwG1u0eWlOvOxy5GR8n5xNsQtzI-KutnZsQxTM3Ec=')"
        }}>
            {/* Login Form Container */}
            <div style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "40px",
                borderRadius: "10px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                width: "100%",
                maxWidth: "400px",
            }}>
                <h1 style={{ textAlign: "center", color: "#333", marginBottom: "20px", fontSize: "36px" }}>Login</h1>
                <form style={{ display: "flex", flexDirection: "column" }} onSubmit={handleSubmit}>
                    <label style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
                        Email:
                        <input
                            style={{
                                padding: "10px",
                                margin: "10px 0 20px",
                                borderRadius: "5px",
                                border: "1px solid #ddd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.3s",
                            }}
                            type="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </label>
                    <label style={{ fontSize: "18px", marginBottom: "8px", color: "#333" }}>
                        Password:
                        <input
                            style={{
                                padding: "10px",
                                margin: "10px 0 20px",
                                borderRadius: "5px",
                                border: "1px solid #ddd",
                                fontSize: "16px",
                                outline: "none",
                                transition: "border-color 0.3s",
                            }}
                            type="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </label>
                    <button
                        style={{
                            backgroundColor: "#0066cc",
                            color: "white",
                            fontSize: "18px",
                            padding: "12px",
                            borderRadius: "5px",
                            border: "none",
                            cursor: "pointer",
                        }}
                        type="submit"
                    >
                        Login
                    </button>
                </form>
                {error && <p style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>{error}</p>}
            </div>
        </div>
    );
};

export default LoginForm;

