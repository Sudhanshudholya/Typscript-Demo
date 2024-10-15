import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const CategoryListing = ({ data, onDelete }: any) => {
  const location = useLocation();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust this as needed
  const [totalPages, setTotalPages] = useState(1);

  // Calculate total pages
  useEffect(() => {
    if (data?.data?.length > 0) {
      setTotalPages(Math.ceil(data.data.length / itemsPerPage));
    }
  }, [data]);

  // Get current page's categories
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCategories = data?.data?.slice(indexOfFirstItem, indexOfLastItem);

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
      {location.pathname !== '/layout/category-list' ? (
        <Outlet />
      ) : (
        <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Category</h2>
            <Link to="add-category">
              <button className="bg-green-500 text-white px-4 py-2 rounded">
                Add Category
              </button>
            </Link>
          </div>

          {/* Table to display category details */}
          <table className="min-w-full bg-white border">
            <thead className="bg-white border">
              <tr className="text-slate-600 text-center">
                <th className="py-2 px-4 border-b">Category</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody className="text-slate-900 text-center">
              {currentCategories?.length > 0 ? (
                currentCategories.map((category: any) => (
                  <tr key={category._id}>
                    <td className="py-2 px-4 border-b">{category.categoryname}</td>
                    <td className="py-2 px-4 border-b">
                      <Link to={`edit-category/${category._id}`}>
                        <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      {/* <button
                        className="bg-red-500 text-white px-4 py-1 rounded"
                        onClick={() => onDelete(category._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button> */}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={2} className="text-center py-4">
                    Loading...
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Pagination Controls */}
          <div className="flex justify-between mt-4">
            <button
              className={`px-4 py-2 rounded ${currentPage === 1 ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
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
                  className={`mx-1 px-3 py-1 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <button
              className={`px-4 py-2 rounded ${currentPage === totalPages ? 'bg-gray-300' : 'bg-blue-500 text-white'}`}
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryListing;


// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
// import { Link, Outlet, useLocation } from 'react-router-dom';


// const CategoryListing = ({ data , onDelete }: any) => {
//   const location = useLocation();

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-50">
//       {location.pathname !== '/layout/category-list' ? (
//         <Outlet />
//       ) : (
//         <div className="w-full max-w-4xl p-6 bg-white border border-gray-200 rounded-lg shadow-md">
//           <div className="flex justify-between items-center mb-6">
//             <h2 className="text-xl font-semibold">Category</h2>
//             <Link to="add-category">
//               <button className="bg-green-500 text-white px-4 py-2 rounded">
//                 Add Category
//               </button>
//             </Link>
//           </div>

//           {/* Table to display category details */}
          
//           <table className="min-w-full bg-white border">
//             <thead className="bg-white border">
//               <tr className="text-slate-600 text-center">
//                 <th className="py-2 px-4 border-b">Category</th>
//                 <th className="py-2 px-4 border-b">Action</th>
//               </tr>
//             </thead>
//             <tbody className="text-slate-900 text-center">
//               {data?.data.length > 0 ? (
//                 data?.data.map((category: any) => (
//                   <tr key={category._id}>
//                     <td className="py-2 px-4 border-b">{category.categoryname}</td>
//                     <td className="py-2 px-4 border-b">
//                       <Link to={`edit-category/${category._id}`}>
//                         <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
//                           <FontAwesomeIcon icon={faEdit} />
//                         </button>
//                       </Link>
//                       {/* <button
//                         className="bg-red-500 text-white px-4 py-1 rounded"
//                         onClick={() => onDelete(category._id)}
//                       >
//                         <FontAwesomeIcon icon={faTrash} />
//                       </button> */}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan={2} className="text-center py-4">
//                     Loading...
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CategoryListing;