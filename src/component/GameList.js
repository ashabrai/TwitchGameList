import React from 'react';
import api from '../api'
import Accordion  from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import  Button from 'react-bootstrap/Button';
import FormGroup from 'react-bootstrap/FormGroup';
import FormControl from 'react-bootstrap/FormControl';
import FormLabel from 'react-bootstrap/FormLabel'
import '../styles/index.scss';

class GameList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      games: [],
      queryValue: '',
      gameID: 0,
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
  event.preventDefault()
    this.setState({ gameSelected: true});
    }


getList(){
   if(this.state.queryValue){
    const fetchData = async () => {
      const result = await api.get(`https://api.twitch.tv/helix/games?name=${this.state.queryValue}`)
      this.setState({gameID: result.data.id});
      let dataArray = result.data.data
      let finalArray = dataArray.map(game => {
        let newUrl = game.box_art_url
          .replace("{width}", "300")
          .replace("{height}", "300");
          game.box_art_url = newUrl;
          return game;
      })
      this.setState({ games: finalArray})
    }
    fetchData()
  }
}

render(){
  
  return (
  <div className='outerWrapper'>
        <Card className="search-container">
          <p>Search for your favorite games in the search box below. Click on their name to find out more information about them.</p>
          <FormGroup className='searchBar'>
          <form onSubmit={this.handleSubmit}>
            <FormLabel className='search-title'>Search:</FormLabel>
            <FormControl type="text" value={this.state.queryValue} onChange={this.handleChange} name='search'></FormControl>
          </form>
          </FormGroup>
          <Accordion className="closedAccordion">
            {this.state.games.map(game => (
              <Card className="game-card">
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey={game} onClick={this.handleClick}>
                  {game.name}
                </Accordion.Toggle>
              </Card.Header>
              
              <Accordion.Collapse eventKey={game}>
                <Card.Body><img className='game-photo' src={game.box_art_url} alt={game.id}/></Card.Body>
              </Accordion.Collapse>
            </Card>
            ))}
</Accordion>
</Card>
  </div>
      )
    }
}
export default GameList;