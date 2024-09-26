import Swal from 'sweetalert2';
import { useDeleteProductMutation, useGetProductQuery } from '../../../Slice/ProductSlice';
import ProductListing from './ProductListing';

ProductListing

const ProductListingWrapper = () => {

  const [deleteProductById] = useDeleteProductMutation()
  const token = localStorage.getItem("Token")
  const {data} = useGetProductQuery({token})
  

  const handleDelete = async (productId: string) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this customer?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await deleteProductById({ id: productId, token });
          Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the customer.', 'error');
        }
      }
    });
  };
 
  return (
    <ProductListing  data={data} onDelete={handleDelete}/>
  )
}
export default ProductListingWrapper