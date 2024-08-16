import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';

const Admin = () => {
    const [admins, setAdmins] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedAdmin, setEditedAdmin] = useState({ name: '', email: '', password: '', neighborhood: '', picture: '' });
    const [isAdding, setIsAdding] = useState(false);
    const [newAdmin, setNewAdmin] = useState({ name: '', email: '', password: '', neighborhood: '', picture: '' });
    const [isVisible, setIsVisible] = useState(true); 
    useEffect(() => {
        fetch('http://localhost:5000/admins')
            .then(response => response.json())
            .then(data => setAdmins(data))
            .catch(error => console.error('Error fetching admins:', error));
    }, []);

    const handleExit = () => {
        setIsVisible(false);
    };

    const handleEditClick = (admin) => {
        setEditingId(admin.id);
        setEditedAdmin({ name: admin.name, email: admin.email, password: admin.password, neighborhood: admin.neighborhood, picture: admin.picture });
    };

    const handleDeleteClick = (id) => {
        fetch(`http://localhost:5000/admins/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setAdmins(admins.filter((admin) => admin.id !== id));
                } else {
                    console.error('Error deleting admin');
                }
            });
    };

    const handleSaveClick = (id) => {
        fetch(`http://localhost:5000/admins/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedAdmin),
        })
            .then(response => response.json())
            .then(updatedAdmin => {
                setAdmins(admins.map((admin) => (admin.id === id ? updatedAdmin : admin)));
                setEditingId(null);
            })
            .catch(error => console.error('Error updating admin:', error));
    };

    const handleChange = (e) => {
        setEditedAdmin({ ...editedAdmin, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e, isEdit = false) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                if (isEdit) {
                    setEditedAdmin({ ...editedAdmin, picture: reader.result });
                } else {
                    setNewAdmin({ ...newAdmin, picture: reader.result });
                }
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNewAdminChange = (e) => {
        const { name, value } = e.target;
        setNewAdmin({ ...newAdmin, [name]: value });
    };

    const handleAddNewAdmin = () => {
        fetch('http://localhost:5000/admins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newAdmin),
        })
            .then(response => response.json())
            .then(addedAdmin => {
                setAdmins([...admins, addedAdmin]);
                setNewAdmin({ name: '', email: '', password: '', neighborhood: '', picture: '' });
                setIsAdding(false);
            })
            .catch(error => console.error('Error adding admin:', error));
    };

    if (!isVisible) {
        return <div className={styles.blankSpace}></div>; 
    }

    return (
        <div className={styles.admin}>
            <button className={styles.exitButton} onClick={handleExit}>Exit</button>
            <button onClick={() => setIsAdding(!isAdding)}>
                {isAdding ? 'Cancel' : 'Add Admin'}
            </button>

            {isAdding && (
                <div className={styles['add-admin-form']}>
                    <h2>Add Admin</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleAddNewAdmin(); }}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={newAdmin.name}
                                onChange={handleNewAdminChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={newAdmin.email}
                                onChange={handleNewAdminChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Password:</label>
                            <input
                                type="password"
                                name="password"
                                value={newAdmin.password}
                                onChange={handleNewAdminChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Neighborhood:</label>
                            <input
                                type="text"
                                name="neighborhood"
                                value={newAdmin.neighborhood}
                                onChange={handleNewAdminChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Upload Picture:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={(e) => handleFileChange(e, false)}
                                required
                            />
                        </div>
                        <button type="submit">Save Admin</button>
                    </form>
                </div>
            )}

            <div className={styles['user-cards']}>
                {admins.map((admin) => (
                    <div key={admin.id} className={styles['user-card']}>
                        {editingId === admin.id ? (
                            <>
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedAdmin.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={editedAdmin.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Password:</label>
                                    <input
                                        type="password"
                                        name="password"
                                        value={editedAdmin.password}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Neighborhood:</label>
                                    <input
                                        type="text"
                                        name="neighborhood"
                                        value={editedAdmin.neighborhood}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Upload Picture:</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={(e) => handleFileChange(e, true)}
                                    />
                                </div>
                                <button onClick={() => handleSaveClick(admin.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {admin.picture ? (
                                    <img src={admin.picture} alt="Admin" />
                                ) : (
                                    <div className={styles['blank-image']}></div>
                                )}
                                <h3>{admin.name}</h3>
                                <p>{admin.email}</p>
                                <p>{admin.neighborhood}</p>
                                <button onClick={() => handleEditClick(admin)}>Edit</button>
                                <button onClick={() => handleDeleteClick(admin.id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
