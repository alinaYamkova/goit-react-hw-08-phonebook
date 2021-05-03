import React from "react";
import ContactForm from "../Components/ContactForm/FormPhonebook";
import ContactList from "../Components/ContactList/ContactList";
import Filter from "../Components/Filter/Filter";

const ContactsView = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;