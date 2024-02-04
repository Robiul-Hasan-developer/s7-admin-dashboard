import React from 'react';
import LightDarkButton from './LightDarkButton';
import UserProfileButton from './UserProfileButton';


const NavRightList = () => {

    return (
        <ul className="s7__nav-right">
            <li>
                <LightDarkButton/>
            </li>
            <li className="dropdown">
                <UserProfileButton/>
            </li>
        </ul>
    );
};

export default NavRightList;