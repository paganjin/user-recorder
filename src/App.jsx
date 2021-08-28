import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';


function App() {
  const [usersList, setUsersList] = useState([])

  const addUserHandle = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { name: uName, age: uAge, id: Math.random().toString }];
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandle} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
