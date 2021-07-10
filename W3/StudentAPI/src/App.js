
import './App.css';
import Studentform from "./components/Studentform";
import Recordsdisplay from "./components/Recordsdisplay";
import ViewRec from "./components/ViewRec";
import AxiosView from './components/AxiosView';
import { Route, BrowserRouter as Router, Switch, Link} from "react-router-dom";
import AxiosFetch from './components/AxiosFetch';
function App() {
  return (
      <Router>
        <div className="App">
          <div className="card">
          <div className="row">
                <div className="col-sm-1 ">
                           <Link to="/">Studentform</Link>
                </div>
                  <div className="col-sm-1 ">
                  <Link to="/viewrec">View</Link>
                  </div>
                  <div className="col-sm-1 ">
                  <Link to="/recordsdisplay">Search</Link>
                  </div>
                  <div className="col-sm-1 ">
                  <Link to="/axiosfetch">AxiosFetch</Link>
                  </div>
                  <div className="col-sm-1 ">
                  <Link to="/axiosview">AxiosSearch</Link>
                  </div>
                  </div>
        <Switch>
          <Route path="/" exact component={Studentform}/>
          <Route path="/recordsdisplay" exact component={Recordsdisplay}></Route>
          <Route path="/viewrec" exact component={ViewRec}></Route>
          <Route path="/axiosfetch" excat component={AxiosFetch}></Route>
          <Route path="/axiosview" excat component={AxiosView}></Route>
        </Switch>
        </div>
        </div>
        </Router>
  );
}

export default App;
