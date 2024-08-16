import React, { useState, useEffect } from 'react';
import styles from './Neighborhood.module.css';

const Neighborhood = () => {
    const [neighborhoods, setNeighborhoods] = useState([]);
    const [editingId, setEditingId] = useState(null);
    const [editedNeighborhood, setEditedNeighborhood] = useState({ name: '', description: '', image: '' });
    const [isAdding, setIsAdding] = useState(false);
    const [newNeighborhood, setNewNeighborhood] = useState({ name: '', image: '', description: '' });
    const [isVisible, setIsVisible] = useState(true); // Visibility state

    useEffect(() => {
        fetch('http://localhost:5000/neighborhoods')
            .then(response => response.json())
            .then(data => setNeighborhoods(data))
            .catch(error => console.error('Error fetching neighborhoods:', error));
    }, []);

    const handleExit = () => {
        setIsVisible(false); // Hide the component
    };

    const handleEditClick = (neighborhood) => {
        setEditingId(neighborhood.id);
        setEditedNeighborhood({ name: neighborhood.name, description: neighborhood.description, image: neighborhood.image });
    };

    const handleDeleteClick = (id) => {
        fetch(`http://localhost:5000/neighborhoods/${id}`, { method: 'DELETE' })
            .then(response => {
                if (response.ok) {
                    setNeighborhoods(neighborhoods.filter((neighborhood) => neighborhood.id !== id));
                } else {
                    console.error('Error deleting neighborhood');
                }
            });
    };

    const handleSaveClick = (id) => {
        fetch(`http://localhost:5000/neighborhoods/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(editedNeighborhood),
        })
            .then(response => response.json())
            .then(updatedNeighborhood => {
                setNeighborhoods(neighborhoods.map((neighborhood) =>
                    (neighborhood.id === id ? updatedNeighborhood : neighborhood)
                ));
                setEditingId(null);
            })
            .catch(error => console.error('Error updating neighborhood:', error));
    };

    const handleChange = (e) => {
        setEditedNeighborhood({ ...editedNeighborhood, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setEditedNeighborhood({ ...editedNeighborhood, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleNewNeighborhoodChange = (e) => {
        const { name, value } = e.target;
        setNewNeighborhood({ ...newNeighborhood, [name]: value });
    };

    const handleNewFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewNeighborhood({ ...newNeighborhood, image: reader.result });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleAddNewNeighborhood = () => {
        fetch('http://localhost:5000/neighborhoods', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newNeighborhood),
        })
            .then(response => response.json())
            .then(addedNeighborhood => {
                setNeighborhoods([...neighborhoods, addedNeighborhood]);
                setNewNeighborhood({ name: '', image: '', description: '' });
                setIsAdding(false);
            })
            .catch(error => console.error('Error adding neighborhood:', error));
    };

    if (!isVisible) {
        return <div className={styles.blankSpace}></div>; // Return blank space if not visible
    }

    return (
        <div className={styles.neighborhood}>
            <button className={styles.exitButton} onClick={handleExit}>Exit</button>
            <button onClick={() => setIsAdding(!isAdding)}>
                {isAdding ? 'Cancel' : 'Add Neighborhood'}
            </button>

            {isAdding && (
                <div className={styles['add-neighborhood-form']}>
                    <h2>Add Neighborhood</h2>
                    <form onSubmit={(e) => { e.preventDefault(); handleAddNewNeighborhood(); }}>
                        <div>
                            <label>Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={newNeighborhood.name}
                                onChange={handleNewNeighborhoodChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Description:</label>
                            <textarea
                                name="description"
                                value={newNeighborhood.description}
                                onChange={handleNewNeighborhoodChange}
                                required
                            />
                        </div>
                        <div>
                            <label>Upload Image:</label>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleNewFileChange}
                            />
                        </div>
                        <button type="submit">Save Neighborhood</button>
                    </form>
                </div>
            )}

            <div className={styles['neighborhood-cards']}>
                {neighborhoods.map((neighborhood) => (
                    <div key={neighborhood.id} className={styles['neighborhood-card']}>
                        {editingId === neighborhood.id ? (
                            <>
                                <div>
                                    <label>Name:</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedNeighborhood.name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Description:</label>
                                    <textarea
                                        name="description"
                                        value={editedNeighborhood.description}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div>
                                    <label>Upload Image:</label>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                    />
                                </div>
                                <button onClick={() => handleSaveClick(neighborhood.id)}>Save</button>
                            </>
                        ) : (
                            <>
                                {neighborhood.image ? (
                                    <img src={neighborhood.image} alt="Neighborhood" />
                                ) : (
                                    <img
                                        src={`${process.env.PUBLIC_URL}/images/default-image.png`}
                                        alt="Neighborhood"
                                    />
                                )}
                                <h3>{neighborhood.name}</h3>
                                <p>{neighborhood.description}</p>
                                <button onClick={() => handleEditClick(neighborhood)}>Edit</button>
                                <button onClick={() => handleDeleteClick(neighborhood.id)}>Delete</button>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Neighborhood;
