import React, { useContext } from 'react';
import Sidebar from '../components/Sidebar';
import TopNav from '../components/TopNav';
import PageBreadcrumb from '../components/PageBreadcrumb';
import { SidebarContext } from '../components/context/SidebarContext';

const AddNew = () => {

    const {sidebarOpen, setSidebarOpen} = useContext(SidebarContext); 
    
    return (
        <>
            <TopNav/>
            <div className="body-area">
                <Sidebar/>

                <main className={`s7__main ${sidebarOpen ? 'collapsed' : ''}`}>

                    <PageBreadcrumb title="Add New"/>

                    <div className="card mt-5">
                        <div className="card-header">
                            <div className="d-flex flex-wrap justify-content-between align-items-center">
                                <h6 className="text-uppercase mb-0">Add Competitive Intelligence</h6>
                            </div>
                        </div>
                        <div className="card-body">
                            <form action="#">
                                <div className="row gy-4">
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="FirstName" className='form-label'>First Name</label>
                                        <input type="text" className='form-control' id="FirstName" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="LastName" className='form-label'>Last Name</label>
                                        <input type="text" className='form-control' id="LastName" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Username" className='form-label'>Username</label>
                                        <input type="text" className='form-control' id="Username" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Email" className='form-label'>Email</label>
                                        <input type="email" className='form-control' id="Email" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Country" className='form-label'>Country</label>
                                        <input type="text" className='form-control' id="Country" />
                                    </div>
                                    <div className="col-sm-6 col-xs-6">
                                        <label htmlFor="Phone" className='form-label'>Phone</label>
                                        <input type="tel" className='form-control' id="Phone" />
                                    </div>
                                    <div className="col-sm-12">
                                        <label htmlFor="Message" className='form-label'>Message</label>
                                        <textarea id="Message" className='form-control'></textarea>
                                    </div>
                                    <div className="col-sm-12">
                                        <button type="submit" className='btn s7__bg-primary text-white w-100'>Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                </main>
            </div>
        </>
    );
};

export default AddNew;