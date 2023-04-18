import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Heading from './components/Heading';
import Fact from './components/Fact';
import Copyright from './components/Footer';
import Footer from './components/Footer';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Heading />
      <div className="content">
        <Fact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
