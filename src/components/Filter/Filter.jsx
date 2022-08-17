import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilter } from 'redux/filterSlice';
import Box from 'components/Box';
import { Field, Label } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Box mb={5}>
      <Label>
        Find contacts by name
        <Field
          value={filter}
          onChange={handleFilter}
          placeholder="Enter name"
        />
      </Label>
    </Box>
  );
};

export default Filter;
