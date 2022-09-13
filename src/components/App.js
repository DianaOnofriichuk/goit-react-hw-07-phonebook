import './App.css'
import ContactForm from './ContactForm/ContactForm'
import Filter from './Filter/Filter.jsx'
import ContactList from './ContactList/ContactList.jsx'

const App = () => {
  return (
    <div className="phonebook">
      <h1 className="title">Phonebook</h1>
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList className="contacts-list" />
    </div>
  )
}

export default App
