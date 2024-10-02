import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link, Outlet, useLocation } from 'react-router-dom';

// type Category = {
//   _id: string;
//   name: string;
// };

// type Props = {
//   categoryData: Category[];
//   onDelete: (id: string) => void;
// };

const CategoryListing = ({ data , onDelete }: any) => {
  const location = useLocation();

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
              {data?.data.length > 0 ? (
                data?.data.map((category: any) => (
                  <tr key={category._id}>
                    <td className="py-2 px-4 border-b">{category.categoryname}</td>
                    <td className="py-2 px-4 border-b">
                      <Link to={`edit-category/${category._id}`}>
                        <button className="mr-2 bg-blue-500 text-white px-4 py-1 rounded">
                          <FontAwesomeIcon icon={faEdit} />
                        </button>
                      </Link>
                      <button
                        className="bg-red-500 text-white px-4 py-1 rounded"
                        onClick={() => onDelete(category._id)}
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
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
        </div>
      )}
    </div>
  );
};

export default CategoryListing;

