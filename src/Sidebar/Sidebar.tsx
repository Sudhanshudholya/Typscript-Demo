// // import React, { useState } from 'react'
// // import { Link, useNavigate } from 'react-router-dom'
// // import logo from '../Screens/Images copy/ack logo.png'



// // const Sidebar = () => {
// //     const [isSalesOpen, setIsSalesOpen] = useState(false)
// //     const [isPreSalesOpen, setIsPreSalesOpen] = useState(false)
// //     const [isOpen, setIsOpen] = useState(false)
// //     const navigate = useNavigate()


// //     const toggleSidebar = () => {
// //         setIsOpen(!isOpen)
// //     }

// //     const toggleSalesDropdown = () => {
// //         setIsSalesOpen(!isSalesOpen)
// //     }

// //     const togglePreSalesDropdown = () => {
// //         setIsPreSalesOpen(!isPreSalesOpen)
// //     }

// //     const handleLogout = () => {
// //         localStorage.clear()
// //         navigate('/')
// //     }

// //     return (
// //         <div className="relative h-screen">
// //             {/* Sidebar Toggle Button for Mobile */}
// //             <button
// //                 className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
// //                 onClick={toggleSidebar}
// //             >
// //                 ☰ Menu
// //             </button>

// //             {/* Overlay for Mobile */}
// //             {isOpen && (
// //                 <div
// //                     className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
// //                     onClick={toggleSidebar}
// //                 />
// //             )}

// //             {/* Sidebar */}
// //             <div className={`fixed top-0 left-0 z-20 h-full bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64`}>
// //                 <div className="p-4 flex items-center justify-center">
// //                     <img
// //                         src={logo}
// //                         alt="ACK Infra Logo"
// //                         className="h-12 w-auto"
// //                     />
// //                 </div>

// //                 <div className="space-y-1">
// //                     <Link to="customer-list">
// //                         <div className="p-4 hover:bg-blue-700 ">
// //                            Customers
// //                         </div>
// //                     </Link>

// //                     {/* Sales Dropdown */}
// //                     {/* <div className="relative">
// //                         <button
// //                             className="w-full p-4 hover:bg-blue-700 flex justify-between items-center"
// //                             onClick={toggleSalesDropdown}
// //                         >
// //                             Sales
// //                             <svg
// //                                 className={`w-5 h-5 transform transition-transform ${isSalesOpen ? 'rotate-180' : 'rotate-0'}`}
// //                                 xmlns="http://www.w3.org/2000/svg"
// //                                 fill="none"
// //                                 viewBox="0 0 24 24"
// //                                 stroke="currentColor"
// //                             >
// //                                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
// //                             </svg>
// //                         </button>
// //                         {isSalesOpen && (
// //                             <div className="bg-blue-700 space-y-1">
// //                                 <Link to="sales">
// //                                     <div className="p-4 hover:bg-blue-600">Sales</div>
// //                                 </Link>
// //                                 <Link to="pre-sales">
// //                                     <div className="p-4 hover:bg-blue-600">Pre sales</div>
// //                                 </Link>
// //                             </div>
// //                         )}
// //                     </div> */}

// //                     {/* <Link to="content-management">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Content Management
// //                         </div>
// //                     </Link> */}

                   

// //                     <Link to="category-list">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Category
// //                         </div>
// //                     </Link>

// //                     <Link to="product-list">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Products
// //                         </div>
// //                     </Link>


// //                    {/*<Link to="invoice">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             Invoice
// //                         </div>
// //                     </Link> */}


// //                     {/* <Link to="abp-commission">
// //                         <div className="p-4 hover:bg-blue-700">
// //                             ABP Commission
// //                         </div>
// //                     </Link> */}

// //                     {/* <Link to="service-management">
// //                 <div className="p-4 hover:bg-blue-700">
// //                     Service Management
// //                 </div>
// //             </Link> */}

                    
// //                     <button onClick={handleLogout} className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out">
// //                         Log out
// //                     </button> 
// //                 </div>
// //             </div>
// //         </div>
// //     )
// // }

// // export default Sidebar

// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faUsers, faListAlt, faBox, faSignOutAlt, faFileInvoice } from '@fortawesome/free-solid-svg-icons'; // Add more icons as needed
// import logo from '../Screens/Images copy/ack logo.png';

