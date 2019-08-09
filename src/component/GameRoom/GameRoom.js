import React, { Component } from 'react';
import { connect } from 'react-redux';

class GameRoom extends Component {

    state = {
        players: '',
    }

 playerArray = [];


setPlayerState = (event) => {
    this.setState({
        players: event.target.value
    })
}

addToArray = (event) => {
    console.log('this is the players', this.playerArray);
    this.playerArray.push(event);
}


render() {


    return (
        <div className="GameRoom">
            <h1>Room number</h1>
            <input placeholder="enter initials" onChange={this.setPlayerState} />
            <button onClick={() => this.addToArray(this.state.players)}>Add</button>
        </div>
    );
}
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(GameRoom);