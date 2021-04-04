import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import CharDetails from './components/CharDetails';
function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/home" component={Home} />
        <Route exact path="/chardetails/:id" component={CharDetails} />
      </Router>
    </div>
  );
}

export default App;
