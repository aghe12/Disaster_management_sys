// // import React from "react";

// // const Signup = () => {
// //     const containerStyle = {
// //         display: "flex",
// //         justifyContent: "center",
// //         alignItems: "center",
// //         height: "100vh",
// //         backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Signup+Background')",
// //         backgroundSize: "cover",
// //         backgroundPosition: "center",
// //         backgroundRepeat: "no-repeat",
// //         position: "relative",
// //     };

// //     const overlayStyle = {
// //         position: "absolute",
// //         top: 0,
// //         left: 0,
// //         width: "100%",
// //         height: "100%",
// //         backgroundColor: "rgba(0, 0, 0, 0.6)",
// //         zIndex: 1,
// //     };

// //     const formContainerStyle = {
// //         zIndex: 2,
// //         backgroundColor: "white",
// //         padding: "2rem",
// //         borderRadius: "10px",
// //         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
// //         textAlign: "center",
// //         width: "400px",
// //     };

// //     const titleStyle = {
// //         fontSize: "2rem",
// //         fontWeight: "bold",
// //         color: "#333",
// //         marginBottom: "1rem",
// //     };

// //     const inputStyle = {
// //         width: "100%",
// //         padding: "0.8rem",
// //         margin: "0.8rem 0",
// //         border: "1px solid #ccc",
// //         borderRadius: "5px",
// //         fontSize: "1rem",
// //         outline: "none",
// //         boxSizing: "border-box",
// //     };

// //     const buttonStyle = {
// //         width: "100%",
// //         padding: "0.8rem",
// //         backgroundColor: "#4CAF50",
// //         color: "white",
// //         border: "none",
// //         borderRadius: "5px",
// //         fontSize: "1rem",
// //         fontWeight: "bold",
// //         cursor: "pointer",
// //         transition: "background-color 0.3s",
// //     };

// //     const buttonHoverStyle = {
// //         backgroundColor: "#45a049",
// //     };

// //     const linkStyle = {
// //         display: "block",
// //         marginTop: "1rem",
// //         color: "#4CAF50",
// //         textDecoration: "none",
// //         fontWeight: "bold",
// //     };

// //     return (
// //         <div style={containerStyle}>
// //             <div style={overlayStyle}></div>
// //             <div style={formContainerStyle}>
// //                 <h2 style={titleStyle}>Sign Up</h2>
// //                 <form>
// //                     <input type="text" placeholder="Full Name" style={inputStyle} />
// //                     <input type="email" placeholder="Email Address" style={inputStyle} />
// //                     <input type="password" placeholder="Password" style={inputStyle} />
// //                     <input type="password" placeholder="Confirm Password" style={inputStyle} />
// //                     <button
// //                         type="submit"
// //                         style={buttonStyle}
// //                         onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
// //                         onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
// //                     >
// //                         Create Account
// //                     </button>
// //                 </form>
// //                 <a href="/login" style={linkStyle}>
// //                     Already have an account? Login
// //                 </a>
// //             </div>
// //         </div>
// //     );
// // };

// // export default Signup;
// import React, { useState } from "react";
// import axios from "axios";

// const Signup = () => {
//     const containerStyle = {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         height: "100vh",
//         backgroundImage: "url('https://via.placeholder.com/1920x1080?text=Signup+Background')",
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//         backgroundRepeat: "no-repeat",
//         position: "relative",
//     };

//     const overlayStyle = {
//         position: "absolute",
//         top: 0,
//         left: 0,
//         width: "100%",
//         height: "100%",
//         backgroundColor: "rgba(0, 0, 0, 0.6)",
//         zIndex: 1,
//     };

//     const formContainerStyle = {
//         zIndex: 2,
//         backgroundColor: "white",
//         padding: "2rem",
//         borderRadius: "10px",
//         boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
//         textAlign: "center",
//         width: "400px",
//     };

//     const titleStyle = {
//         fontSize: "2rem",
//         fontWeight: "bold",
//         color: "#333",
//         marginBottom: "1rem",
//     };

//     const inputStyle = {
//         width: "100%",
//         padding: "0.8rem",
//         margin: "0.8rem 0",
//         border: "1px solid #ccc",
//         borderRadius: "5px",
//         fontSize: "1rem",
//         outline: "none",
//         boxSizing: "border-box",
//     };

