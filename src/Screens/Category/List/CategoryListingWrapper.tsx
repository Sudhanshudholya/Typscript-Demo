import Swal from "sweetalert2";
import CategoryListing from "./CategoryListing";

const CategoryListingWrapper = ({data}:any) => {

  const handleDelete = (categoryId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this category?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          ({ id: categoryId , token });
          Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the customer.', 'error');
        }
      }
    });
  };
 
  return (
    <CategoryListing data={data} onDelete={handleDelete}/>
  )
}
export default CategoryListingWrapper