import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import Avatar from 'react-avatar';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import IconButton from 'components/IconButton';
import { Item, Name, Number } from './ContactItem.styled';
import { MdDeleteForever } from 'react-icons/md';

const ContactItem = ({ values: { id, name, number } }) => {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();

  const handleDelete = async id => {
    try {
      await deleteContact(id);
      toast('Bye... Deleted contact', {
        icon: '😢',
      });
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };

  return (
    <Item>
      <Avatar
        name={name}
        size="36"
        textSizeRatio={2.8}
        round={true}
        color="#1E1E1E"
        fgColor="#BB86FC"
      />
      <Name>{name}:</Name>
      <Number>{number}</Number>
      <IconButton onClick={() => handleDelete(id)} disabled={isLoading}>
        <MdDeleteForever size={24} />
      </IconButton>
    </Item>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  values: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
