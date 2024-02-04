import React, { useEffect, useState } from 'react';

const LightDarkButton = () => {

    // const [lightDark, setLightDark] = useState(false); 
    
    // const handleLightDark = () => {
    //     setLightDark(!lightDark)

    //     const body = document.body

    //     if(lightDark) {
    //         body.classList.remove('theme-dark')
    //     } else {
    //         body.classList.add('theme-dark')
    //     }
    // }

    
    const [lightDark, setLightDark] = useState(() => {
        // Retrieve dark mode preference from localStorage or default to false
        return localStorage.getItem('darkMode') === 'true';
    });

    useEffect(() => {
        const body = document.body;

        if (lightDark) {
            body.classList.add('theme-dark');
        } else {
            body.classList.remove('theme-dark');
        }

        // Save dark mode preference to localStorage
        localStorage.setItem('darkMode', lightDark.toString());
    }, [lightDark]);

    const handleLightDark = () => {
        // setLightDark((prevDark) => !prevDark);
        setLightDark(!lightDark);
    };
    
    return (
        <button type='button' className='nav-list__icon' onClick={handleLightDark}>
            {
                lightDark ? (
                    <i className='fas fa-sun'></i>
                    ) : (
                        <i className='fas fa-moon'></i>
                )
            }
        </button>
    );
};

export default LightDarkButton;