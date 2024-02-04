import React from 'react';

import tdImg1 from '../../public/assets/images/user/1.png'; 
import tdImg2 from '../../public/assets/images/user/2.png'; 
import tdImg3 from '../../public/assets/images/user/3.png'; 
import tdImg4 from '../../public/assets/images/user/4.png'; 
import tdImg5 from '../../public/assets/images/user/5.png'; 
import { Link } from 'react-router-dom';



const Table = () => {

    const tableHeadings = [
        { title: "order" },
        { title: "customer" },
        { title: "product" },
        { title: "date" },
        { title: "amount" },
        { title: "Status" },
        { title: "Action" },
    ];

    const tableData = [
        { 
            id: "#pa4587",
            image: tdImg1,
            name: "Salina Dyna",
            product: "Blutooh Speaker",
            date: "22-09-2022",
            amount: "$20.00",
            status: "Paid",
            edit: <i className="las la-edit"></i>,
            view: <i className="las la-eye"></i>
        },
        { 
            id: "#pa6598",
            image: tdImg2,
            name: "Jumaba Billa",
            product: "Leather Loofer",
            date: "20-09-2022",
            amount: "$60.00",
            status: "Pending",
            edit: <i className="las la-edit"></i>,
            view: <i className="las la-eye"></i>
        },
        { 
            id: "#pa4587",
            image: tdImg3,
            name: "Tarmit Jinda ",
            product: "Leather Belt",
            date: "18-09-2022",
            amount: "$32.00",
            status: "Paid",
            edit: <i className="las la-edit"></i>,
            view: <i className="las la-eye"></i>
        },
        { 
            id: "#pa4587",
            image: tdImg4,
            name: "Luthiya Din",
            product: "Sun Glasses",
            date: "22-09-2022",
            amount: "$12.00",
            status: "Unpaid",
            edit: <i className="las la-edit"></i>,
            view: <i className="las la-eye"></i>
        },
        { 
            id: "#pa4587",
            image: tdImg5,
            name: "John Doe",
            product: "Blutooh Speaker",
            date: "22-09-2022",
            amount: "$20.00",
            status: "Paid",
            edit: <i className="las la-edit"></i>,
            view: <i className="las la-eye"></i>
        },
    ];
    
    return (
        <table className="table s7__table">
            <thead>
                <tr>
                    {
                        tableHeadings.map((tableHeading, index) => {
                            return (
                                <th key={index}>{tableHeading.title}</th>
                            )
                        })
                    }
                </tr>
            </thead>
            <tbody>
                {
                    tableData.map((data, index) => {
                        return (
                            <tr key={index}>
                                <td data-caption="order id">
                                    <b>{data.id}</b>
                                </td>
                                <td data-caption="customer">
                                    <div className="d-flex align-items-center justify-content-lg-start justify-content-end">
                                        <div className="thumb media-40px rounded-circle overflow-hidden">
                                            <img src={data.image} alt="image" className="fit-cover" />
                                        </div>
                                        <div className="content ps-3">
                                        <h6 className="text-small mb-0"></h6>
                                        </div>
                                    </div>
                                </td>
                                <td data-caption="Product">{data.product}</td>
                                <td data-caption="Date">{data.date}</td>
                                <td data-caption="Amount"> {data.amount}</td>
                                <td data-caption="Status">
                                {
                                    data.status === 'Paid' ? (
                                        <span className="s7__badge s7__badge-success">
                                            {data.status}
                                        </span>
                                    ) : data.status === 'Pending' ? (
                                        <span className="s7__badge s7__badge-warning">
                                            {data.status}
                                        </span>
                                    ) : (
                                        <span className="s7__badge s7__badge-danger">
                                            {data.status}
                                        </span>
                                    )
                                }
                                </td>
                                <td data-caption="Action">  
                                    <Link to="/" className="table-icon s7__text-secondary">
                                        {data.edit}
                                    </Link>
                                    <button type="button" className="table-icon s7__text-secondary">
                                    {data.view}
                                    </button>
                                </td>
                            </tr>
                        )
                    })                    
                }
                


                {/* <tr>
                    <td data-caption="order id">
                    <b>#pa6598</b>
                    </td>
                    <td data-caption="customer">
                    <div className="d-flex align-items-center justify-content-lg-start justify-content-end">
                        <div className="thumb media-40px rounded-circle overflow-hidden">
                        <img src="assets/images/user/2.png" alt="image" className="fit-cover" />
                        </div>
                        <div className="content ps-3">
                        <h6 className="text-small mb-0">Jumaba Billa</h6>
                        </div>
                    </div>
                    </td>
                    <td data-caption="Product">Leather Loofer</td>
                    <td data-caption="Date">20-09-2022</td>
                    <td data-caption="Amount">$60.00</td>
                    <td data-caption="Status">
                    <span className="s7__badge s7__badge-warning">Pending</span>
                    </td>
                    <td data-caption="Action">
                    <a href="#0" className="table-icon s7__text-secondary"><i className="las la-edit"></i></a>
                    <button type="button" className="table-icon s7__text-secondary"><i className="las la-eye"></i></button>
                    </td>
                </tr>
                <tr>
                    <td data-caption="order id">
                    <b>#pa4587</b>
                    </td>
                    <td data-caption="customer">
                    <div className="d-flex align-items-center justify-content-lg-start justify-content-end">
                        <div className="thumb media-40px rounded-circle overflow-hidden">
                        <img src="assets/images/user/3.png" alt="image" className="fit-cover" />
                        </div>
                        <div className="content ps-3">
                        <h6 className="text-small mb-0">Tarmit Jinda</h6>
                        </div>
                    </div>
                    </td>
                    <td data-caption="Product">Leather Belt</td>
                    <td data-caption="Date">18-09-2022</td>
                    <td data-caption="Amount">$32.00</td>
                    <td data-caption="Status">
                    <span className="s7__badge s7__badge-success">Paid</span>
                    </td>
                    <td data-caption="Action">
                    <a href="#0" className="table-icon s7__text-secondary"><i className="las la-edit"></i></a>
                    <button type="button" className="table-icon s7__text-secondary"><i className="las la-eye"></i></button>
                    </td>
                </tr>
                <tr>
                    <td data-caption="order id">
                    <b>#pa4587</b>
                    </td>
                    <td data-caption="customer">
                    <div className="d-flex align-items-center justify-content-lg-start justify-content-end">
                        <div className="thumb media-40px rounded-circle overflow-hidden">
                        <img src="assets/images/user/4.png" alt="image" className="fit-cover" />
                        </div>
                        <div className="content ps-3">
                        <h6 className="text-small mb-0">Luthiya Din</h6>
                        </div>
                    </div>
                    </td>
                    <td data-caption="Product">Sun Glasses</td>
                    <td data-caption="Date">22-09-2022</td>
                    <td data-caption="Amount">$12.00</td>
                    <td data-caption="Status">
                    <span className="s7__badge s7__badge-danger">Unpaid</span>
                    </td>
                    <td data-caption="Action">
                    <a href="#0" className="table-icon s7__text-secondary"><i className="las la-edit"></i></a>
                    <button type="button" className="table-icon s7__text-secondary"><i className="las la-eye"></i></button>
                    </td>
                </tr>
                <tr>
                    <td data-caption="order id">
                    <b>#pa4587</b>
                    </td>
                    <td data-caption="customer">
                    <div className="d-flex align-items-center justify-content-lg-start justify-content-end">
                        <div className="thumb media-40px rounded-circle overflow-hidden">
                        <img src="assets/images/user/5.png" alt="image" className="fit-cover" />
                        </div>
                        <div className="content ps-3">
                        <h6 className="text-small mb-0">Jhon Doe</h6>
                        </div>
                    </div>
                    </td>
                    <td data-caption="Product">Blutooh Speaker</td>
                    <td data-caption="Date">22-09-2022</td>
                    <td data-caption="Amount">$20.00</td>
                    <td data-caption="Status">
                    <span className="s7__badge s7__badge-success">Paid</span>
                    </td>
                    <td data-caption="Action">
                    <a href="#0" className="table-icon s7__text-secondary"><i className="las la-edit"></i></a>
                    <button type="button" className="table-icon s7__text-secondary"><i className="las la-eye"></i></button>
                    </td>
                </tr> */}
            </tbody>
        </table>
    );
};

export default Table;