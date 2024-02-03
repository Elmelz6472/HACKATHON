import React, { useState } from 'react';
import './DataPanel.css';

const DataPanel = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [displayedData, setDisplayedData] = useState('');

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const handleInputChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
        setInputValue(e.target.value);
    };

    const handleWriteData = () => {
        setDisplayedData(inputValue);
        setInputValue('');
    };

    return (
        <div className={`panel ${isVisible ? 'visible' : ''}`}>
            <button className="toggleButton" onClick={toggleVisibility}>
                {isVisible ? 'Hide Panel' : 'Show Panel'}
            </button>
            {isVisible && (
                <div className="inputSection">
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                        placeholder="Enter data..."
                    />
                    <button onClick={handleWriteData}>Write Data</button>
                </div>
            )}
            {displayedData && (
                <div className="dataSection">
                    <h3>Displayed Data:</h3>
                    <p>{displayedData}</p>
                </div>
            )}
        </div>
    );
};

export default DataPanel;
