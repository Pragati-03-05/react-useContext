import React from 'react';
import { createContext } from 'react';
import CompA from './CompA';
import CompB from './CompB';
export const test = createContext();
export const best = createContext();
export default function App() {
  const obj = {
    name: 'pragati',
  };
  const obj2 = {
    name: 'Preeti',
  };
  return (
    <div className="App">
      <test.Provider value={obj}>
        <CompA />
        <best.Provider value={obj2}>
          <CompB />
        </best.Provider>
      </test.Provider>
    </div>
  );
}
