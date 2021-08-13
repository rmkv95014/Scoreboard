import React, { Component } from 'react';
import Header from "./Header";
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';


class App extends Component {
  state = {
    players: []
  };

  handleRemovePlayer = (id) => {
    this.setState( prevState => {
      return {
        players: prevState.players.filter(p => p.id !== id)
      };
    });
  }

  prevPlayerId = 4;

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => {
      if(delta === -1 && prevState.players[index].score === 0) return;
      else return { score : prevState.players[index].score += delta };
    });
  }

  handleAddPlayer = (name) => {
    this.setState({players: [
      ...this.state.players,
      {
        name,
        score: 0,
        id: this.prevPlayerId += 1,
      }
    ]})
  }

  render() {
    return (
      <div className = "scoreboard">
        <Header 
          title = "Scoreboard" 
          players = { this.state.players }  
        />
  
        {/* Players list */}
        { this.state.players.map( (player, index) =>
          <Player 
            name = { player.name }
            id = { player.id }
            key = { player.id.toString() }
            score = { player.score }
            removePlayer = { this.handleRemovePlayer }
            changeScore = { this.handleScoreChange }
            index = { index }           
          />
        )}
        
          <AddPlayerForm addPlayer = { this.handleAddPlayer }/>
      </div>
    );
  }
}

export default App;
