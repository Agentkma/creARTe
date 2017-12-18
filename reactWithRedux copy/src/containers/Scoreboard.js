import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import * as PlayerActionCreators from '../actions/player'
import {connect} from 'react-redux';
import Player from '../components/Player';
import Header from '../components/Header';
import AddPlayerForm from '../components/AddPlayerForm';





export class Scoreboard extends Component{

    static PropTypes = {
        players: PropTypes.array.isRequired,
    }

    render() {

        const {dispatch, players} = this.state;
        // below const are create with ready to use state when passed to component via dispatch being added to action creators
        const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
        const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
        const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

        //create player components from players array
        const playerComponents = players.map((player,index)=>{
            <Player
                index={index}
                name={player.name}
                score={player.score}
                key={player.name}
                updatePlayerScore={updatePlayerScore}
                removePlayer={removePlayer}
            />

        });


    return (
      <div className="scoreboard">
        <Header players={players} />
        <div className="players">
            {playerComponents}
        </div>
        <AddPlayerForm addPlayer={addPlayer} />
      </div>
    );
  }
}


const mapStateToProp = state =>{
    return {
        players: state
    }
}
// connect is passed func used to transform state to props
// Scoreboard is the container to pass to Redux
export default connect(mapStateToProp)(Scoreboard);
