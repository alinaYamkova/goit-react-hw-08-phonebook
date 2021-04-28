import React from 'react';
import Main from '../components/Main';
import Section from '../components/Section';
import Title from '../components/Title';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

const ContactsView = () => {
  return (
    <Main>
      <Section>
        <Title title="Add contacts" />
        <ContactForm />
        <Title title="Find contacts" />
        <Filter />
        <Title title="Contacts" />
        <ContactList />
      </Section>
    </Main>
  );
};

export default ContactsView;