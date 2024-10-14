import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

type CustomerListing = {
    CustomerListing: any,
}

const CustomerListing = ({ data, onDelete }: any) => {

    const location = useLocation()

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">

            {location.pathname !== '/layout/customer-list' ? <Outlet /> : <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-xl font-semibold">Customers</h2>
                    <Link to="add-customer">
                        <button className="bg-green-500 text-white px-4 py-2 rounded">
                            Add Customer
                        </button>
                    </Link>
                </div>

                {/* Table to display customer details */}
                <table className="min-w-full bg-white border">
                    <thead className="min-w-full bg-white border">
                        <tr style={{ textAlign: "center" }} className='text-slate-600'>
                            <th className="py-2 px-4 border-b">Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Contact Number</th>
                            <th className="py-2 px-4 border-b">Role</th>
                            <th className="py-2 px-4 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="min-w-full bg-white border text-slate-900 ">
                        {data?.data?.length > 0 ? (
                            data?.data?.map((customer: any) => (
                                <tr key={customer._id} style={{ textAlign: "center" }} className='text-slate-900'>
                                    <td className="py-2 px-4 border-b">{customer.name}</td>
                                    <td className="py-2 px-4 border-b">{customer.email}</td>
                                    <td className="py-2 px-4 border-b">{customer.contactNumber}</td>
                                    <td className="py-2 px-4 border-b">{customer.role}</td>
                                    <td className="py-2 px-4 border-b">
                                        <Link
                                            to={`edit-customer/${customer._id}`}
                                        >
                                            <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                                                <FontAwesomeIcon icon={faEdit} />
                                            </button>
                                        </Link>

                                        <button
                                            className="bg-red-500 text-white px-4 py-1 rounded"
                                            onClick={() => onDelete(customer._id)}
                                        >
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>

                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={5} className="text-center py-4">
                                    Loading ...
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>}

        </div>
    );
};

export default CustomerListing;



