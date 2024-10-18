import Swal from 'sweetalert2';
import { useDeleteProductMutation, useGetProductQuery } from '../../../Slice/ProductSlice';
import ProductListing from './ProductListing';


const ProductListingWrapper = () => {

  const [deleteProductById] = useDeleteProductMutation()
  const token = localStorage.getItem("Token")
  const { data } = useGetProductQuery({ token })

  const handleDelete = (id: string) => {
    
    Swal.fire({
      title: 'Are you sure?',
      text: "Do you really want to delete this product?",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          deleteProductById({ id, token });
          Swal.fire('Deleted!', 'The product has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the product.', 'error');
        }
      }
    });
  };

  return (
    <ProductListing data={data} onDelete={handleDelete} />
  )
}
export default ProductListingWrapper