import React, { useState } from 'react';

const CreateTableForm = () => {
  const [tableName, setTableName] = useState('');
  const [columns, setColumns] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Kirim data ke backend untuk membuat tabel
    const response = await fetch('http://localhost:5000/create-table', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ tableName, columns }),
    });

    const result = await response.json();
    if (response.ok) {
      alert('Table created successfully');
    } else {
      alert('Error creating table: ' + result.error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Table Name:
        <input
          type="text"
          value={tableName}
          onChange={(e) => setTableName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Columns (comma separated, e.g. name INT, age INT):
        <input
          type="text"
          value={columns}
          onChange={(e) => setColumns(e.target.value)}
          required
        />
      </label>
      <br />
      <button type="submit">Create Table</button>
    </form>
  );
};

export default CreateTableForm;
