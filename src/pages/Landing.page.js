import { PAGES } from '../constants';
import users     from '../data';
import Wrapper   from '../styles/styled/Landing.styled';
import '../styles/landing.css'

const [, login, , , , ] = PAGES;

const Landing = ({ setPage }) => {
  if (!localStorage.getItem('users'))     localStorage.setItem('users', JSON.stringify(users));
  if (!localStorage.getItem('Likud'))     localStorage.setItem('Likud', '0');
  if (!localStorage.getItem('YeshAtid'))  localStorage.setItem('YeshAtid', '0');
  if (!localStorage.getItem('Haavoda'))   localStorage.setItem('Haavoda', '0');
  if (!localStorage.getItem('Merech'))    localStorage.setItem('Merech', '0');
  if (!localStorage.getItem('voted'))     localStorage.setItem('voted', JSON.stringify([]));



  return (
    <Wrapper>
      <div className='flex-intro'>
        <h1 className='header'>VOTING APP</h1>
        <button onClick={() => setPage(login)}>VOTE</button>
      </div>
    </Wrapper>
  );
};

export default Landing;
