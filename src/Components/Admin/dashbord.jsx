// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import './style.css';

// // import {
// //   LineChart,
// //   Line,
// //   XAxis,
// //   YAxis,
// //   Tooltip,
// //   CartesianGrid,
// //   ResponsiveContainer,
// //   BarChart,
// //   Bar,
// //   PieChart,
// //   Pie,
// //   Cell,
// // } from 'recharts';
// // import { FaHome, FaUsers, FaChartBar, FaCog, FaBars } from "react-icons/fa";
// //  import myProfile from "../../Components/images/imgere.jpg";
// // function AdminDashboard() {

// //     /**
// //  * StunningReactDashboard.jsx
// //  * A single-file React dashboard component using TailwindCSS and Recharts.
// //  * Requirements:
// //  *  - TailwindCSS configured in your project
// //  *  - `recharts` installed: npm install recharts
// //  *
// //  * Features:
// //  *  - Responsive sidebar + topbar layout
// //  *  - KPI cards
// //  *  - Line chart, Bar chart, Pie chart (Recharts)
// //  *  - Recent activity table
// //  *  - Lightweight, customizable, production-friendly structure
// //  *
// //  * Usage: import and render <StunningReactDashboard /> in your app.
// //  */

// // // import React, { useState } from 'react';
// // // import {
// // //   LineChart,
// // //   Line,
// // //   XAxis,
// // //   YAxis,
// // //   Tooltip,
// // //   CartesianGrid,
// // //   ResponsiveContainer,
// // //   BarChart,
// // //   Bar,
// // //   PieChart,
// // //   Pie,
// // //   Cell,
// // // } from 'recharts';




// //   // At the top of AdminDashboard.jsx

// //  // 👈 put your image inside src/assets


// //  // AdminDashboard.jsx


// //   const [isOpen, setIsOpen] = useState(true);
// //   const [active, setActive] = useState("Home");
// //   const [reports, setReports] = useState([]);
// //   const [editingReport, setEditingReport] = useState(null);
// //   const [editForm, setEditForm] = useState({});
// //   const username = "Adesh";

// //   const menuItems = [
// //     { name: "Home", icon: <FaHome /> },
// //     { name: "Users", icon: <FaUsers /> },
// //     { name: "Reports", icon: <FaChartBar /> },
// //     { name: "Settings", icon: <FaCog /> },
// //   ];
// // useEffect(() => {
// //     fetchReports();
// //   }, []);

// //   const fetchReports = () => {
// //     axios.get("http://localhost:5000/reports")
// //       .then(res => setReports(res.data))
// //       .catch(err => console.error("Error fetching reports:", err));
// //   };
// // const handleDelete = (id) => {
// //     if (window.confirm("Are you sure you want to delete this report?")) {
// //       axios.delete(`http://localhost:5000/reports/${id}`)
// //         .then(() => {
// //           setReports(reports.filter(r => r.id !== id));
// //           alert("Report deleted successfully");
// //         })
// //         .catch(err => alert("Failed to delete report"));
// //     }
// //   };
// //    const handleEditClick = (report) => {
// //     setEditingReport(report.id);
// //     setEditForm({ ...report });
// //   };

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setEditForm({ ...editForm, [name]: value });
// //   };

// //   const handleEditSubmit = () => {
// //     axios.put(`http://localhost:5000/reports/${editingReport}`, editForm)
// //       .then(res => {
// //         setReports(reports.map(r => r.id === editingReport ? res.data : r));
// //         setEditingReport(null);
// //         alert("Report updated successfully");
// //       })
// //       .catch(err => alert("Failed to update report"));
// //   };

// //   return (
// //     <div className="flex h-screen bg-gray-100">
// //       {/* Sidebar */}
// //       <div
// //         className={`${
// //           isOpen ? "w-64" : "w-20"
// //         } bg-gradient-to-b from-indigo-600 to-purple-600 text-white transition-all duration-300 flex flex-col`}
// //       >
// //         <div className="flex items-center justify-between p-4">
// //           <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>Admin</h1>
// //           <button onClick={() => setIsOpen(!isOpen)}>
// //             <FaBars size={20} />
// //           </button>
// //         </div>

