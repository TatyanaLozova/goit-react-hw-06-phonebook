import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import s from './ContactList.module.css'
import {deleteContacts} from "../../redux/contacts/contacts-actions";


const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul >
      {contacts.map(({ id, name, number }) => (
        <li className={s.contact} key={id}>
              <p>{name}: </p>
              <p>{number}</p>
          <button className={s.btn}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

const filterContacts = (allContacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return allContacts.filter((contact) =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

const mapStateToProps = ({contacts: { items, filter } }) => ({
  contacts: filterContacts(items, filter),
});

const mapDispatchToProps = (dispatch) => ({
  onDeleteContact: (id) => dispatch(deleteContacts(id)),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactList);