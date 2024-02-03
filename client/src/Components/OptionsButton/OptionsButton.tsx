import React from 'react';
import './OptionsButton.css';

const Options = () => {
    return (
        <div className="container">
            <div className="buttonContainer">
                <button className="button">Save</button>
                <button className="button">Reset</button>
                <button className="button">Load</button>
            </div>
        </div>
    );
};

export default Options;
