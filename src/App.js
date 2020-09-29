import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
function App() {
  return (
    <div>
     <h1>Hej, världen!</h1>
     <ul>
       <li><Link to="/">Home</Link></li>
       <li><Link to="/contact">Contact</Link></li>
       <li><Link to="/chat">Chat</Link></li>
       <li><Link to="/about">About</Link></li>
     </ul>
     <Switch>
      <Route path="/contact">
          <p>Contact</p>
        </Route>
        <Route path="/chat">
          <p>Chat</p>
        </Route>
        <Route path="/about">
          <p>About</p>
        </Route>
      </Switch>
    </div>
  );
}
export default App;