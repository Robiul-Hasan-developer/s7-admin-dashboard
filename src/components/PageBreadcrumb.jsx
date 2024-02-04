import React from 'react';
import { Link } from 'react-router-dom';

const PageBreadcrumb = ({ title }) => {
    return (
        <div className="s7__page-nav">
            <div className="left">
                <h6 className="title text-uppercase">  {title}</h6>
            </div>
            <div className="right">
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                    <li>{title}</li>
                </ul>
            </div>
        </div>
    );
};

export default PageBreadcrumb;