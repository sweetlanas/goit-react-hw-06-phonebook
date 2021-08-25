import "./App.css";
import { useState, useEffect } from "react";
// import { connect } from 'react-redux';
// import shortId from "shortid";
import PhoneBookList from "./components/PhoneBookList/PhoneBookList";
import PhoneBookForm from "./components/PhoneBookForm/PhoneBookForm";
import PhonebookFilter from "./components/PhoneBookFilter/PhoneBookFilter";
import filterContacts from "./helpers/filterContacts";

function App() {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem("contacts")) ?? []
  );
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const handleSetUserInfo = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;

      case "number":
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  // const handleAddContact = (e) => {
  //   e.preventDefault();
  //   if (contacts.some((el) => el.name === name)) {
  //     alert(` ${name} is already in contacts!`);
  //     setName("");
  //     setNumber("");
  //     return;
  //   }
  //   const contact = {
  //     name,
  //     number,
  //     id: shortId.generate(),
  //   };
  //   setContacts((prevState) => [contact, ...prevState]);
  //   setName("");
  //   setNumber("");
  // };

  // const handleDeleteContact = (e) => {
  //   setContacts(contacts.filter((el) => el.id !== e.target.id));
  // };

  // const handleChangeFilter = (e) => {
  //   setFilter(e.target.value);
  // };

  return (
    <div className="App">
      <h1>Phonebook</h1>
      <PhoneBookForm
        name={name}
        number={number}
        // onAddContact={handleAddContact}
        onSetUserInfo={handleSetUserInfo}
      />
      <h2>Contacts</h2>
      <PhonebookFilter
      // filterValue={filter}
      // onSetFilter={handleChangeFilter}
      />
      <PhoneBookList
      // onDeleteContact={handleDeleteContact}
      // contacts={filterContacts(contacts, filter)}
      />
    </div>
  );
}

export default App;

// export default connect(mapStateToProps, mapDispatchToProps)(App);
