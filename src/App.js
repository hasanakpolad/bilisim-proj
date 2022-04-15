import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import Education from './components/Education';
import HomePage from './components/HomePage';
import Ticket from './components/Ticket'

function App() {
  return (
    // <div className="App">
    //   <Router>
    //     {/* <div id="navbar-animmenu"> */}
    //     <Navbar />
    //     {/* </div> */}
    //     {/* <CustomList data={data} /> */}
    //     <Route exact to='/' component={HomePage}/>
    //     <Route exact to='/education' component={Education} />
    //     {/* <Route to='/education' component={Education}/> */}
    //     {/* <Route to='/education' component={Education}/> */}
    //   </Router>
    // </div>
    <div>
      <Router>
        <Navbar />
        <Route exact path='/' component={HomePage} />
        <br />
        <Route exact path='/education' component={Education} />
        <Route path='/ticket' exact component={Ticket}/>
        {/* <Route path='/stepOver' component={} /> */}
      </Router>
    </div>
  );
}

export default App;
