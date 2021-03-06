import './App.css';
import Home from './components/Home';
import About from './components/About';
import { Route, Switch } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={['/', '/home']} component = {Home} exact />
        <Route path='/about' component = {About} />
      </Switch>
    </div>
  );
}

export default App;