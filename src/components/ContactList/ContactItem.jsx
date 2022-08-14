import PropTypes from 'prop-types';
import Avatar from 'react-avatar';
import IconButton from 'components/IconButton';
import { Item, Name, Number } from './ContactItem.styled';
import { MdDeleteForever } from 'react-icons/md';

export const ContactItem = ({ name, number, handleDelete }) => {
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
      <IconButton onClick={handleDelete}>
        <MdDeleteForever size={24} />
      </IconButton>
    </Item>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
