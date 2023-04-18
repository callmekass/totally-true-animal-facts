import './Fact.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

function Fact() {
  const [fact, setFact] = useState<string>(
    'The war between white and brown chickens can be dated back to the great cock fight of 1432.'
  );
  const [factNum, setFactNum] = useState<number>(647);

  return (
    <div className="Fact">
      <div className="factNumber">Fact #{factNum}</div>
      <div className="animalFact">
        <p>{fact}</p>
      </div>
      <button type="button">
        Get New Fact <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </div>
  );
}

export default Fact;
