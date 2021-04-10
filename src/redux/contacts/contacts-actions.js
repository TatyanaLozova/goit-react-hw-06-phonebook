import { v4 as uuidv4 } from "uuid";
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('contacts/add', values => ({
    payload: {
        id: uuidv4(),
        name: values.name,
        number: values.number
    },
}));

const deleteContacts = createAction('contacts/delete');

const filterContacts = createAction('contacts/filterContacts');


export { addContacts, deleteContacts, filterContacts };