// //         <nav className="flex-1">
// //           {menuItems.map((item) => (
// //             <div
// //               key={item.name}
// //               onClick={() => setActive(item.name)}
// //               className={`flex items-center gap-3 p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors ${
// //                 active === item.name
// //                   ? "bg-white text-indigo-600"
// //                   : "hover:bg-indigo-500"
// //               }`}
// //               title={!isOpen ? item.name : ""}
// //             >
// //               <span className="text-lg">{item.icon}</span>
// //               <span className={`${!isOpen && "hidden"} text-sm font-medium`}>
// //                 {item.name}
// //               </span>
// //             </div>
// //           ))}
// //         </nav>
// //       </div>

// //       {/* Main Content */}
// //       <div className="flex-1 flex flex-col">
// //         {/* Topbar */}
// //         <div className="flex items-center justify-between bg-white shadow px-6 py-3">
// //           <h2 className="text-2xl font-semibold">{active}</h2>
// //           <div className="flex items-center gap-3">
// //             <span className="font-medium text-gray-700">{username}</span>
// //             <img
// //               src={myProfile}
// //               alt="Profile"
// //               className="w-10 h-10 rounded-full border-2 border-indigo-600"
// //             />
// //           </div>
// //         </div>

// //         {/* Dynamic Page Content */}
// //         <div className="p-6 overflow-y-auto flex-1">
// //           {active === "Home" && <HomeContent />}
// //           {active === "Reports" && <ReportsContent />}
// //           {active === "Users" && <UsersContent />}
// //           {active === "Settings" && <SettingsContent />}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // // --------------------- Content Components ---------------------

// // function HomeContent() {
// //   return (
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h3 className="font-medium text-gray-600">Total Users</h3>
// //         <p className="text-2xl font-bold mt-2">1,234</p>
// //       </div>
// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h3 className="font-medium text-gray-600">Reports</h3>
// //         <p className="text-2xl font-bold mt-2">89</p>
// //       </div>
// //       <div className="bg-white p-6 rounded-xl shadow">
// //         <h3 className="font-medium text-gray-600">Revenue</h3>
// //         <p className="text-2xl font-bold mt-2">$12,345</p>
// //       </div>
// //     </div>
// //   );
// // }

// // function ReportsContent() {
// //   const [reports, setReports] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     axios.get("http://localhost:5000/reports")
// //       .then(res => {
// //         setReports(res.data);
// //         setLoading(false);
// //       })
// //       .catch(err => {
// //         console.error("Error fetching reports:", err);
// //         setLoading(false);
// //       });
// //   }, []);

// //   if (loading) return <p>Loading reports...</p>;

