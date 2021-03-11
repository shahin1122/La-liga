import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Team from './Components/Team/Team';
import TeamDetail from './Components/TeamDetail/TeamDetail';
import Nomatch from './Components/Nomatch/Nomatch';
import css from './Components/Team/Team.css'
import css2 from './Components/TeamDetail/TeamDetail.css'




function App() {
  return (
    <div>
     <Router>
     <Switch>
        <Route exact path='/'>
        <Team></Team>

        </Route>
        <Route path='/team'>
        <Team></Team>

        </Route>
        <Route path='/teamDetail/:teamDetailsId'>
          <TeamDetail></TeamDetail>

        </Route>

        <Route path='*'>
          <Nomatch></Nomatch>

        </Route>
        
      </Switch>
     </Router>
      
    </div>
  );
}

export default App;
