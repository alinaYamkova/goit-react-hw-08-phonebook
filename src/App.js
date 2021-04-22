import React from "react";
import ContactForm from "./components/ContactForm/FormPhonebook";
import ContactList from "./components/ContactList/ContactList";
import Filter from "./components/Filter/Filter";
import "./App.css";

const App =() => {
  return (
    <div className="App">
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;