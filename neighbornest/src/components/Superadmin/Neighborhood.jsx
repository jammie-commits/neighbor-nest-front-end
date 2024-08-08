import React from 'react';
import './Neighborhood.css';

const Neighborhood = () => {
    return (
        <div className="Neighborhood">
            
            <div className="images">
                <div className="image-card">
                    <img src="image1_url" alt="Image 1" />
                    <p>Image 1</p>
                </div>
                <div className="image-card">
                    <img src="image2_url" alt="Image 2" />
                    <p>Image 2</p>
                </div>
                <div className="image-card">
                    <img src="image3_url" alt="Image 3" />
                    <p>Image 3</p>
                </div>
            </div>
        </div>
    );
};

export default Neighborhood;
