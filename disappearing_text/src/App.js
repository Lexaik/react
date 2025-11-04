import React from 'react';
import {useState, useEffect} from 'react';
import './App.css';

function App() {
    const [isVisible, setIsVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false);
        }, 2000);

        return () => {
            clearTimeout(timer);
        };
    }, []);

  return (
      <>
          {
              isVisible ? (<h2>Hello</h2>) : ( <> </>)
          }
      </>
  );
}

export default App;