// //   return (
// // //     <div className="bg-white p-6 rounded-xl shadow">
// // //       <h3 className="text-xl font-semibold mb-4">Reports</h3>
// // //       <table className="w-full border-collapse border border-gray-200">
// // //         <thead>
// // //           <tr className="bg-gray-100">
// // //             <th className="p-2 border">ID</th>
// // //             <th className="p-2 border">Animal Type</th>
// // //             <th className="p-2 border">Description</th>
// // //             <th className="p-2 border">Sender</th>
// // //             <th className="p-2 border">Image</th>
// // //           </tr>
// // //         </thead>
// // //         <tbody>
// // //           {reports.map((r) => (
// // //             <tr key={r.id}>
// // //               <td className="p-2 border">{r.id}</td>
// // //               <td className="p-2 border">{r.animal_type}</td>
// // //               <td className="p-2 border">{r.damage_description}</td>
// // //               <td className="p-2 border">{r.sender_name}</td>
// // //               <td className="p-2 border">
// // //                 {r.image_path ? (
// // //                   <img
// // //                     src={`http://localhost:5000/${r.image_path}`}
// // //                     alt="Report"
// // //                     className="w-16 h-16 object-cover rounded"
// // //                   />
// // //                 ) : (
// // //                   "No Image"
// // //                 )}
// // //               </td>
// // //             </tr>
// // //           ))}
// // //         </tbody>
// // //       </table>
// // //     </div>
// // //   );
// // // }
// // <div className="bg-white p-6 rounded-xl shadow mt-6">
// //       <h2 className="text-xl font-bold mb-4">Reports</h2>
// //       <table className="w-full text-left border">
// //         <thead className="bg-gray-200">
// //           <tr>
// //             <th className="p-2">ID</th>
// //             <th className="p-2">Animal</th>
// //             <th className="p-2">Description</th>
// //             <th className="p-2">Sender</th>
// //             <th className="p-2">Actions</th>
// //           </tr>
// //         </thead>
// //         <tbody>
// //           {reports.map((report) => (
// //             <tr key={report.id} className="border-t">
// //               <td className="p-2">{report.id}</td>
// //               <td className="p-2">
// //                 {editingReport === report.id ? (
// //                   <input
// //                     name="animal_type"
// //                     value={editForm.animal_type || ""}
// //                     onChange={handleInputChange}
// //                     className="border p-1"
// //                   />
// //                 ) : (
// //                   report.animal_type
// //                 )}
// //               </td>
// //               <td className="p-2">
// //                 {editingReport === report.id ? (
// //                   <textarea
// //                     name="damage_description"
// //                     value={editForm.damage_description || ""}
// //                     onChange={handleInputChange}
// //                     className="border p-1"
// //                   />
// //                 ) : (
// //                   report.damage_description
// //                 )}
// //               </td>
// //               <td className="p-2">
// //                 {editingReport === report.id ? (
// //                   <input
// //                     name="sender_name"
// //                     value={editForm.sender_name || ""}
// //                     onChange={handleInputChange}
// //                     className="border p-1"
// //                   />
// //                 ) : (
// //                   report.sender_name
// //                 )}
// //               </td>
// //               <td className="p-2 flex gap-2">
// //                 {editingReport === report.id ? (
// //                   <>
// //                     <button
// //                       onClick={handleEditSubmit}
// //                       className="px-2 py-1 bg-green-500 text-white rounded"
// //                     >
// //                       Save
// //                     </button>
// //                     <button
// //                       onClick={() => setEditingReport(null)}
// //                       className="px-2 py-1 bg-gray-400 text-white rounded"
// //                     >
// //                       Cancel
// //                     </button>
// //                   </>
// //                 ) : (
// //                   <>
// //                     <button
// //                       onClick={() => handleEditClick(report)}
// //                       className="px-2 py-1 bg-blue-500 text-white rounded"
// //                     >
// //                       Edit
// //                     </button>
// //                     <button
// //                       onClick={() => handleDelete(report.id)}
// //                       className="px-2 py-1 bg-red-500 text-white rounded"
// //                     >
// //                       Delete
// //                     </button>
// //                   </>
// //                 )}
// //               </td>
// //             </tr>
// //           ))}
// //         </tbody>
// //       </table>
// //     </div>
// //   );
// // }


// // function UsersContent() {
// //   return <p>Users data will go here...</p>;
// // }

// // function SettingsContent() {
// //   return <p>Settings options will go here...</p>;
// // }









// // //     const [reports, setReports] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);
// // //     const [editingReport, setEditingReport] = useState(null); // Store the report being edited
// // //     const [editForm, setEditForm] = useState({}); // Form state for editing

// // //     useEffect(() => {
// // //         axios.get('http://localhost:5000/reports')
// // //             .then(response => {
// // //                 setReports(response.data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(error => {
// // //                 console.error('Error fetching reports:', error);
// // //                 setError('Failed to load reports');
// // //                 setLoading(false);
// // //             });
// // //     }, []);

// // //     // Handle delete action
// // //     const handleDelete = (id, imagePath) => {
// // //         if (window.confirm("Are you sure you want to delete this report?")) {
// // //             axios.delete(`http://localhost:5000/reports/${id}`, { data: { image_path: imagePath } })
// // //                 .then(() => {
// // //                     setReports(reports.filter(report => report.id !== id));
// // //                     alert('Report deleted successfully');
// // //                 })
// // //                 .catch(error => {
// // //                     console.error('Error deleting report:', error);
// // //                     alert('Failed to delete report');
// // //                 });
// // //         }
// // //     };

