import './Fact.css';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faRotateRight,
  faDollar,
  faCode,
} from '@fortawesome/free-solid-svg-icons';

import { db } from '../utils/firebase';
import { onValue, ref } from 'firebase/database';

function Fact() {
  const [fact, setFact] = useState<string>('');
  const [factNum, setFactNum] = useState<number>(0);

  /*  Could make the app fetch this value from the database  
      But I have no intention to ever add more facts*/
  const [factCount, setFactCount] = useState<number>(205);

  useEffect(() => {
    const fetchData = async () => {
      __fetchNewFact();
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <div className="Fact">
      <div className="heading">Fact #{factNum}</div>

      <div className="animalFact text-container">
        <p>{fact}</p>
        <button
          type="button"
          className="btn"
          onClick={() => {
            try {
              __fetchNewFact();
            } catch {
              console.error;
            }
          }}
        >
          Get New Fact <FontAwesomeIcon icon={faRotateRight} />
        </button>
      </div>
      <div className="heading">External Links</div>
      <div className="linkArea text-container">
        <p>
          Totally True Animal Facts is an open source project on Github. The
          project has over 200 "facts" generated by ChatGPT. View the repository
          if you'd like to see the full list or view the source code.
        </p>
        <a
          type="button"
          className="btn"
          href="https://github.com/callmekass/totally-true-animal-facts"
          target="_blank"
        >
          View Repository <FontAwesomeIcon icon={faCode} />
        </a>
        <p>
          Okay we had a good laugh, now its time to get serious. On average, 150
          species go extinct every day. Thats over 55,000 species per year. Do
          your part to save these creatures and donate today.
        </p>
        <a
          type="button"
          className="btn"
          href="https://wildnet.org/"
          target="_blank"
        >
          Donate Now <FontAwesomeIcon icon={faDollar} />
        </a>
      </div>
    </div>
  );

  function __fetchNewFact() {
    //  Generate random int between 1 and factCount
    var randint = Math.floor(Math.random() * factCount) + 1;

    const query = ref(db, 'facts/' + randint);

    return onValue(query, (snapshot) => {
      const newFact = snapshot.val();

      if (snapshot.exists()) {
        setFactNum(randint);
        setFact(newFact);
      } else {
      }
    });
  }
}

export default Fact;
