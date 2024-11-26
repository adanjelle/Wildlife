import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style.css';

function AdminDashboard() {
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [editingReport, setEditingReport] = useState(null); // Store the report being edited
    const [editForm, setEditForm] = useState({}); // Form state for editing

    useEffect(() => {
        axios.get('http://localhost:5000/reports')
            .then(response => {
                setReports(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching reports:', error);
                setError('Failed to load reports');
                setLoading(false);
            });
    }, []);

    // Handle delete action
    const handleDelete = (id, imagePath) => {
        if (window.confirm("Are you sure you want to delete this report?")) {
            axios.delete(`http://localhost:5000/reports/${id}`, { data: { image_path: imagePath } })
                .then(() => {
                    setReports(reports.filter(report => report.id !== id));
                    alert('Report deleted successfully');
                })
                .catch(error => {
                    console.error('Error deleting report:', error);
                    alert('Failed to delete report');
                });
        }
    };

    // Handle edit action
    const handleEditClick = (report) => {
        setEditingReport(report); // Set the current report for editing
        setEditForm({ ...report }); // Initialize the edit form with current report details
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditForm({ ...editForm, [name]: value });
    };

    const handleEditSubmit = () => {
        axios.put(`http://localhost:5000/reports/${editingReport.id}`, editForm)
            .then(response => {
                // Update the report list with the edited report
                setReports(reports.map(report =>
                    report.id === editingReport.id ? response.data : report
                ));
                setEditingReport(null); // Close the modal
                alert('Report updated successfully');
            })
            .catch(error => {
                console.error('Error updating report:', error);
                alert('Failed to update report');
            });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div className="table-container">
            <h1>Admin Dashboard</h1>
            <table className="reports-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Animal Type</th>
                        <th>Description</th>
                        <th>Sender Name</th>
                        <th>Image</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {reports.map(report => (
                        <tr key={report.id}>
                            <td>{report.id}</td>
                            <td>{report.animal_type}</td>
                            <td>{report.damage_description}</td>
                            <td>{report.sender_name}</td>
                            <td>
                                {report.image_path ? (
                                    <img src={`http://localhost:5000/${report.image_path}`} alt="Report" className="report-image" />
                                ) : (
                                    <span>No Image</span>
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleEditClick(report)} className="edit-btn">Edit</button>
                                <button onClick={() => handleDelete(report.id, report.image_path)} className="delete-btn">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Modal */}
            {editingReport && (
    <div className="modal">
        <div className="modal-content">
            <h2>Edit Report</h2>
            <form className="edit-form">
                <label>
                    <span>Animal Type</span>
                    <input
                        type="text"
                        name="animal_type"
                        value={editForm.animal_type || ''}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter animal type"
                    />
                </label>
                <label>
                    <span>Description</span>
                    <textarea
                        name="damage_description"
                        value={editForm.damage_description || ''}
                        onChange={handleInputChange}
                        className="form-textarea"
                        placeholder="Enter damage description"
                    ></textarea>
                </label>
                <label>
                    <span>Sender Name</span>
                    <input
                        type="text"
                        name="sender_name"
                        value={editForm.sender_name || ''}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Enter sender name"
                    />
                </label>
                <div className="modal-actions">
                    <button type="button" onClick={handleEditSubmit} className="save-btn">
                        Save Changes
                    </button>
                    <button type="button" onClick={() => setEditingReport(null)} className="cancel-btn">
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    </div>
)}

        </div>
    );
}

export default AdminDashboard;
