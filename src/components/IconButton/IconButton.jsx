import PropTypes from 'prop-types';
import { ButtonStyled } from './IconButton.styled';

const IconButton = ({ children, onClick, disabled }) => (
  <ButtonStyled type="button" onClick={onClick} disabled={disabled}>
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
