import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'Redux/operations';
import { selectContacts } from 'Redux/selectors';
import { FormContainer, FormTitle, Input, Button } from './ContactForm.styled';

export const ContactForm = () => {
    const contacts = useSelector(selectContacts);
    const dispatch = useDispatch();

    const handleSubmit = event => {
        event.preventDefault();
        const { name, phone } = event.target.elements;

        contacts.find(contactItem =>
            contactItem.name.toLowerCase() === name.value.toLowerCase())
            ? alert(`${name.value} is already in contacts`)
            : dispatch(
                addContact({
                    name: name.value,
                    phone: phone.value
                })
            )
        name.value = '';
        phone.value = '';
    };

    return (
        <FormContainer>
            <form onSubmit={handleSubmit}>
                <FormTitle>Name</FormTitle>
                <Input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />

                <FormTitle>Number</FormTitle>
                <Input
                    type="tel"
                    name="phone"
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                />

                <Button type="submit">Add contact</Button>
            </form>
        </FormContainer>
    );
};