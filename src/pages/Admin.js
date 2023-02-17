import '../styles/Admin.css';
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import { PAGES } from '../constants';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};
// const [landing, login, main, vote, admin] = PAGES;

const Admin = ({ setPage }) => {
  const users = JSON.parse(localStorage.getItem('users'));

  return (
    <>
      <div className='graph'>
        <Doughnut data={data} />
      </div>
      <table>
        <tbody>
          {users.map((user) => {
            return <tr key={user.id}><td>{user.name}</td><td>{user.type}</td><td><button className='reset'>reset vote</button></td></tr>
          })}
        </tbody>
      </table>
    </>
  )
}

export default Admin;