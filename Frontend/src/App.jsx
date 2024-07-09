import React, { useState } from 'react';

const Data = ({ entities }) => {
  return (
    <div>
      <h2>Company List</h2>
      <ul>
        {entities.map((entity, index) => (
          <li key={index}>
            {entity.name} - ${entity.profit}
          </li>
        ))}
      </ul>
    </div>
  );
};

const AddEntityForm = ({ onAddEntity }) => {
  const [name, setName] = useState('');
  const [profit, setProfit] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onAddEntity({ name, profit });
    setName('');
    setProfit('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label style={{ marginRight: '10px' }}>Profit:</label>
        <input
          type="number"
          value={profit}
          onChange={(e) => setProfit(e.target.value)}
          required
          style={{ marginRight: '10px' }}
        />
      </div>
      <button type="submit" style={{ marginTop: '10px' }}>Add Entity</button>
    </form>
  );
};

const App = () => {
  const [entities, setEntities] = useState([]);

  const addEntity = (entity) => {
    // Assuming you have an API endpoint to add entities
    fetch('/api/entities', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(entity),
    })
      .then((response) => response.json())
      .then((newEntity) => {
        setEntities([...entities, newEntity]);
      })
      .catch((error) => {
        console.error('Error adding entity:', error);
      });
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
      <h1>Profitable business companies of the year</h1>
      <AddEntityForm onAddEntity={addEntity} />
      <Data entities={entities} />
    </div>
  );
};

export default App;