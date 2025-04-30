import React, { useState } from 'react';
import axios from 'axios';

const TopicForm = () => {
  // State untuk input data topic dan JSON
  const [topic, setTopic] = useState('');
  const [jsonData, setJsonData] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  // Fungsi untuk handle submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // // Validasi format JSON
    // try {
    //   JSON.parse(jsonData); // Coba parse JSON
    // } catch (e) {
    //   setError('Invalid JSON format!');
    //   return;
    // }

    // // Reset error jika JSON valid
    // setError('');
    
    // Kirim data ke backend (API)
    try {
      const response = await axios.post('http://localhost:5000/topics', {
        topic,
        data: jsonData,
      });

      if (response.status === 200) {
        setMessage('Topic berhasil disimpan!');
        setTopic('');
        setJsonData('');
      }
    } catch (err) {
      setError('Terjadi kesalahan saat menyimpan data.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-xl font-bold mb-4">Tambah Topic dan Data JSON</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Topic</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2">Data JSON</label>
          <textarea
            value={jsonData}
            onChange={(e) => setJsonData(e.target.value)}
            className="w-full p-2 border rounded"
            rows="6"
            placeholder=''
            required
          />
        </div>

        <div className="mb-4">
          {error && <p className="text-red-500">{error}</p>}
          {message && <p className="text-green-500">{message}</p>}
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Simpan Topic
        </button>
      </form>
    </div>
  );
};

export default TopicForm;
