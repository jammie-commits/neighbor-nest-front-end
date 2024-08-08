import React from 'react';
import './Dashboard1.css';

const Dashboard1 = () => {
    return (
        <div className="dashboard1">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>john@example.com</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>Jane Smith</td>
                        <td>jane@example.com</td>
                        <td>Inactive</td>
                    </tr>
                    <tr>
                        <td>Emily Johnson</td>
                        <td>emily@example.com</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>Michael Brown</td>
                        <td>michael@example.com</td>
                        <td>Pending</td>
                    </tr>
                    <tr>
                        <td>Sarah Wilson</td>
                        <td>sarah@example.com</td>
                        <td>Active</td>
                    </tr>
                    <tr>
                        <td>David Lee</td>
                        <td>david@example.com</td>
                        <td>Inactive</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard1;