// // //     // Handle edit action
// // //     const handleEditClick = (report) => {
// // //         setEditingReport(report); // Set the current report for editing
// // //         setEditForm({ ...report }); // Initialize the edit form with current report details
// // //     };

// // //     const handleInputChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setEditForm({ ...editForm, [name]: value });
// // //     };

// // //     const handleEditSubmit = () => {
// // //         axios.put(`http://localhost:5000/reports/${editingReport.id}`, editForm)
// // //             .then(response => {
// // //                 // Update the report list with the edited report
// // //                 setReports(reports.map(report =>
// // //                     report.id === editingReport.id ? response.data : report
// // //                 ));
// // //                 setEditingReport(null); // Close the modal
// // //                 alert('Report updated successfully');
// // //             })
// // //             .catch(error => {
// // //                 console.error('Error updating report:', error);
// // //                 alert('Failed to update report');
// // //             });
// // //     };

// // //     if (loading) {
// // //         return <div>Loading...</div>;
// // //     }

// // //     if (error) {
// // //         return <div>{error}</div>;
// // //     }

// // //     return (
// // //         <div className="table-container">
// // //             <h1>Admin Dashboard</h1>
// // //             <table className="reports-table">
// // //                 <thead>
// // //                     <tr>
// // //                         <th>ID</th>
// // //                         <th>Animal Type</th>
// // //                         <th>Description</th>
// // //                         <th>Sender Name</th>
// // //                         <th>Image</th>
// // //                         <th>Actions</th>
// // //                     </tr>
// // //                 </thead>
// // //                 <tbody>
// // //                     {reports.map(report => (
// // //                         <tr key={report.id}>
// // //                             <td>{report.id}</td>
// // //                             <td>{report.animal_type}</td>
// // //                             <td>{report.damage_description}</td>
// // //                             <td>{report.sender_name}</td>
// // //                             <td>
// // //                                 {report.image_path ? (
// // //                                     <img src={`http://localhost:5000/${report.image_path}`} alt="Report" className="report-image" />
// // //                                 ) : (
// // //                                     <span>No Image</span>
// // //                                 )}
// // //                             </td>
// // //                             <td>
// // //                                 <button onClick={() => handleEditClick(report)} className="edit-btn">Edit</button>
// // //                                 <button onClick={() => handleDelete(report.id, report.image_path)} className="delete-btn">Delete</button>
// // //                             </td>
// // //                         </tr>
// // //                     ))}
// // //                 </tbody>
// // //             </table>

// // //             {/* Edit Modal */}
// // //             {editingReport && (
// // //     <div className="modal">
// // //         <div className="modal-content">
// // //             <h2>Edit Report</h2>
// // //             <form className="edit-form">
// // //                 <label>
// // //                     <span>Animal Type</span>
// // //                     <input
// // //                         type="text"
// // //                         name="animal_type"
// // //                         value={editForm.animal_type || ''}
// // //                         onChange={handleInputChange}
// // //                         className="form-input"
// // //                         placeholder="Enter animal type"
// // //                     />
// // //                 </label>
// // //                 <label>
// // //                     <span>Description</span>
// // //                     <textarea
// // //                         name="damage_description"
// // //                         value={editForm.damage_description || ''}
// // //                         onChange={handleInputChange}
// // //                         className="form-textarea"
// // //                         placeholder="Enter damage description"
// // //                     ></textarea>
// // //                 </label>
// // //                 <label>
// // //                     <span>Sender Name</span>
// // //                     <input
// // //                         type="text"
// // //                         name="sender_name"
// // //                         value={editForm.sender_name || ''}
// // //                         onChange={handleInputChange}
// // //                         className="form-input"
// // //                         placeholder="Enter sender name"
// // //                     />
// // //                 </label>
// // //                 <div className="modal-actions">
// // //                     <button type="button" onClick={handleEditSubmit} className="save-btn">
// // //                         Save Changes
// // //                     </button>
// // //                     <button type="button" onClick={() => setEditingReport(null)} className="cancel-btn">
// // //                         Cancel
// // //                     </button>
// // //                 </div>
// // //             </form>
// // //         </div>
// // //     </div>
// // // )}

// // //         </div>
// // //     );


