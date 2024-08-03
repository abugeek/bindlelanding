// src/components/StoreButton.js
import React from 'react';
import './StoreButton.css';

const StoreButton = ({ link, imgSrc, altText }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="store-button">
            <img src={imgSrc} alt={altText} />
        </a>
    );
};

export default StoreButton;