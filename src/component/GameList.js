import React, {useState, useEffect} from 'react';
import api from '../api'
import { Link } from 'react-router-dom'


class GameList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      games: [],
      queryValue: '',
      gameID: '',
      gameSelected: false,
      
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
     
  

handleChange(event){
  this.setState({
    queryValue : event.target.value
  })
} 

handleSubmit(event){
  event.preventDefault();
    if(this.state.queryValue){
      this.getList();
    }
}

handleClick(event){
  event.preventDefault();
    this.setState({ gameSelected: true});
    console.log(this.gameSelected)
}


getList(){
   if(this.state.queryValue){
    const fetchData = async () => {
      const result = await api.get(`https://api.twitch.tv/helix/games?name=${this.state.queryValue}`)
      // console.log(result.data);
      let dataArray = result.data.data
      let finalArray = dataArray.map(game => {
        let newUrl = game.box_art_url
          .replace("{width}", "300")
          .replace("{height}", "300");
          game.box_art_url = newUrl;
          return game;
      })
      console.log(finalArray)
      this.setState({ games: finalArray })
    }
    fetchData()
  }
}

render(){

  return (
  <div className='outerWrapper'>
        <div className="search-container">
          <form onSubmit={this.handleSubmit}>
            <label>Search:</label>
            <input type="text" value={this.state.queryValue} onChange={this.handleChange}name="search"></input>
          </form>
          </div>
    <div className='innerWrapper'>
    <h1>Search games</h1>
      {this.state.games.map(game => (
      <div>
        <li onClick={this.handleClick}>{game.name}</li>
        </div>
      ))}
      {this.state.gameSelected ? (
          <div>
             {this.state.games.map(game => (
               <img className='game-photo' src={game.box_art_url}/>
             ))} 
          </div>
      ) : null }
    </div>

    </div>
      )
    }
}
export default GameList;