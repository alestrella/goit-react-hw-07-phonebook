import { useGetContactsQuery } from 'redux/contactsSlice';
import Box from 'components/Box';
import ContactItem from 'components/ContactItem';
import NotificationText from 'components/NotificationText';

const ContactList = () => {
  // const dispatch = useDispatch();

  const { data: contacts } = useGetContactsQuery();
  // const filter = useSelector(getFilter);

  // const filterContacts = () =>
  //   contacts.filter(({ name }) => name.toLocaleLowerCase().includes(filter));

  // const visibleContacts = filterContacts();
  // const visibleContacts = contacts;
  // console.log('filteredContacts :>> ', visibleContacts.length);

  return (
    <>
      {contacts.length > 0 ? (
        <Box display="flex" flexDirection="column" as="ul">
          {contacts.map(contact => {
            return <ContactItem key={contact.id} values={contact} />;
          })}
        </Box>
      ) : (
        <NotificationText message="Sorry, there is no contact by that name. Please try again" />
      )}
    </>
  );
};

export default ContactList;
