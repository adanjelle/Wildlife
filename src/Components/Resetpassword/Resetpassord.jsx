// import React, { useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";

// const ResetPassword = () => {
//   const { token } = useParams(); // Get token from URL
//   const navigate = useNavigate();
//   const [newPassword, setNewPassword] = useState("");
//   const [message, setMessage] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const handleResetPassword = async (e) => {
//     e.preventDefault();

//     if (newPassword.length < 6) {
//       setMessage("Password must be at least 6 characters long.");
//       return;
//     }

//     setIsLoading(true);
//     try {
//       const response = await fetch(`http://localhost:5002/reset-password/${token}`, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ new_password: newPassword }),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         setMessage("Password reset successful. Redirecting to login...");
//         setTimeout(() => navigate("/login"), 1000);
//       } else {
//         setMessage(data.message || "Failed to reset password.");
//       }
//     } catch (error) {
//       setMessage("An error occurred. Please try again.");
//     }
//     setIsLoading(false);
//   };

//   return (
//     <div>
//       <h2>Reset Password</h2>
//       <form onSubmit={handleResetPassword}>
//         <input
//           type="password"
//           placeholder="Enter new password"
//           value={newPassword}
//           onChange={(e) => setNewPassword(e.target.value)}
//           required
//         />
//         <button type="submit" disabled={isLoading}>
//           {isLoading ? "Resetting..." : "Reset Password"}
//         </button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default ResetPassword;
