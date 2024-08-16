// import React, { useState } from 'react';
// import './Dashboard1.css';

// const Dashboard1 = () => {
//     const [users, setUsers] = useState([
//         { id: 1, name: 'John Doe', email: 'john@example.com', status: 'Active' },
//         { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'Inactive' },
//         { id: 3, name: 'Michael Brown', email: 'michael@example.com', status: 'Active' },
//         { id: 4, name: 'Emily Davis', email: 'emily@example.com', status: 'Pending' },
//         { id: 5, name: 'Sarah Wilson', email: 'sarah@example.com', status: 'Active' },
//         { id: 6, name: 'David Johnson', email: 'david@example.com', status: 'Inactive' }
//     ]);

//     return (
//         <div className="dashboard1">
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Status</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users.map((user) => (
//                         <tr key={user.id}>
//                             <td>{user.name}</td>
//                             <td>{user.email}</td>
//                             <td>{user.status}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default Dashboard1;
