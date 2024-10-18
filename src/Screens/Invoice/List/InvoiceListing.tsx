import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';

const InvoiceListing = ({ onDelete }: { onDelete: (id: string) => void }) => {
    
    const location = useLocation();

    // Dummy data for invoices
    const allInvoices = [
        {
            _id: '1',
            date: '2024-10-01',
            invoiceno: 'INV-001',
            customer: 'John Doe',
        },
        {
            _id: '2',
            date: '2024-10-02',
            invoiceno: 'INV-002',
            customer: 'Jane Smith',
        },
        {
            _id: '3',
            date: '2024-10-03',
            invoiceno: 'INV-003',
            customer: 'Alice Johnson',
        },
        {
            _id: '4',
            date: '2024-10-04',
            invoiceno: 'INV-004',
            customer: 'Bob Brown',
        },
        {
            _id: '5',
            date: '2024-10-05',
            invoiceno: 'INV-005',
            customer: 'Charlie Davis',
        },
        // Add more dummy invoices if needed
    ];

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 2;

    // Calculate the total number of pages
    const totalPages = Math.ceil(allInvoices.length / itemsPerPage);

    // Get current invoices based on the current page
    const currentInvoices = allInvoices.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Helper functions for pagination
    const handlePrevious = () => {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    const handleNext = () => {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    const handlePageClick = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                {/* Invoice Table */}
                {location.pathname === '/layout/invoice-list' && (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Invoice</h2>
                            <Link to="add-invoice">
                                <button className="bg-green-500 text-white px-4 py-2 rounded">
                                    Add Invoice
                                </button>
                            </Link>
                        </div>
                        <table className="min-w-full bg-white border">
                            <thead className="min-w-full bg-gray-500 border">
                                <tr style={{ textAlign: 'center' }} className="text-white">
                                    <th className="py-2 px-4 border-b">Date</th>
                                    <th className="py-2 px-4 border-b">Invoice No</th>
                                    <th className="py-2 px-4 border-b">Customer</th>
                                    <th className="py-2 px-4 border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody className="min-w-full bg-white border text-slate-900 ">
                                {currentInvoices.length > 0 ? (
                                    currentInvoices.map((invoice: any) => (
                                        <tr
                                            key={invoice._id}
                                            style={{ textAlign: 'center' }}
                                            className="text-slate-900"
                                        >
                                            <td className="py-2 px-4 border-b">{invoice.date}</td>
                                            <td className="py-2 px-4 border-b">{invoice.invoiceno}</td>
                                            <td className="py-2 px-4 border-b">{invoice.customer}</td>
                                            <td className="py-2 px-4 border-b">
                                                <Link to={`edit-invoice/${invoice._id}`}>
                                                    <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                </Link>

                                                <button
                                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                                    onClick={() => onDelete(invoice._id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={4} className="text-center py-4">
                                            No invoices found.
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>

                        {/* Pagination Controls */}
                        <div className="flex justify-between items-center mt-4">
                            <button
                                className={`px-4 py-2 bg-gray-200 rounded ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                                onClick={handlePrevious}
                                // disabled={currentPage === 1}
                                disabled={currentPage === totalPages}
                            >
                                Previous
                            </button>

                            {/* Pagination Buttons */}
                            <div className="flex space-x-2">
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index + 1}
                                        className={`px-4 py-2 rounded ${currentPage === index + 1
                                                ? 'bg-blue-500 text-white'
                                                : 'bg-gray-200'
                                            }`}
                                        onClick={() => handlePageClick(index + 1)}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>

                            <button
                                className={`px-4 py-2 bg-gray-200 rounded ${currentPage === totalPages
                                        ? 'opacity-50 cursor-not-allowed'
                                        : ''
                                    }`}
                                onClick={handleNext}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    </>
                )}
                {/* Render nested routes here */}
                <Outlet />
            </div>
        </div>
    );
};

export default InvoiceListing;

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Link, Outlet, useLocation } from 'react-router-dom';

// const InvoiceListing = ({ onDelete }: { onDelete: (id: string) => void }) => {
//     const location = useLocation();

//     // Dummy data for invoices
//     const data = {
//         data: [
//             {
//                 _id: '1',
//                 date: '2024-10-01',
//                 invoiceno: 'INV-001',
//                 customer: 'John Doe',
//             },
//             {
//                 _id: '2',
//                 date: '2024-10-02',
//                 invoiceno: 'INV-002',
//                 customer: 'Jane Smith',
//             },
//             {
//                 _id: '3',
//                 date: '2024-10-03',
//                 invoiceno: 'INV-003',
//                 customer: 'Alice Johnson',
//             },
//             {
//                 _id: '4',
//                 date: '2024-10-04',
//                 invoiceno: 'INV-004',
//                 customer: 'Bob Brown',
//             },
//             {
//                 _id: '5',
//                 date: '2024-10-05',
//                 invoiceno: 'INV-005',
//                 customer: 'Charlie Davis',
//             },
//         ],
//     };

//     return (
//         <div className="flex justify-center items-center h-screen bg-gray-50">
//             <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//                 {/* Invoice Table */}
//                 {location.pathname === '/layout/invoice-list' && (
//                     <>
//                         <div className="flex justify-between items-center mb-6">
//                             <h2 className="text-xl font-semibold">Invoice</h2>
//                             <Link to="add-invoice">
//                                 <button className="bg-green-500 text-white px-4 py-2 rounded">
//                                     Add Invoice
//                                 </button>
//                             </Link>
//                         </div>
//                         <table className="min-w-full bg-white border">
//                             <thead className="min-w-full bg-white border">
//                                 <tr style={{ textAlign: "center" }} className='text-slate-600'>
//                                     <th className="py-2 px-4 border-b">Date</th>
//                                     <th className="py-2 px-4 border-b">Invoice No</th>
//                                     <th className="py-2 px-4 border-b">Customer</th>
//                                     <th className="py-2 px-4 border-b">Action</th>
//                                 </tr>
//                             </thead>
//                             <tbody className="min-w-full bg-white border text-slate-900 ">
//                                 {data?.data?.length > 0 ? (
//                                     data?.data?.map((invoice: any) => (
//                                         <tr key={invoice._id} style={{ textAlign: "center" }} className='text-slate-900'>
//                                             <td className="py-2 px-4 border-b">{invoice.date}</td>
//                                             <td className="py-2 px-4 border-b">{invoice.invoiceno}</td>
//                                             <td className="py-2 px-4 border-b">{invoice.customer}</td>
//                                             <td className="py-2 px-4 border-b">
//                                                 <Link to={`edit-invoice/${invoice._id}`}>
//                                                     <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
//                                                         <FontAwesomeIcon icon={faEdit} />
//                                                     </button>
//                                                 </Link>

//                                                 <button
//                                                     className="bg-red-500 text-white px-4 py-1 rounded"
//                                                     onClick={() => onDelete(invoice._id)}
//                                                 >
//                                                     <FontAwesomeIcon icon={faTrash} />
//                                                 </button>
//                                             </td>
//                                         </tr>
//                                     ))
//                                 ) : (
//                                     <tr>
//                                         <td colSpan={4} className="text-center py-4">
//                                             No invoices found.
//                                         </td>
//                                     </tr>
//                                 )}
//                             </tbody>
//                         </table>
//                     </>
//                 )}
//                 {/* Render nested routes here */}
//                 <Outlet />
//             </div>
//         </div>
//     );
// }

// export default InvoiceListing;

