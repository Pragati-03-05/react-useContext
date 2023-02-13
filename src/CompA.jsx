import './style.css';
import CompB from './CompB';
import React from 'react';
import { test } from './App';
export default function CompA() {
  const data = React.useContext(test);
  return (
    <div className="App">
      {data.name}
      <CompB />
    </div>
  );
}
