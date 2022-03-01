import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './Counter-hooks';

export const ThemeContext = React.createContext();

function App() {
  const [theme, setTheme] = useState('red');

  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter Class
      <Counter initialCount={0} />

      Counter Hooks
      <CounterHooks initialCount={3}/>
      <button onClick={() => setTheme(prevTheme => {
        return prevTheme === 'red' ? 'blue' : 'red'
      })}>Toggle Theme</button>
    </ThemeContext.Provider>
  );
}

export default App;
