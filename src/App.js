import './App.css';
import { useEffect, useState } from 'react';  // Import useState
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [users, setUsers] = useState([]);  // Initialize users as an array

  useEffect(() => {
    // Use http instead of https for localhost
    axios.get('http://localhost:5000/getUsers')
    .then(response => setUsers(response.data))  // Set the data to users
      .catch(err => console.log('Error:', err));  // Proper error logging
  }, []);  // Dependency array is empty, so it runs only once

  return (
    <div className='w-100 vh-100 justify-content-center align-items-center'>
     <div className='w-50'>
     <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (  
              <tr>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
     </div>
    </div>
  );
}

export default App;
