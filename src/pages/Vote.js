import React, { useState } from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';

const Vote = ({ setPage }) => {
  const [finish, setFinish] = useState(false);
  const [landing, , , , admin] = PAGES;
  let tempParty = '';
  const voted = JSON.parse(localStorage.getItem('voted'));
  const userData = JSON.parse(localStorage.getItem('userData'));
  
  const clickHandler = (e) => {
    tempParty = e.target.getAttribute('class').toString();
    localStorage.setItem('tempParty', tempParty);
    setFinish(true);    
  }

  const doneHandler = (e) => {
    if (!voted.some(element => element.name === userData.name)) {
      const votedParty = localStorage.getItem('tempParty');
      const voteCount = localStorage.getItem(votedParty);
      voted.push({name: userData.name, party: votedParty});
      localStorage.setItem(votedParty, JSON.stringify(Number(voteCount) + 1));
      localStorage.setItem('voted', JSON.stringify(voted));
      userData.type === 'admin' ? setPage(admin) : setPage(landing);
    }
  }

  const changeHandler = () => setFinish(false);

  return (
    <div className='vote-div'>
      <div className='cards'>
        <button onClick={clickHandler} className='Likud'></button>
        <button onClick={clickHandler} className='YeshAtid'></button>
        <button onClick={clickHandler} className='Haavoda'></button>
        <button onClick={clickHandler} className='Merech'></button>
      </div>
      <div className='buttons'>
        <button onClick={doneHandler} className={finish ? 'done' : 'done hidden'}>DONE</button>
        <button onClick={changeHandler} className={finish ? 'change' : 'change hidden'}>CHANGE VOTED</button>
      </div>

    </div>
  )
}

export default Vote;