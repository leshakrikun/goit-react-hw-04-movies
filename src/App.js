import { useState, useEffect, React } from 'react';
import { useHistory } from 'react-router-dom';
import { useRouter } from "./hooks/useRouter"

import Navigation from '../src/components/Navigation/navigation'

import './App.css'

export default function App () {
   
  const [isBegin, setIsBeging] = useState(true);
  const history = useHistory()
  
  const routing = useRouter(isBegin);
  const path = isBegin ? "/" : "/movies";


  useEffect(() => {
    history.push(path);
  }, [history]);

  return (
    <div className="App container">
      <Navigation />
      <div className="App-header">{routing}</div>
    </div>
  );
}
