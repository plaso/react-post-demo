import { Switch, Route, Redirect } from 'react-router-dom'
import Posts from './components/Posts';
import Post from './components/Post';
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Posts} />
        <Route exact path="/posts/:id" component={Post} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
