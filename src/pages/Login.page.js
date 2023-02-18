import { useState } from "react";
import users from '../data';
// import { validateEmail } from '../utils/validateEmail';
import { PAGES } from '../constants';
import { FormRow, Modal } from '../components';
import Wrapper from '../styles/styled/Login.styled';
import '../styles/login.css';

const initialState = {
  id: '',
  name: '',
  email: '',
  password: '',
  type: ''
};

const [landing, , , vote, , ] = PAGES;

const Login = ({ setPage }) => {
  const [values, setValues] = useState(initialState);
  let isLoading = false;
  const [isError, setIsError] = useState(false);
  const [errorMessages, setErrorMessages] = useState([]);
  const [nameError, setNameError] = useState(false);
  let emailError = false;
  let passwordError = false;

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [name]: value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = values;

    setNameError(false);
    // if (!name) {
    //   const msg = 'Please enter your name';
    //   handleError(msg, setNameError);
    // } else if (!email || validateEmail(email)) {
    //   const msg = 'Please enter a valid email';
    //   handleError(msg, setEmailError);
    // } else if (!password) {
    //   const msg = 'Please enter a password';
    //   handleError(msg, setPasswordError);
    // }

    const validUser = users.find((user) => user.name === name && user.email === email && user.password === password);

    if (!validUser) {
      handleError('USER NOT FOUND', setNameError);
    }else{
      localStorage.setItem('userData', JSON.stringify(validUser));
      setPage(vote);
      
    }
  };

  const handleError = (msg, setMethod) => {
    setMethod(true);
    const messages = errorMessages;
    messages.push(msg);
    setErrorMessages(messages);
    setIsError(true);
  };

  const closeModal = () => {
    setIsError(false);
    setErrorMessages([]);
  };

  return (
    <Wrapper className='full-page'>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
        <FormRow
          error={nameError}
          type='text'
          name='name'
          value={values.name}
          handleChange={handleChange}
        />
        {/* email field */}
        <FormRow
          error={emailError}
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          error={passwordError}
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button type='submit' disabled={isLoading}>
          {isLoading ? 'loading...' : 'Log In'}
        </button>
        <button onClick={() => setPage(landing)}>
          Back
        </button>
      </form>
      {isError && (
        <Modal
          closeModal={closeModal}
          messages={errorMessages} />
      )}
    </Wrapper>
  );
};

export default Login;