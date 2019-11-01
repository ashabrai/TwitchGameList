import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GameList from './component/GameList'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import GameImage from './component/GameImages';

function App(){
  return (
   <div>
      <h1> Hi App</h1>
     <GameList/>
     </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();