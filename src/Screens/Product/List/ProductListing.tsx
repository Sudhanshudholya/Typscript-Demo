import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';


const ProductListing = ({ data, onDelete }: any) => {
      
    const location = useLocation();

    return (
        <div className="flex justify-center items-center h-screen bg-gray-50">
            <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
                {/* Products Table */}
                {location.pathname === '/layout/product-list' && (
                    <>
                        <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl font-semibold">Products</h2>
                            <Link to="add-product">
                                <button className="bg-green-500 text-white px-4 py-2 rounded">
                                    Add Product
                                </button>
                            </Link>
                        </div>
                        <table className="min-w-full bg-white border">
                            <thead className="min-w-full bg-white border">
                                <tr style={{ textAlign: "center" }} className='text-slate-600'>
                                    {/* <th className="py-2 px-4 border-b">Photo</th> */}
                                    <th className="py-2 px-4 border-b">Product Name</th>
                                    <th className="py-2 px-4 border-b">Category</th>
                                    <th className="py-2 px-4 border-b">Quantity</th>
                                    <th className="py-2 px-4 border-b">MRP</th>
                                    <th className="py-2 px-4 border-b">Rate</th>
                                    <th className="py-2 px-4 border-b">Action</th>
                                </tr>
                            </thead>
                            <tbody className="min-w-full bg-white border text-slate-900 ">
                                {data?.data?.length > 0 ? (
                                    data?.data?.map((product: any) => (
                                       
                                        <tr key={product._id} style={{ textAlign: "center" }} className='text-slate-900'>
                                            {/* <td className="py-2 px-4 border-b">{product.photo}</td> */}
                                            <td className="py-2 px-4 border-b">{product.product_Name}</td>
                                            <td className="py-2 px-4 border-b">{product.category}</td>
                                            <td className="py-2 px-4 border-b">{product.quantity}</td>
                                            <td className="py-2 px-4 border-b">{product.mrp}</td>
                                            <td className="py-2 px-4 border-b">{product.rate}</td>
                                            <td className="py-2 px-4 border-b">
                                                <Link
                                                    to={`edit-product/${product._id}`}
                                                >
                                                    <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                                                        <FontAwesomeIcon icon={faEdit} />
                                                    </button>
                                                </Link>

                                                <button
                                                    className="bg-red-500 text-white px-4 py-1 rounded"
                                                    onClick={() => onDelete(product._id)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>

                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="text-center py-4">
                                            Loading ...
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </>
                )}
                {/* Render nested routes here */}
                <Outlet />
            </div>
        </div>
    )
}

export default ProductListing;
