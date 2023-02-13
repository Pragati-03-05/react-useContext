import './style.css';
import CompC from './CompC';
import React from 'react';
import { best } from './App';
export default function CompB() {
  const tt = React.useContext(best);
  console.log('tttttttttt', tt);
  return (
    <div className="App">
      {tt?.name}
      <CompC />
    </div>
  );
}
