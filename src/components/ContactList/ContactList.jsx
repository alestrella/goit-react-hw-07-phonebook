import { useMemo } from 'react';
import { useGetContactsQuery } from 'redux/contactsSlice';
import { useSelector } from 'react-redux';
import { getFilter } from 'redux/filterSlice';
import Box from 'components/Box';
import ContactItem from 'components/ContactItem';
import NotificationText from 'components/NotificationText';
import Filter from 'components/Filter';

const ContactList = () => {
  const { data: contacts } = useGetContactsQuery();
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    return (
      contacts?.filter(({ name }) =>
        name.toLocaleLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [contacts, filter]);

  return (
    <>
      <Filter />
      {filteredContacts.length > 0 ? (
        <Box display="flex" flexDirection="column" as="ul">
          {filteredContacts.map(contact => {
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
