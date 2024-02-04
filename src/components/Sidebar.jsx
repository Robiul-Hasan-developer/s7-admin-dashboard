import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { SidebarContext } from './context/SidebarContext';

const Sidebar = () => {

    const {sidebarOpen, setSidebarOpen, handleSidebarClick, sidebarOpenSmallDevice, setSidebarOpenSmallDevice, handleSidebarSmallDeviceClick} = useContext(SidebarContext); 
    
    return (
        <aside className={`s7__sidebar ${sidebarOpen ? 'collapsed' : ''} ${sidebarOpenSmallDevice ? "active": ""}`}>
            <button type="button" className="sidebar-close-btn" onClick={handleSidebarSmallDeviceClick}>
                <i className="las la-times"></i> 
            </button>
            <div className="s7__logo">
                <Link href="/" className="long-logo">
                    <img src="assets/images/logo.png" alt="logo image" />
                </Link>
                <Link href="/" className="short-logo-icon">
                    <img src="assets/images/logo-icon.png" alt="logo image" />
                </Link>
            </div>
            <div className="s7__sidebar-nav-wrapper" data-simplebar>
                <ul className="s7__sidebar-nav" id="s7__sidebar-nav">
                    <li>
                        <NavLink to="/" className='s7__sidebar-nav__link gap-2'>
                            <span className="nav-icon"><i className="fas fa-home"></i></span>
                            <span className="s7__nav-caption">Dashboard</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/table" className='s7__sidebar-nav__link gap-2'>
                            <span className="nav-icon"><i className="fas fa-table"></i></span>
                            <span className="s7__nav-caption">Table</span>
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/add" className='s7__sidebar-nav__link gap-2'>
                            <span className="nav-icon"><i className="fas fa-user-plus"></i></span>
                            <span className="s7__nav-caption">Add New</span>
                        </NavLink>
                    </li>

                    <li className="s7__menu-title">
                        <span>Forms & Tables </span>
                    </li>

                    <li>
                        <NavLink to="/demo" className='s7__sidebar-nav__link gap-2'>
                            <span className="nav-icon"><i className="fas fa-table"></i></span>
                            <span className="s7__nav-caption">Demo</span>
                        </NavLink>
                    </li>

                </ul>
            </div>
      </aside>
    );
};

export default Sidebar;