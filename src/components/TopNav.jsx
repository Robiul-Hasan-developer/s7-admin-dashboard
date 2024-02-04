import React, { useContext } from 'react';
import SearchBox from './common/SearchBox';
import NavRightList from './common/NavRightList';
import { SidebarContext } from './context/SidebarContext';

const TopNav = () => {

    const {sidebarOpen, setSidebarOpen, handleSidebarClick, sidebarOpenSmallDevice, handleSidebarSmallDeviceClick} = useContext(SidebarContext); 

    if(sidebarOpenSmallDevice) {
        document.body.classList.add('dark-overlay')
    } else {
        document.body.classList.remove('dark-overlay')   
    }
    
    return (
        <nav className={`s7__nav ${sidebarOpen ? 'collapsed' : ''} `}>
            <button type="button" onClick={handleSidebarClick} className='sidebar-collapse-btn'>
                <span className="line"></span>
            </button>
            
            <button type="button" className="sidebar-open-btn" onClick={handleSidebarSmallDeviceClick}>
                <i className="las la-bars"></i>
            </button>

            <SearchBox/>
            
            <NavRightList/>
        </nav>
    );
};

export default TopNav;