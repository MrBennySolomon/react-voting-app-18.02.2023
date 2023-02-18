import React, { useState } from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';

const Vote = ({ setPage }) => {
  const [finish, setFinish] = useState(false);
  // let isFinnishVoting = false;
  const [landing, , , , admin] = PAGES;
  const userData = JSON.parse(localStorage.getItem('userData'));
  const voted = JSON.parse(localStorage.getItem('voted'));

  let tempParty = '';
  let votedParty = '';
  // if ((voted.length === 0) || !(voted.find((name) => name === userData.name))) {
  //   const party = localStorage.getItem('Likud');
  //   voted.push(userData.name);
  //   localStorage.setItem('Likud', Number(party) + 1);
  //   localStorage.setItem('voted', JSON.stringify(voted));
  // }else{
  //   console.log('YOU ALREADY VOTED');
  // }
  const doneHandler = (e) => {
    votedParty = Number(localStorage.getItem(tempParty));
    voted.push({name: userData.name, party: tempParty});
    localStorage.setItem(tempParty, votedParty + 1);
    localStorage.setItem('voted', JSON.stringify(voted));
    userData.type === 'admin' ? setPage(admin) : setPage(landing);
  }

  const changeHandler = () => setFinish(false);

  const clickHandler = (e) => {
    switch(e.target.getAttribute('class')) {
      case 'party-likud':    tempParty = 'Likud'; break;
      case 'party-yeshatid': tempParty = 'YeshAtid'; break;
      case 'party-haavoda':  tempParty = 'Haavoda'; break;
      case 'party-merech':    tempParty = 'Merech'; break;
      default: throw new Error('SOMETHING WENT WRONG VOTING SWITCH CASE');
    }
    ((voted.length > 0) && (voted.find((name) => name === userData.name))) ? setFinish(false) : setFinish(true);
  }
    
    // const partyLikud = Number(localStorage.getItem('Likud'));
    // const partyYeshatid = Number(localStorage.getItem('YeshAtid'));
    // const partyHaavoda = Number(localStorage.getItem('Haavoda'));
    // const partyMerech = Number(localStorage.getItem('Merech'));
    // const voted = JSON.parse(localStorage.getItem('voted'));

    // switch(e.target.getAttribute('class')) {
    //   case 'party-likud':
    //     // party = localStorage.getItem('Likud');
    //     // voted = JSON.parse(localStorage.getItem('voted'));
    //     //voted.push({name: userData.name, party: 'Likud'});
    //     //localStorage.setItem('Likud', Number(party) + 1);
    //     //localStorage.setItem('voted', JSON.stringify(voted));
    //     userData.type === 'admin' ? setPage(admin) : setFinish(true);
    //     break;
    //   case 'party-yeshatid':
    //     // party = localStorage.getItem('YeshAtid');
    //     // voted = JSON.parse(localStorage.getItem('voted'));
    //     //voted.push({name: userData.name, party: 'YeshAtid'});
    //     //localStorage.setItem('YeshAtid', Number(party) + 1);
    //     //localStorage.setItem('voted', JSON.stringify(voted));
    //     userData.type === 'admin' ? setPage(admin) : setFinish(true);
    //     break;
    //   case 'party-haavoda':
    //     // party = localStorage.getItem('Haavoda');
    //     // voted = JSON.parse(localStorage.getItem('voted'));
    //     // voted.push({name: userData.name, party: 'Haavoda'});
    //     // localStorage.setItem('Haavoda', Number(party) + 1);
    //     // localStorage.setItem('voted', JSON.stringify(voted));
    //     userData.type === 'admin' ? setPage(admin) : setFinish(true);
    //     break;
    //   case 'party-merech':
    //     // party = localStorage.getItem('Merech');
    //     // voted = JSON.parse(localStorage.getItem('voted'));
    //     // voted.push({name: userData.name, party: 'Merech'});
    //     // localStorage.setItem('Merech', Number(party) + 1);
    //     // localStorage.setItem('voted', JSON.stringify(voted));
    //     userData.type === 'admin' ? setPage(admin) : setFinish(true);
    //     break;
    //   default:
    //     throw new Error('SOMETHING WENT WRONG VOTING SWITCH CASE');
    // }

  return (
    <div className='vote-div'>
      <div className='cards'>
        <button onClick={clickHandler} className='party-likud'></button>
        <button onClick={clickHandler} className='party-yeshatid'></button>
        <button onClick={clickHandler} className='party-haavoda'></button>
        <button onClick={clickHandler} className='party-merech'></button>
      </div>
      <div className='buttons'>
        <button onClick={doneHandler} className={finish ? 'done' : 'done hidden'}>DONE</button>
        <button onClick={changeHandler} className={finish ? 'change' : 'change hidden'}>CHANGE VOTED</button>
      </div>

    </div>
  )
}

export default Vote;