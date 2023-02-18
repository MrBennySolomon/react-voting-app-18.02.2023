import React, { useState } from 'react'
import { Navbar } from '../components';
import '../styles/ThankYou.css';


const ThankYou = ({setPage}) => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [user, setUser] = useState(userData);
  return (
    <>
      <Navbar setPage={setPage} user={user} setUser={setUser} />
      <div className='flex'>
        <h1>Thank You for Voting</h1>
      </div>
    </>
  )
}

export default ThankYou