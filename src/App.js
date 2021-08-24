import Header from './components/Header';
import PlanetContent from './components/PlanetContent';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Header />
      <PlanetContent />
    </div>
  );
}

export default App;
