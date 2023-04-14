import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectFilteredContacts, selectIsLoading } from 'Redux/selectors';
import { fetchContacts, deleteContact } from 'Redux/operations';
import { ListItem, DeleteBtn, List } from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';

export const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectFilteredContacts);
    const isLoading = useSelector(selectIsLoading);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    const filtered = contacts.filter(contactItem =>
        contactItem.name.toLowerCase().includes(filter)
    );

    const deleteContacts = id => {
        return dispatch(deleteContact(id));
    };

    return (
        <>
            {isLoading && <Loader />}
            {filtered?.length > 0 && (
                <List>
                    {filtered.map(({ id, name, phone }) => (
                        <ListItem key={id}>
                            {name}: {phone}
                            <DeleteBtn
                                type="button"
                                onClick={() => deleteContacts(id)}
                            >
                                Delete
                            </DeleteBtn>
                        </ListItem>
                    ))}
                </List>
            )} 
        </>
    );
};