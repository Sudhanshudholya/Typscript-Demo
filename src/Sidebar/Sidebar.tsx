import { useState } from 'react';
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
                    className="w-full py-4 bg-gradient-to-r from-blue to-blue text-blue-100 font-semibold rounded-lg shadow-md hover:bg-gradient-to-r hover:bg-blue-600 hover:bg-red-800 transition-all duration-300 ease-in-out flex items-center justify-center space-x-2 mt-[273px]"
                >
                    <FontAwesomeIcon icon={faSignOutAlt} />
                    <span>Log out</span>
                </button>
            </div>
        
        </div>
    );
};

export default Sidebar
