import { useRouter } from "./hooks/useRouter"
import Navigation from '../src/components/Navigation/navigation'
import './App.css'

export default function App () {
   
  const routing = useRouter();
  
  return (
    <div className="App container">
      <Navigation />
      <div className="App-header">{routing}</div>
    </div>
  );
}
