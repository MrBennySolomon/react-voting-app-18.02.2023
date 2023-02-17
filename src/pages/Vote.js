import React, { useState } from 'react'
import '../styles/Vote.css';
import { PAGES } from '../constants';

const Vote = ({ setPage }) => {
  const [finish, setFinish] = useState(false);
  // let isFinnishVoting = false;
  const [landing, , , , admin] = PAGES;
  const userData = JSON.parse(localStorage.getItem('userData'));
  let voted = JSON.parse(localStorage.getItem('voted'));
  // if ((voted.length === 0) || !(voted.find((name) => name === userData.name))) {
  //   const party = localStorage.getItem('Likud');
  //   voted.push(userData.name);
  //   localStorage.setItem('Likud', Number(party) + 1);
  //   localStorage.setItem('voted', JSON.stringify(voted));
  // }else{
  //   console.log('YOU ALREADY VOTED');
  // }

  const changeHandler = () => {
    const votedArr = JSON.parse(localStorage.getItem('voted'));
    voted = votedArr.find((user) => user.name === userData.name);
    const party = localStorage.getItem(voted.party);
    localStorage.setItem(voted.party, Number(party) - 1);
    let newArray = votedArr.filter( (item) => {
      if(item.name !== userData.name){
           return item;
      }else{
      	return '';
      }
    });
    //localStorage.removeItem('voted');
    localStorage.setItem('voted',newArray);
    setFinish(false);
  }
  const clickHandler = (e) => {
    if ((voted.length > 0) && (voted.find((name) => name === userData.name))) {
      setFinish(true);
    }
    let party = '';
    switch(e.target.getAttribute('class')) {
      case 'party-likud':
        party = localStorage.getItem('Likud');
        voted = JSON.parse(localStorage.getItem('voted'));
        voted.push({name: userData.name, party: 'Likud'});
        localStorage.setItem('Likud', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        userData.type === 'admin' ? setPage(admin) : setFinish(true);
        break;
      case 'party-yeshatid':
        party = localStorage.getItem('YeshAtid');
        voted = JSON.parse(localStorage.getItem('voted'));
        voted.push({name: userData.name, party: 'YeshAtid'});
        localStorage.setItem('YeshAtid', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        userData.type === 'admin' ? setPage(admin) : setFinish(true);
        break;
      case 'party-haavoda':
        party = localStorage.getItem('Haavoda');
        voted = JSON.parse(localStorage.getItem('voted'));
        voted.push({name: userData.name, party: 'Haavoda'});
        localStorage.setItem('Haavoda', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        userData.type === 'admin' ? setPage(admin) : setFinish(true);
        break;
      case 'party-merech':
        party = localStorage.getItem('Merech');
        voted = JSON.parse(localStorage.getItem('voted'));
        voted.push({name: userData.name, party: 'Merech'});
        localStorage.setItem('Merech', Number(party) + 1);
        localStorage.setItem('voted', JSON.stringify(voted));
        userData.type === 'admin' ? setPage(admin) : setFinish(true);
        break;
      default:
        throw new Error('SOMETHING WENT WRONG VOTING SWITCH CASE');
    }
  }

  return (
    <div className='vote-div'>
      <div className='cards'>
        <button onClick={clickHandler} className='party-likud'></button>
        <button onClick={clickHandler} className='party-yeshatid'></button>
        <button onClick={clickHandler} className='party-haavoda'></button>
        <button onClick={clickHandler} className='party-merech'></button>
      </div>
      <div className='buttons'>
        <button onClick={() => setPage(landing)} className={finish ? 'done' : 'done hidden'}>DONE</button>
        <button onClick={changeHandler} className={finish ? 'change' : 'change hidden'}>CHANGE VOTED</button>
      </div>

    </div>
  )
}

export default Vote;