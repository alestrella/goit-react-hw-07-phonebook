import { Formik } from 'formik';
import * as Yup from 'yup';
import NumberFormat from 'react-number-format';
import toast from 'react-hot-toast';
import { nanoid } from 'nanoid';
import {
  Button,
  Label,
  Input,
  FormStyled,
  ErrorText,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, getContacts } from 'redux/contactsSlice';

const contactSchema = Yup.object({
  name: Yup.string()
    .min(2, "C'mon, name is longer than that")
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Name is required'),
  number: Yup.string().required('Phone is required'),
});

const MaskedInput = ({ field, ...props }) => (
  <NumberFormat
    type="tel"
    {...field}
    {...props}
    format="+38 (0##) ###-####"
    mask="_"
    allowEmptyFormatting
  />
);

export const ContactForm = () => {
  const initialValues = {
    name: '',
    number: '',
  };

  const dispatch = useDispatch();
  const NameList = useSelector(getContacts).map(contact =>
    contact.name.toLowerCase()
  );

  const handleSubmit = ({ name, number }, { resetForm }) => {
    const checkDuplicateContact = name => {
      if (NameList.includes(name.toLowerCase())) {
        toast.error(`${name} is already in contacts`);
        return true;
      }
    };

    if (checkDuplicateContact(name)) {
      return;
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    dispatch(addContact(newContact));
    resetForm();
    toast.success('New contact added');
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      {({ handleChange, values: { name, number } }) => (
        <FormStyled>
          <Label>
            Name
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
              placeholder="Jonh Doe"
            />
            <ErrorText name="name" component="div" />
          </Label>
          <Label>
            Number
            <Input
              name="number"
              value={number}
              onChange={handleChange}
              component={MaskedInput}
            />
            <ErrorText name="number" component="div" />
          </Label>
          <Button type="submit">Add</Button>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;