// // export default AdminDashboard;
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   FaHome,
//   FaUsers,
//   FaChartBar,
//   FaCog,
//   FaBars
// } from "react-icons/fa";
// import myProfile from "../../Components/images/imgere.jpg";

// // ---------------- Main Component ----------------
// function AdminDashboard() {
//   const [isOpen, setIsOpen] = useState(true);
//   const [active, setActive] = useState("Home");
//   const username = "Adesh";

//   const menuItems = [
//     { name: "Home", icon: <FaHome /> },
//     { name: "Users", icon: <FaUsers /> },
//     { name: "Reports", icon: <FaChartBar /> },
//     { name: "Settings", icon: <FaCog /> },
//   ];

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <div
//         className={`${
//           isOpen ? "w-64" : "w-20"
//         } bg-gradient-to-b from-indigo-600 to-purple-600 text-white transition-all duration-300 flex flex-col`}
//       >
//         <div className="flex items-center justify-between p-4">
//           <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>
//             Admin
//           </h1>
//           <button onClick={() => setIsOpen(!isOpen)}>
//             <FaBars size={20} />
//           </button>
//         </div>

//         <nav className="flex-1">
//           {menuItems.map((item) => (
//             <div
//               key={item.name}
//               onClick={() => setActive(item.name)}
//               className={`flex items-center gap-3 p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors ${
//                 active === item.name
//                   ? "bg-white text-indigo-600"
//                   : "hover:bg-indigo-500"
//               }`}
//               title={!isOpen ? item.name : ""}
//             >
//               <span className="text-lg">{item.icon}</span>
//               <span
//                 className={`${!isOpen && "hidden"} text-sm font-medium`}
//               >
//                 {item.name}
//               </span>
//             </div>
//           ))}
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 flex flex-col">
//         {/* Topbar */}
//         <div className="flex items-center justify-between bg-white shadow px-6 py-3">
//           <h2 className="text-2xl font-semibold">{active}</h2>
//           <div className="flex items-center gap-3">
//             <span className="font-medium text-gray-700">{username}</span>
//             <img
//               src={myProfile}
//               alt="Profile"
//               className="w-10 h-10 rounded-full border-2 border-indigo-600"
//             />
//           </div>
//         </div>

//         {/* Dynamic Page Content */}
//         <div className="p-6 overflow-y-auto flex-1">
//           {active === "Home" && <HomeContent />}
//           {active === "Reports" && <ReportsContent />}
//           {active === "Users" && <UsersContent />}
//           {active === "Settings" && <SettingsContent />}
//         </div>
//       </div>
//     </div>
//   );
// }

// // ---------------- Content Components ----------------
// function HomeContent() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//       <div className="bg-white p-6 rounded-xl shadow">
//         <h3 className="font-medium text-gray-600">Total Users</h3>
//         <p className="text-2xl font-bold mt-2">1,234</p>
//       </div>
//       <div className="bg-white p-6 rounded-xl shadow">
//         <h3 className="font-medium text-gray-600">Reports</h3>
//         <p className="text-2xl font-bold mt-2">89</p>
//       </div>
//       <div className="bg-white p-6 rounded-xl shadow">
//         <h3 className="font-medium text-gray-600">Revenue</h3>
//         <p className="text-2xl font-bold mt-2">$12,345</p>
//       </div>
//     </div>
//   );
// }

// function ReportsContent() {
//   const [reports, setReports] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [editingReport, setEditingReport] = useState(null);
//   const [editForm, setEditForm] = useState({});
//   const [newReport, setNewReport] = useState({
//     animal_type: "",
//     damage_description: "",
//     sender_name: "",
//   });

//   useEffect(() => {
//     fetchReports();
//   }, []);

//   const fetchReports = () => {
//     axios
//       .get("http://localhost:5000/reports")
//       .then((res) => {
//         setReports(res.data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching reports:", err);
//         setLoading(false);
//       });
//   };

//   // Add Report
//   const handleAdd = () => {
//     axios
//       .post("http://localhost:5000/reports", newReport)
//       .then((res) => {
//         setReports([...reports, res.data]);
//         setNewReport({ animal_type: "", damage_description: "", sender_name: "" });
//         alert("Report added successfully");
//       })
//       .catch((err) => alert("Failed to add report"));
//   };

