import React, { useState, useEffect } from 'react';
import styles from './Admin.module.css';

const Admin = () => {
    const [users, setUsers] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedUser, setEditedUser] = useState({ name: '', email: '', neighborhood: '', picture: '' });
    const [isAdding, setIsAdding] = useState(false);
    const [newUser, setNewUser] = useState({ name: '', email: '', neighborhood: '', picture: '' });

    // Fetch the admins from the backend when the component mounts
    useEffect(() => {
        fetch('http://127.0.0.1:5000/api/admins')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching admins:', error));
    }, []);

    const handleEditClick = (user) => {
        setEditingId(user.id);
        setEditedUser({ name: user.name, email: user.email, neighborhood: user.neighborhood, picture: user.picture });
    };

    const handleDeleteClick = (id) => {
        fetch(`http://127.0.0.1:5000/api/admins/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setUsers(users.filter((user) => user.id !== id));
                } else {
                    console.error('Error deleting admin');
                }
            });
    };

    const handleSaveClick = (id) => {
        fetch(`http://127.0.0.1:5000/api/admins/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedUser),
        })
            .then(response => response.json())
            .then(updatedUser => {
                setUsers(users.map((user) => (user.id === id ? updatedUser : user)));
                setEditingId(null);
            })
            .catch(error => console.error('Error updating admin:', error));
    };

    const handleChange = (e) => {
        setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedUser({ ...editedUser, picture: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNewUserChange = (e) => {
        const { name, value } = e.target;
        setNewUser({ ...newUser, [name]: value });
    };

    const handleAddNewUser = () => {
        fetch('http://127.0.0.1:5000/api/admins', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        })
            .then(response => response.json())
            .then(addedUser => {
                setUsers([...users, addedUser]);
                setNewUser({ name: '', email: '', neighborhood: '', picture: '' });
                setIsAdding(false);
            })
            .catch(error => console.error('Error adding admin:', error));
    };

    return (
        <div className={styles.admin}>
            <button onClick={() => setIsAdding(!isAdding)}>
                {isAdding ? 'Cancel' : 'Add Admin'}
            </button>

            {isAdding && (
                <div className={styles['add-admin-form']}>
                    <h2>Add Admin</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleAddNewUser(); }}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={newUser.name}
                                onChange={handleNewUserChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={newUser.email}
                                onChange={handleNewUserChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Neighborhood:</label>
                            <input
                                type="text"
                                name="neighborhood"
                                value={newUser.neighborhood}
                                onChange={handleNewUserChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Upload Picture:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleFileChange}
                            />
                        </div>
                        <button type="submit">Save Admin</button>
                    </form>
                </div>
            )}

            <div className={styles['user-cards']}>
                {users.map((user) => (
                    <div key={user.id} className={styles['user-card']}>
                        {editingId === user.id ? (
                            <>
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedUser.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Email:</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={editedUser.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Neighborhood:</label>
                                    <input
                                        type="text"
                                        name="neighborhood"
                                        value={editedUser.neighborhood}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Upload Picture:</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <button onClick={() => handleSaveClick(user.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {user.picture ? (
                                    <img src={user.picture} alt="User" />
                                ) : (
                                    <div className={styles['blank-image']}></div>
                                )}
                                <h3>{user.name}</h3>
                                <p>{user.email}</p>
                                <p>{user.neighborhood}</p>
                                <button onClick={() => handleEditClick(user)}>Edit</button>
                                <button onClick={() => handleDeleteClick(user.id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Admin;
