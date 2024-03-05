import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./User.css"; // Import the CSS file for styling

function UserTable() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user details from backend API when the component mounts
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('YOUR_BACKEND_API_ENDPOINT');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user details:', error);
      // Handle error, e.g., display error message to the user
    }
  };

  return (
    <div className="user-table-container">
      <h2>User Details</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;
