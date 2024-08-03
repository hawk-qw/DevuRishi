import React, { useState, useEffect } from 'react';
import './Slider.css';

function Slider() {
    const [value, setValue] = useState(0);

    const handleClick = () => {
        setValue(1000000);
    };

    useEffect(() => {
        if (value === 1000000) {
            const slider = document.getElementById('slider');
            slider.style.transition = 'width 2s ease-out';
            slider.style.width = '100%';
        }
    }, [value]);

    return (
        <div className="App">
            <div className="slider-container">
                <div id="slider" className="slider" style={{ width: `${(value / 1000000) * 100}%` }}></div>
            </div>
            <button onClick={handleClick}>Animate to 1,000,000</button>
        </div>
    );
}

export default Slider; 