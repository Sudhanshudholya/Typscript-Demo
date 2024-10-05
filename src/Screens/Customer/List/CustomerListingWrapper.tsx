import Swal from 'sweetalert2';
import { useDeleteCustomerMutation, useGetCustomerQuery } from '../../../Slice/Customerslice'
import CustomerListing from './CustomerListing'

const CustomerListingWrapper = () => {

  const [deleteCustomerById] = useDeleteCustomerMutation()
  const token = localStorage.getItem("Token")
  const { data } = useGetCustomerQuery({ token })

  const handleDelete = async (customerId: string) => {
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
          await deleteCustomerById({ id: customerId, token });
          Swal.fire('Deleted!', 'The customer has been deleted.', 'success');
        } catch (error) {
          Swal.fire('Error!', 'There was a problem deleting the customer.', 'error');
        }
      }
    });
  };

  return (
    <CustomerListing data={data} onDelete={handleDelete} />
  )
}
export default CustomerListingWrapper