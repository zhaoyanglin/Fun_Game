import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import '../GameRoom/GameRoom.css'

class GameRoom extends Component {

    state = {
        player: '',
    }

    componentDidUpdate() {
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
            player: ''
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

                    <h3>Enter Players Here</h3>

                <div className='inputDiv'>
                    <input className='input' placeholder="Enter Players" onChange={this.setPlayerState} value={this.state.player} />
                </div>

                <div className='buttonBoxGameRoom'>
                    <button className="initialButton" onClick={() => this.addPlayer()}><span>Add</span></button>
                    <Link to="/StartGame"><button className="initialButton"><span>Start Game</span></button></Link>
                </div>

                <div className='playerList'>
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