// const Sidebar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const navigate = useNavigate();

//     const toggleSidebar = () => {
//         setIsOpen(!isOpen);
//     };

//     const handleLogout = () => {
//         localStorage.clear();
//         navigate('/');
//     };

//     return (
//         <div className="relative h-screen">
//             {/* Sidebar Toggle Button for Mobile */}
//             <button
//                 className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
//                 onClick={toggleSidebar}
//             >
//                 ☰ Menu
//             </button>

//             {/* Overlay for Mobile */}
//             {isOpen && (
//                 <div
//                     className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
//                     onClick={toggleSidebar}
//                 />
//             )}

//             {/* Sidebar */}
//             <div className={`fixed top-0 left-0 z-20 h-full bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64`}>
//                 <div className="p-4 flex items-center justify-center">
//                     <img
//                         src={logo}
//                         alt="ACK Infra Logo"
//                         className="h-12 w-auto"
//                     />
//                 </div>

//                 <div className="space-y-1">
//                     {/* Customers Link */}
//                     <Link to="customer-list">
//                         <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
//                             <FontAwesomeIcon icon={faUsers} />
//                             <span>Customers</span>
//                         </div>
//                     </Link>

//                     {/* Category Link */}
//                     <Link to="category-list">
//                         <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
//                             <FontAwesomeIcon icon={faListAlt} />
//                             <span>Category</span>
//                         </div>
//                     </Link>

//                     {/* Products Link */}
//                     <Link to="product-list">
//                         <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
//                             <FontAwesomeIcon icon={faBox} />
//                             <span>Products</span>
//                         </div>
//                     </Link>

//                     {/* Invoice Link  */}

//                     <Link to="invoice-list">
//                         <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
//                             <FontAwesomeIcon icon={faFileInvoice} />
//                             <span>Invoice</span>
//                         </div>
//                     </Link>

//                     {/* Logout Button */}
//                     <button
//                         onClick={handleLogout}
//                         className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2"
//                     >
//                         <FontAwesomeIcon icon={faSignOutAlt} />
//                         <span>Log out</span>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Sidebar;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faListAlt, faBox, faSignOutAlt, faFileInvoice } from '@fortawesome/free-solid-svg-icons';
import logo from '../Screens/Images copy/ack logo.png';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.clear();
        navigate('/');
    };

    return (
        <div className="relative h-screen flex flex-col ">
            {/* Sidebar Toggle Button for Mobile */}
            <button
                className="md:hidden p-4 bg-blue-800 text-white fixed z-20"
                onClick={toggleSidebar}
            >
                ☰ Menu
            </button>

            {/* Overlay for Mobile */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black opacity-50 z-10 md:hidden"
                    onClick={toggleSidebar}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 z-20 h-full bg-blue-800 text-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-300 ease-in-out md:relative md:w-64 overflow-auto`}>
                <div className="p-4 flex items-center justify-center">
                    <img
                        src={logo}
                        alt="ACK Infra Logo"
                        className="h-12 w-auto"
                    />
                </div>

                <div className="space-y-1 flex-1 overflow-auto">
                    {/* Customers Link */}
                    <Link to="customer-list">
                        <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faUsers} />
                            <span>Customers</span>
                        </div>
                    </Link>

                    {/* Category Link */}
                    <Link to="category-list">
                        <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faListAlt} />
                            <span>Category</span>
                        </div>
                    </Link>

                    {/* Products Link */}
                    <Link to="product-list">
                        <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faBox} />
                            <span>Products</span>
                        </div>
                    </Link>

                    {/* Invoice Link */}
                    <Link to="invoice-list">
                        <div className="p-4 hover:bg-blue-700 flex items-center space-x-2">
                            <FontAwesomeIcon icon={faFileInvoice} />
                            <span>Invoice</span>
                        </div>
                    </Link>
                </div>

                {/* Logout Button */}
                <button
                    onClick={handleLogout}
                    className="w-full py-4 bg-gradient-to-r from-blue-700 to-blue text-white font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-blue-800 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Log out</span>
                </button>
            </div>
        
        </div>
    );
};

export default Sidebar
