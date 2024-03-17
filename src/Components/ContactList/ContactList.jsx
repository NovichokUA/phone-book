import { useSelector } from "react-redux";
import { Contact } from "../Contact/contact.jsx";
import css from "../ContactList/ContactList.module.css";

export default function ContactList() {
  const selectNameFilter = useSelector((state) => state.filters.name);
  const selectContacts = useSelector((state) => state.contacts.items);

  const filterContact = () => {
    return selectContacts.filter((user) =>
      user.name
        .toLowerCase()
        .trim()
        .includes(selectNameFilter.toLowerCase().trim())
    );
  };

  const filteredContact = filterContact();

  return (
    <>
      <ul className={css.list}>
        {filteredContact.map((user) => {
          return (
            <li key={user.id}>
              <Contact user={user} />
            </li>
          );
        })}
      </ul>
    </>
  );
}
