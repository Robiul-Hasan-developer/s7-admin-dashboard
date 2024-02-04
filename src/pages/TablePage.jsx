import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import PageBreadcrumb from '../components/PageBreadcrumb';
import Table from '../components/Table';
import Select from '../components/common/Select';
import { SidebarContext } from '../components/context/SidebarContext';


const TablePage = () => {

    const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext); 
    
    return (
        <>
            <TopNav/>
            <div className="body-area">
                <Sidebar/>

                <main className={`s7__main ${sidebarOpen ? 'collapsed' : ''}`}>

                    <PageBreadcrumb title="Table"/>

                    <div className="card mt-5">
                        <div className="card-header border-0">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <h6 className="text-uppercase mb-0">Recent Orders</h6>

                                <div className="d-flex flex-wrap justify-content-end align-items-center">
                                    <span className="text-nowrap me-2">Filter By : </span>

                                    <Select/>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <Table/>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
};

export default TablePage;