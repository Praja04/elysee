import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    // Make sure this matches your backend URL
    axios
      .get('http://localhost:5000/topics') // Correct endpoint
      .then((response) => {
        setTopics(response.data);
      })
      .catch((error) => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  return (
    <div>
      <h1>Topics</h1>
      <ul>
        {topics.map((topic, index) => (
          <li key={index}>
            <strong>{topic.topic}</strong>: {topic.data}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopicList;
