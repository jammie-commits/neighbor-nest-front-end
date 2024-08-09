import React from 'react';
import './Neighborhood.css';

const Neighborhood = () => {
    return (
        <div className="neighborhood">
            <div className="images">
                <div className="image-card">
                    <img src={`${process.env.PUBLIC_URL}/images/card-article.png`} alt="Neighborhood 1" />
                    <p>Neighborhood 1</p>
                </div>
                <div className="image-card">
                    <img src={`${process.env.PUBLIC_URL}/images/card-article.png`} alt="Neighborhood 2" />
                    <p>Neighborhood 2</p>
                </div>
                <div className="image-card">
                    <img src={`${process.env.PUBLIC_URL}/images/card-article.png`} alt="Neighborhood 3" />
                    <p>Neighborhood 3</p>
                </div>
                <div className="image-card">
                    <img src={`${process.env.PUBLIC_URL}/images/card-article.png`} alt="Neighborhood 4" />
                    <p>Neighborhood 4</p>
                </div>
                <div className="image-card">
                    <img src={`${process.env.PUBLIC_URL}/images/card-article.png`} alt="Neighborhood 5" />
                    <p>Neighborhood 5</p>
                </div>
                <div className="image-card">
                    <img src={`${process.env.PUBLIC_URL}/images/card-article.png`} alt="Neighborhood 6" />
                    <p>Neighborhood 6</p>
                </div>
            </div>
        </div>
    );
};

export default Neighborhood;
