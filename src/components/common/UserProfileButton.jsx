import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const UserProfileButton = () => {

    const [showDropdown, setShowDropdown] = useState(false); 

    const handleDropdownClick = () => {
        setShowDropdown(!showDropdown);
    }

    document.addEventListener('click', (event) => {
        let eventTarget = event.target; 
        
        if ( eventTarget.closest('.dropdown-menu') === null && eventTarget.closest('button.nav-list__icon') === null ) {
            setShowDropdown(false)
        }
    })

    // User Info Json
    const userInfos = [
        {
            text: "Profile",
            icon: <i className='fas fa-user'></i>, 
            path: "/"
        },
        {
            text: "Change Password",
            icon: <i className='fas fa-key'></i> , 
            path: "/"
        },
        {
            text: "Settings",
            icon: <i className='fas fa-cog'></i>, 
            path: "/"
        },
    ]
    
    return (
        <>
            <button type="button" className='nav-list__icon' onClick={handleDropdownClick}>
                <i className='fas fa-user'></i> 
            </button>
            <ul className={`dropdown-menu ${showDropdown ? "d-block" : ""}`}>
                {
                    userInfos.map((info, index) => {
                        return (
                            <li key={index}>
                                <Link className="dropdown-item d-flex align-items-center gap-2" to={info.path}>
                                    <span className="icon">{info.icon}</span>
                                    {info.text}
                                </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    );
};

export default UserProfileButton;