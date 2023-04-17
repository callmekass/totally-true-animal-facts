import './Fact.css';
import { useState, useEffect } from 'react';

function Fact() {
  const [fact, setFact] = useState(
    'The war between white and brown chickens can be dated back to the great cock fight of 1432.'
  );

  return (
    <div className="Fact">
      <p>{fact}</p>
      <button type="button">Get New Fact</button>
    </div>
  );
}

export default Fact;
