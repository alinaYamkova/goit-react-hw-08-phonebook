import React from 'react';
import ContactForm from '../components/ContactForm/FormPhonebook.js';
import ContactList from '../components/ContactList/ContactList.js';
import Filter from '../components/Filter/Filter.js';

const ContactsView = () => {
  return (
    <>
      <h2>Phonebook</h2>
      <ContactForm />
      <Filter />
      <ContactList />
    </>
  );
};

export default ContactsView;
