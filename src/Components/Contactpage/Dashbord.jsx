import React, { useEffect, useState } from 'react';
import axios from 'axios';

function AdminDashboard() {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/reports')
            .then(response => setReports(response.data))
            .catch(error => console.error('Error fetching reports:', error));
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Animal Type</th>
                        <th>Description</th>
                        <th>Sender Name</th>
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
                                <button>View Details</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdminDashboard;
