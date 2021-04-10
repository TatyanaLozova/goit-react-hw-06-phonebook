import React, { Component } from 'react'
import s from './ContactForm.module.css'
import { connect } from "react-redux";
import {addContacts} from "../../redux/contacts/contacts-actions";


class ContactForm extends Component {
    state = {
        name: "",
        number: "",
    };
    handleChange = e => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;
        return (
            <form className={s.form} onSubmit={this.handleSubmit}>
                <label className={s.label}>
                    Name
                     <input className={s.input} 
                     type="text"
                        name="name"
                        value={name}
                        onChange={this.handleChange}
                       
                    />
                </label>
                <label className={s.label} >
                    Number
          <input className={s.input}
                        type="text"
                        name="number"
                        value={number}
                        onChange={this.handleChange}
                      
                    />
                </label>
                <button className={s.btnAdd} type="submit">
                    Add contact
        </button>
                
            </form>
            

        )
    }
}
const mapStateToProps = (state) => ({
  contacts: state.contacts.items,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(addContacts(contact)),
});
    
export default connect(mapStateToProps,mapDispatchToProps) (ContactForm);