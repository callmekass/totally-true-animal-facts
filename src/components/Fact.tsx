import './Fact.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRotateRight } from '@fortawesome/free-solid-svg-icons';

function Fact() {
  const [fact, setFact] = useState<string>('');
  const [factNum, setFactNum] = useState<number>(0);

  useEffect(() => {
    setFact(
      'The war between white and brown chickens can be dated back to the great cock fight of 1432.'
    );
    setFactNum(100);
  }, []);

  return (
    <div className="Fact">
      <a href="https://github.com/callmekass/totally-true-animal-facts">
        View Source Code
      </a>
      <a href="https://github.com/callmekass/totally-true-animal-facts">
        Donate to Animals in Need
      </a>
      <div className="factNumber">Fact #{factNum}</div>
      <div className="animalFact">
        <p>{fact}</p>
      </div>
      <button type="button" className="btn" onClick={__fetchFact}>
        Get New Fact <FontAwesomeIcon icon={faRotateRight} />
      </button>
    </div>
  );

  function __fetchFact() {
    setFact('Yaaaayyyyyy');
    setFactNum(factNum + 1);
  }
}

export default Fact;
