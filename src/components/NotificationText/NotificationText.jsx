import PropTypes from 'prop-types';
import { Message } from './NotificationText.styled';

const NotificationText = ({ message }) => {
  return <Message>{message}</Message>;
};

export default NotificationText;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
