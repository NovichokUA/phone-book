import { useState, useEffect } from "react";
import ContactList from "./Components/ContactList/ContactList.jsx";
import { SearchBox } from "./Components/SearchBox/SearchBox.jsx";
import { ContactForm } from "./Components/ContactForm/ContactForm.jsx";

import css from "../src/App.module.css";

export function App() {
  const dataUserContact = [];
  const [contacts, setContacts] = useState(() => {
    const savedContact = localStorage.getItem("my-key");
    return savedContact !== null ? JSON.parse(savedContact) : dataUserContact;
  });

  useEffect(() => {
    window.localStorage.setItem("my-key", JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.mainContainer}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
}
