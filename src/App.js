import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Education from './components/Education';
import HomePage from './components/HomePage';
import Ticket from './components/Ticket';
import Stopover from './components/Stopover';
import Weather from './components/Weather';
import Rent from './components/Rent';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from "./components/User";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <br />
        <Route exact path='/education' component={Education} />
        <Route exact path='/rent' component={Rent} />
        <Route path='/ticket' exact component={Ticket} />
        <Route path='/stopover' exact component={Stopover} />
        <Route path='/weather' exact component={Weather} />
        <Route path='/user' exact component={User} />
      </Router>
    </div>
  );
}

export default App;
