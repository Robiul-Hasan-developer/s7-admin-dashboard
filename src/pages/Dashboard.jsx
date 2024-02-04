import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import PageBreadcrumb from '../components/PageBreadcrumb';
import { SidebarContext } from '../components/context/SidebarContext';

const Dashboard = () => {

    const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext); 
    
    return (
        <>
            <TopNav/>
            <div className="body-area">
                <Sidebar/>

                <main className={`s7__main ${sidebarOpen ? 'collapsed' : ''}`}>

                    <PageBreadcrumb title="Dashboard"/>

                    <div className="row gy-4">
                        <div className="col-xxl-3 col-xl-6 col-md-4 col-sm-6">
                            <div className="s7__widget-four">
                            <div className="icon s7__icon s7__icon-1">
                                <i className="las la-dollar-sign"></i>
                            </div>
                            <div className="content">
                                <p className="caption">Sales</p>
                                <h4 className="amount">52K</h4>
                            </div>
                            <div className="up-down-ratio">
                                <div className="up-ratio"><i className="fas fa-caret-up"></i> 4.5%</div>
                                <span className="text-small s7__text-muted">last week</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-md-4 col-sm-6">
                            <div className="s7__widget-four">
                            <div className="icon s7__icon s7__icon-2">
                                <i className="las la-shopping-bag"></i>
                            </div>
                            <div className="content">
                                <p className="caption">Customers</p>    
                                <h4 className="amount">6.25K</h4>
                            </div>
                            <div className="up-down-ratio">
                                <div className="down-ratio"><i className="fas fa-caret-down"></i> 2.95%</div>
                                <span className="text-small s7__text-muted">last week</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-md-4 col-sm-6">
                            <div className="s7__widget-four">
                            <div className="icon s7__icon s7__icon-6">
                                <i className="las la-user-circle"></i>
                            </div>
                            <div className="content">
                                <p className="caption">Products</p>
                                <h4 className="amount">1.325K</h4>
                            </div>
                            <div className="up-down-ratio">
                                <div className="up-ratio"><i className="fas fa-caret-up"></i> 10.95%</div>
                                <span className="text-small s7__text-muted">last week</span>
                            </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-6 col-md-4 col-sm-6">
                            <div className="s7__widget-four">
                            <div className="icon s7__icon s7__icon-7">
                                <i className="las la-wallet"></i>
                            </div>
                            <div className="content">
                                <p className="caption">Revenue</p>
                                <h4 className="amount">$955K</h4>
                            </div>
                            <div className="up-down-ratio">
                                <div className="up-ratio"><i className="fas fa-caret-down"></i> 0.00%</div>
                                <span className="text-small s7__text-muted">last week</span>
                            </div>
                            </div>
                        </div>
                    </div>

                </main>

                {/* main end */}
            </div>
            {/* body-area end */}
        </>
    );
};

export default Dashboard;