//   // Delete Report
//   const handleDelete = (id) => {
//     if (window.confirm("Are you sure you want to delete this report?")) {
//       axios
//         .delete(`http://localhost:5000/reports/${id}`)
//         .then(() => {
//           setReports(reports.filter((r) => r.id !== id));
//           alert("Report deleted successfully");
//         })
//         .catch((err) => alert("Failed to delete report"));
//     }
//   };

//   // Edit Report
//   const handleEditClick = (report) => {
//     setEditingReport(report.id);
//     setEditForm({ ...report });
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setEditForm({ ...editForm, [name]: value });
//   };

//   const handleEditSubmit = () => {
//     axios
//       .put(`http://localhost:5000/reports/${editingReport}`, editForm)
//       .then((res) => {
//         setReports(
//           reports.map((r) => (r.id === editingReport ? res.data : r))
//         );
//         setEditingReport(null);
//         alert("Report updated successfully");
//       })
//       .catch((err) => alert("Failed to update report"));
//   };

//   if (loading) return <p>Loading reports...</p>;

//   return (
//     <div className="bg-white p-6 rounded-xl shadow mt-6">
//       <h2 className="text-xl font-bold mb-4">Reports</h2>

//       {/* Add Report Form */}
//       <div className="mb-4 flex gap-2">
//         <input
//           type="text"
//           name="animal_type"
//           placeholder="Animal Type"
//           value={newReport.animal_type}
//           onChange={(e) =>
//             setNewReport({ ...newReport, animal_type: e.target.value })
//           }
//           className="border p-2 rounded w-1/4"
//         />
//         <input
//           type="text"
//           name="damage_description"
//           placeholder="Description"
//           value={newReport.damage_description}
//           onChange={(e) =>
//             setNewReport({
//               ...newReport,
//               damage_description: e.target.value,
//             })
//           }
//           className="border p-2 rounded w-1/3"
//         />
//         <input
//           type="text"
//           name="sender_name"
//           placeholder="Sender"
//           value={newReport.sender_name}
//           onChange={(e) =>
//             setNewReport({ ...newReport, sender_name: e.target.value })
//           }
//           className="border p-2 rounded w-1/4"
//         />
//         <button
//           onClick={handleAdd}
//           className="px-4 py-2 bg-green-500 text-white rounded"
//         >
//           Add
//         </button>
//       </div>

//       {/* Reports Table */}
//       <table className="w-full text-left border">
//         <thead className="bg-gray-200">
//           <tr>
//             <th className="p-2">ID</th>
//             <th className="p-2">Animal</th>
//             <th className="p-2">Description</th>
//             <th className="p-2">Sender</th>
//             <th className="p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {reports.map((report) => (
//             <tr key={report.id} className="border-t">
//               <td className="p-2">{report.id}</td>
//               <td className="p-2">
//                 {editingReport === report.id ? (
//                   <input
//                     name="animal_type"
//                     value={editForm.animal_type || ""}
//                     onChange={handleInputChange}
//                     className="border p-1"
//                   />
//                 ) : (
//                   report.animal_type
//                 )}
//               </td>
//               <td className="p-2">
//                 {editingReport === report.id ? (
//                   <textarea
//                     name="damage_description"
//                     value={editForm.damage_description || ""}
//                     onChange={handleInputChange}
//                     className="border p-1"
//                   />
//                 ) : (
//                   report.damage_description
//                 )}
//               </td>
//               <td className="p-2">
//                 {editingReport === report.id ? (
//                   <input
//                     name="sender_name"
//                     value={editForm.sender_name || ""}
//                     onChange={handleInputChange}
//                     className="border p-1"
//                   />
//                 ) : (
//                   report.sender_name
//                 )}
//               </td>
//               <td className="p-2 flex gap-2">
//                 {editingReport === report.id ? (
//                   <>
//                     <button
//                       onClick={handleEditSubmit}
//                       className="px-2 py-1 bg-green-500 text-white rounded"
//                     >
//                       Save
//                     </button>
//                     <button
//                       onClick={() => setEditingReport(null)}
//                       className="px-2 py-1 bg-gray-400 text-white rounded"
//                     >
//                       Cancel
//                     </button>
//                   </>
//                 ) : (
//                   <>
//                     <button
//                       onClick={() => handleEditClick(report)}
//                       className="px-2 py-1 bg-blue-500 text-white rounded"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       onClick={() => handleDelete(report.id)}
//                       className="px-2 py-1 bg-red-500 text-white rounded"
//                     >
//                       Delete
//                     </button>
//                   </>
//                 )}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// function UsersContent() {
//   return <p>Users data will go here...</p>;
// }

