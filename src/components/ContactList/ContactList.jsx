import './ContactList.css'
import Loader from '../Loader/Loader'
import { useSelector } from 'react-redux'
import {
  useGetContactsQuery,
  useDeleteContactMutation,
} from '../../Redux/reducer'

const ContactList = () => {
  const { data, isLoading: isGetLoading } = useGetContactsQuery()
  const filter = useSelector((state) => state.filter)
  const [
    deleteContact,
    { isLoading: isMutationLoading },
  ] = useDeleteContactMutation()

  const fileredContact = () => {
    try {
      return data.filter(
        (contact) =>
          contact.name.toLowerCase().includes(filter.toLowerCase()) ||
          contact.phone.includes(filter),
      )
    } catch (error) {
      return false
    }
  }

  return (
    <>
      {isGetLoading && <Loader></Loader>}
      {isMutationLoading && <Loader></Loader>}
      {fileredContact() && !isMutationLoading && (
        <ul>
          {fileredContact().map((contact) => {
            return (
              <li className="contacts-item" key={contact.id}>
                {contact.name}:{' '}
                <span className="contacts-number">{contact.phone}</span>
                <button
                  className="button"
                  type="button"
                  onClick={() => {
                    deleteContact(contact.id)
                  }}
                >
                  Delete
                </button>
              </li>
            )
          })}
        </ul>
      )}
    </>
  )
}

export default ContactList
