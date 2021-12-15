import { useState } from 'react';
import axios from 'axios';

function findCompanyName(companies, toFind) {
  for (let i = 0; i < companies.length; i++) {
    let currentcompany = companies[i];
    if (currentcompany.uri === toFind) return currentcompany.name;
  }
  return 'not found';
}

const Users = () => {
  const [users, setUsers] = useState([]);
  const [companies, setCompanies] = useState([]);

  function handleClick() {
    getUsers();
    getCompanies();
  }

  async function getUsers() {
    await axios.get('http://localhost:5000/users').then((res) => {
      setUsers(res.data);
    });
  }
  async function getCompanies() {
    await axios.get('http://localhost:5000/companies').then((res) => {
      setCompanies(res.data);
    });
  }
  return [
    <button onClick={handleClick} className="btn">
      Show Users
    </button>,

    <div>
      {users.map((user) => (
        <div className="user_item">
          <h3> {user.name} </h3>
          <p>
            {' '}
            <span className="email">Email: </span> {user.email}{' '}
          </p>
          <p>
            {' '}
            <span className="company">Company: </span>{' '}
            {findCompanyName(companies, user.uris.company)}{' '}
          </p>
        </div>
      ))}
    </div>,
  ];
};

export default Users;