// function SettingsContent() {
//   return <p>Settings options will go here...</p>;
// }

// export default AdminDashboard;
// src/pages/AdminDashboard.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  FaHome,
  FaUsers,
  FaChartBar,
  FaCog,
  FaBars
} from "react-icons/fa";
import Profilee from "../Profilee/Profilee";
import myProfile from "../../Components/images/imgere.jpg";

// ---------------- Main Component ----------------
function AdminDashboard() {
  // ✅ Load last sidebar state & active tab from localStorage
  const [isOpen, setIsOpen] = useState(
    () => JSON.parse(localStorage.getItem("sidebarOpen")) ?? true
  );
  const [active, setActive] = useState(
    () => localStorage.getItem("activeTab") || "Home"
  );

  const username = "Adesh";

  const menuItems = [
    { name: "Home", icon: <FaHome /> },
    { name: "Users", icon: <FaUsers /> },
    { name: "Reports", icon: <FaChartBar /> },
    { name: "Settings", icon: <FaCog /> },
  ];

  // ✅ Save active tab when changed
  useEffect(() => {
    localStorage.setItem("activeTab", active);
  }, [active]);

  // ✅ Save sidebar state when changed
  useEffect(() => {
    localStorage.setItem("sidebarOpen", JSON.stringify(isOpen));
  }, [isOpen]);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "w-64" : "w-20"
        } bg-gradient-to-b from-indigo-600 to-purple-600 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="flex items-center justify-between p-4">
          <h1 className={`text-xl font-bold ${!isOpen && "hidden"}`}>
            Admin
          </h1>
          <button onClick={() => setIsOpen(!isOpen)}>
            <FaBars size={20} />
          </button>
        </div>

        <nav className="flex-1">
          {menuItems.map((item) => (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`flex items-center gap-3 p-3 mx-2 my-1 rounded-lg cursor-pointer transition-colors ${
                active === item.name
                  ? "bg-white text-indigo-600"
                  : "hover:bg-indigo-500"
              }`}
              title={!isOpen ? item.name : ""}
            >
              <span className="text-lg">{item.icon}</span>
              <span
                className={`${!isOpen && "hidden"} text-sm font-medium`}
              >
                {item.name}
              </span>
            </div>
          ))}
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="flex items-center justify-between bg-white shadow px-6 py-3">
          <h2 className="text-2xl font-semibold">{active}</h2>
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">{username}</span>
            <img
              src={myProfile}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-indigo-600"
            />
          </div>
        </div>

        {/* Dynamic Page Content */}
        <div className="p-6 overflow-y-auto flex-1">
          {active === "Home" && <HomeContent />}
          {active === "Reports" && <ReportsContent />}
          {active === "Users" && <UsersContent />}
          {active === "Settings" && <SettingsContent />}
        </div>
      </div>
    </div>
  );
}

// ---------------- Content Components ----------------
function HomeContent() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-medium text-gray-600">Total Users</h3>
        <p className="text-2xl font-bold mt-2">1,234</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-medium text-gray-600">Reports</h3>
        <p className="text-2xl font-bold mt-2">89</p>
      </div>
      <div className="bg-white p-6 rounded-xl shadow">
        <h3 className="font-medium text-gray-600">Revenue</h3>
        <p className="text-2xl font-bold mt-2">$12,345</p>
      </div>
    </div>
  );
}

