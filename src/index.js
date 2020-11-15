import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = []
  // {id: "todo-0" , name: "Brush your teeth" , completed : true},
  // {id: "todo-1" , name: "Bring Milk" , completed : false},
  // {id: "todo-2" , name: "Play Valorant" , completed : true},


ReactDOM.render(
  
    <App tasks={DATA} />,
  document.getElementById('root')
);


