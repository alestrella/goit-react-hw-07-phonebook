import PropTypes from 'prop-types';
import { ButtonStyled } from './IconButton.styled';

const IconButton = ({ children, onClick }) => (
  <ButtonStyled type="button" onClick={onClick}>
    {children}
  </ButtonStyled>
);

IconButton.defaultProps = {
  onClick: () => null,
  children: null,
};

IconButton.propsTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

export default IconButton;