function ReportsContent() {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingReport, setEditingReport] = useState(null);
  const [editForm, setEditForm] = useState({});

  useEffect(() => {
    fetchReports();
  }, []);

  const fetchReports = () => {
    axios
      .get("http://localhost:5000/reports")
      .then((res) => {
        setReports(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching reports:", err);
        setLoading(false);
      });
  };

  // Delete Report
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this report?")) {
      axios
        .delete(`http://localhost:5000/reports/${id}`)
        .then(() => {
          setReports(reports.filter((r) => r.id !== id));
          alert("Report deleted successfully");
        })
        .catch((err) => alert("Failed to delete report"));
    }
  };

  // Edit Report
  const handleEditClick = (report) => {
    setEditingReport(report.id);
    setEditForm({ ...report });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value });
  };

  const handleEditSubmit = () => {
    axios
      .put(`http://localhost:5000/reports/${editingReport}`, editForm)
      .then((res) => {
        setReports(
          reports.map((r) => (r.id === editingReport ? res.data : r))
        );
        setEditingReport(null);
        alert("Report updated successfully");
      })
      .catch((err) => alert("Failed to update report"));
  };

  if (loading) return <p>Loading reports...</p>;

  return (
    <div className="bg-white p-6 rounded-xl shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Reports</h2>

      {/* Reports Table */}
      <table className="w-full text-left border">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Animal</th>
            <th className="p-2">Description</th>
            <th className="p-2">Sender</th>
            <th className="p-2">Image</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr key={report.id} className="border-t">
              <td className="p-2">{report.id}</td>
              <td className="p-2">
                {editingReport === report.id ? (
                  <input
                    name="animal_type"
                    value={editForm.animal_type || ""}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  report.animal_type
                )}
              </td>
              <td className="p-2">
                {editingReport === report.id ? (
                  <textarea
                    name="damage_description"
                    value={editForm.damage_description || ""}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  report.damage_description
                )}
              </td>
              <td className="p-2">
                {editingReport === report.id ? (
                  <input
                    name="sender_name"
                    value={editForm.sender_name || ""}
                    onChange={handleInputChange}
                    className="border p-1"
                  />
                ) : (
                  report.sender_name
                )}
              </td>

              {/* IMAGE COLUMN */}
              <td className="p-2">
                {report.image_path ? (
                  <img
                    src={`http://localhost:5000/uploads/${report.image_path.split('/').pop()}`}
                    alt="Report"
                    className="w-20 h-20 object-cover rounded"
                  />
                ) : (
                  "No Image"
                )}
              </td>

              <td className="p-2 flex gap-2">
                {editingReport === report.id ? (
                  <>
                    <button
                      onClick={handleEditSubmit}
                      className="px-2 py-1 bg-green-500 text-white rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingReport(null)}
                      className="px-2 py-1 bg-gray-400 text-white rounded"
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => handleEditClick(report)}
                      className="px-2 py-1 bg-blue-500 text-white rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(report.id)}
                      className="px-2 py-1 bg-red-500 text-white rounded"
                    >
                      Delete
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function UsersContent() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5001/users") // 🔥 change port if needed
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600">Loading users...</p>;

  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl shadow-lg mt-6">
      <h2 className="text-2xl font-bold mb-6 text-indigo-700 border-b pb-2">
        👥 Registered Users
      </h2>

      <div className="overflow-x-auto rounded-xl">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-indigo-600 text-white text-left">
              <th className="p-3">#</th>
              <th className="p-3">First Name</th>
              <th className="p-3">Last Name</th>
              <th className="p-3">Username</th>
              <th className="p-3">Email</th>
              <th className="p-3">Country</th>
              <th className="p-3">Phone</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr
                key={user.id}
                className={`hover:bg-indigo-100 transition ${
                  i % 2 === 0 ? "bg-white" : "bg-indigo-50"
                }`}
              >
                <td className="p-3 font-medium text-gray-700">{user.id}</td>
                <td className="p-3">{user.first_name}</td>
                <td className="p-3">{user.last_name}</td>
                <td className="p-3 text-indigo-700 font-semibold">
                  {user.username}
                </td>
                <td className="p-3 text-gray-600">{user.email}</td>
                <td className="p-3">{user.country}</td>
                <td className="p-3">{user.phone_number}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SettingsContent() {
  return <Profilee/>;
  
}

export default AdminDashboard;
