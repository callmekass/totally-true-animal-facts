import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Heading from './components/Heading';
import Fact from './components/Fact';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div id="App">
      <Heading />
      <Fact />
    </div>
  );
}

export default App;
