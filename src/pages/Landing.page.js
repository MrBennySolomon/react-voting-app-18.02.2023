import { PAGES } from '../constants';
import users from '../data';
import Wrapper from '../styles/styled/Landing.styled';
import '../styles/landing.css'

const [, login, , , ] = PAGES;

const Landing = ({ setPage }) => {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('Likud', '0');
  localStorage.setItem('YeshAtid', '0');
  localStorage.setItem('Haavoda', '0');
  localStorage.setItem('Merech', '0');


  localStorage.setItem('voted', JSON.stringify([]));



  return (
    <Wrapper>
      <div className='flex-intro'>
        <h1>VOTING APP</h1>
        <button onClick={() => setPage(login)}>
          VOTE
        </button>
      </div>
    </Wrapper>
  );
};

export default Landing;
