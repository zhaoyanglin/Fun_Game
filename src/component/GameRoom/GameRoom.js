import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

class GameRoom extends Component {

    state = {
        player: '',
    }

    componentDidUpdate () {
        if (!this.props.reduxState.roomReducer.foundRoom) {
            this.props.history.push('/')
        }
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_PLAYERS' })

    }

    setPlayerState = (event) => {
        this.setState({
            player: event.target.value
        })
    }

    addPlayer = () => {
        this.props.dispatch({ type: 'ADD_PLAYER', payload: this.state })
        this.setState({
            player:''
        })
    }


    render() {

        // console.log('this is the redux state in Game room', this.props.reduxState.playerReducer);

        let playerList = this.props.reduxState.playerReducer.map((data, i) => {
            return (
                <ul>
                    <li key={i}>{data.name}</li>
                </ul>
            )
        })

        return (
            <div>
                <div className="GameRoom">

                    <input placeholder="enter initials" onChange={this.setPlayerState} value={this.state.player}/>

                    <button onClick={() => this.addPlayer()}>Add</button>

                    
                    <Link to="/StartGame"><button>Start Game </button></Link>

                </div>

                <div>
                    {playerList}
                </div>

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(GameRoom);