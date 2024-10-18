import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ProductListing = ({ data, onDelete }: any) => {
  const location = useLocation();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust this to control how many products per page
  const [totalPages, setTotalPages] = useState(1);

  // Calculate total pages
  useEffect(() => {
    if (data?.data?.length > 0) {
      setTotalPages(Math.ceil(data.data.length / itemsPerPage));
    }
  }, [data]);

  // Get current page's products
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = data?.data?.slice(indexOfFirstItem, indexOfLastItem);

  // Pagination handlers
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-50">
      <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
        {/* Products Table */}
        {location.pathname === "/layout/product-list" && (
          <>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Products</h2>
              <Link to="add-product">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Add Product
                </button>
              </Link>
            </div>
            <table className="min-w-full bg-slate border">
              <thead className="min-w-full bg-gray-500">
                <tr style={{ textAlign: "center" }} className="text-white">
                  {/* <th className="py-2 px-4 border-b">Photo</th> */}
                  <th className="py-2 px-4 border-b capitalize"> Name</th>
                  <th className="py-2 px-4 border-b">Category</th>
                  {/* <th className="py-2 px-4 border-b">Quantity</th> */}
                  <th className="py-2 px-4 border-b">MRP</th>
                  <th className="py-2 px-4 border-b">Rate</th>
                  <th className="py-2 px-4 border-b">Action</th>
                </tr>
              </thead>
              <tbody className="min-w-full bg-white border text-slate-600 ">
                {currentProducts?.length > 0 ? (
                  currentProducts.map((product: any) => (
                    <tr
                      key={product._id}
                      style={{ textAlign: "center" }}
                      className="text-slate-900"
                    >
                      <td className="py-2 px-4 border-b">
                        {product.product_Name}
                      </td>
                      <td className="py-2 px-4 border-b capitalize">{product.category}</td>
                      {/* <td className="py-2 px-4 border-b">{product.quantity}</td> */}
                      <td className="py-2 px-4 border-b">{product.mrp}</td>
                      <td className="py-2 px-4 border-b">{product.rate}</td>
                      <td className="py-2 px-4 border-b">
                        <Link to={`edit-product/${product._id}`}>
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

            {/* Pagination Controls */}
            <div className="flex justify-between mt-4">
              <button
                className={`px-4 py-2 rounded ${
                  currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"
                }`}
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <div className="flex items-center">
                {Array.from({ length: totalPages }, (_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className={`mx-1 px-3 py-1 rounded ${
                      currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
              <button
                className={`px-4 py-2 rounded ${
                  currentPage === totalPages
                    ? "bg-gray-300"
                    : "bg-blue-500 text-white"
                }`}
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                // disabled={currentPage === 1}
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

export default ProductListing;