//     const buttonStyle = {
//         width: "100%",
//         padding: "0.8rem",
//         backgroundColor: "#4CAF50",
//         color: "white",
//         border: "none",
//         borderRadius: "5px",
//         fontSize: "1rem",
//         fontWeight: "bold",
//         cursor: "pointer",
//         transition: "background-color 0.3s",
//     };

//     const buttonHoverStyle = {
//         backgroundColor: "#45a049",
//     };

//     const linkStyle = {
//         display: "block",
//         marginTop: "1rem",
//         color: "#4CAF50",
//         textDecoration: "none",
//         fontWeight: "bold",
//     };

//     return (
//         <div style={containerStyle}>
//             <div style={overlayStyle}></div>
//             <div style={formContainerStyle}>
//                 <h2 style={titleStyle}>Sign Up</h2>
//                 <form>
//                     <input type="text" placeholder="Full Name" style={inputStyle} />
//                     <input type="email" placeholder="Email Address" style={inputStyle} />
//                     <input type="password" placeholder="Password" style={inputStyle} />
//                     <input type="password" placeholder="Confirm Password" style={inputStyle} />
//                     <button
//                         type="submit"
//                         style={buttonStyle}
//                         onMouseOver={(e) => (e.target.style.backgroundColor = buttonHoverStyle.backgroundColor)}
//                         onMouseOut={(e) => (e.target.style.backgroundColor = buttonStyle.backgroundColor)}
//                     >
//                         Create Account
//                     </button>
//                 </form>
//                 <a href="/login" style={linkStyle}>
//                     Already have an account? Login
//                 </a>
//             </div>
//         </div>
//     );
// };

// const AdminSignup = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/signup", {
//                 ...formData,
//                 userType: "admin",
//             });
//             alert(response.data.message);
//             setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form after submission
//         } catch (error) {
//             console.error(error);
//             alert("Signup failed");
//         }
//     };

//     return (
//       <div style={{ marginTop:'20px' }}>
//           <h2 style={{ textAlign:'center' }}>Admin Sign Up</h2>
//           <form onSubmit={handleSubmit}>
//               <input name="name" type="text" placeholder="Name" onChange={handleChange} style={inputStyle} />
//               <input name="email" type="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
//               <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} />
//               <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} style={inputStyle} />
//               <button type="submit" style={buttonStyle}>Sign Up</button>
//           </form>
//       </div>
//     );
// };

// const IntegratedSignup = () => {
//     return (
//       <>
//           <Signup />
//           <AdminSignup />
//       </>
//     );
// };

// export default IntegratedSignup;
import React, { useState } from "react";
import axios from "axios";

const inputStyle = {
    width: "100%",
    padding: "0.8rem",
    margin: "0.8rem 0",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "1rem",
    outline: "none",
    boxSizing: "border-box",
};

const buttonStyle = {
    width: "100%",
    padding: "0.8rem",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background-color 0.3s",
};

// const AdminSignup = () => {
//     const [formData, setFormData] = useState({
//         name: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
        
//         if (formData.password !== formData.confirmPassword) {
//             alert("Passwords do not match");
//             return;
//         }

//         try {
//             const response = await axios.post("http://localhost:5000/api/auth/signup", {
//                 ...formData,
//                 userType: "admin",
//             });
//             alert(response.data.message);
//             setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form after submission
//         } catch (error) {
//             console.error(error);
//             alert("Signup failed");
//         }
//     };
const AdminSignup = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/auth/signup", formData);
            alert(response.data.message);
            setFormData({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form after submission
        } catch (error) {
            console.error(error);
            alert("Signup failed: " + error.response.data.message);
        }
    };

    return (
      <div style={{ marginTop:'20px' }}>
          <h2 style={{ textAlign:'center' }}>Admin Sign Up</h2>
          <form onSubmit={handleSubmit}>
              <input name="name" type="text" placeholder="Name" onChange={handleChange} style={inputStyle} />
              <input name="email" type="email" placeholder="Email" onChange={handleChange} style={inputStyle} />
              <input name="password" type="password" placeholder="Password" onChange={handleChange} style={inputStyle} />
              <input name="confirmPassword" type="password" placeholder="Confirm Password" onChange={handleChange} style={inputStyle} />
              <button type="submit" style={buttonStyle}>Sign Up</button>
          </form>
      </div>
    );
};

export default AdminSignup;
