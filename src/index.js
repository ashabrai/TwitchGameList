import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import GameList from './component/GameList'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/index.scss';

function App(){
  return (
   <div className="HeaderTitle">
      <h1> Twitch Game Search</h1>
     <GameList/>
     </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();