import Layout from './components/Layouts'
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { isUserLoggedIn } from './actions';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth)

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!auth.authenticate) {
      dispatch(isUserLoggedIn());
    }
    
  }, [auth.authenticate]);


  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path='/' exact component={Home} /> 
          <Route path='/signin' component={Signin} /> 
          <Route path='/signup' component={Signup} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
