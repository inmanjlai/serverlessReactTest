import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios';
import './App.css'

const App = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('https://express-app-y6ib6s6g5a-uc.a.run.app/users').then((response) => {
      setItems(response.data);
    });
  }, []);

  return (
    <>
      {items.map((item) => (
        <Link to={`/users/${item.id}`} className='user-component' key={item.id}>{item.firstName}</Link>
      ))}
    </>
  );
};

export default App;