// App.js
import React, { useState } from 'react';
import './App.css';
import { users } from './users';
import Table from './table';

function App() {
  const [query, setQuery] = useState('');

  const handleEdit = (userId) => {
    console.log(`Details button clicked for user with ID ${userId}`);
  };

  const search = (data) => {
    return data
      .filter(
        (item) =>
          (item.first_name &&
            item.first_name.toLowerCase().includes(query.toLowerCase())) ||
          (item.last_name &&
            item.last_name.toLowerCase().includes(query.toLowerCase())) ||
          (item.email && item.email.toLowerCase().includes(query.toLowerCase())) ||
          (item.age && item.age.toString().includes(query))  
      )
      .sort((a, b) => a.first_name.localeCompare(b.first_name));    
  };

  return (
    <div className="App">
      <div className="center">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <Table data={search(users)} />
    </div>
  );
}

export default App;
