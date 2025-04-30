import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopicForm from './components/TopicForm';
import CreateTableForm from './components/CreateTableForm';
import TopicList from './components/TopicList';

const App = () => {
  return (
    <Router>
      <div className="App">
        <nav className="bg-blue-500 p-4">
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">Tambah Topic</a>
            </li>
            <li>
              <a href="/topics" className="text-white">Daftar Topic</a>
            </li>
            <li>
              <a href="/create/table" className="text-white">Tambah Database</a>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<TopicForm />} />
          <Route path="/topics" element={<TopicList />} />
          <Route path="/create/table" element={<CreateTableForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
