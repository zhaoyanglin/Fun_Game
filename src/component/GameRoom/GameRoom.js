import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import '../GameRoom/GameRoom.css'
import '../GameRoom/input.css'
import '../GameRoom/gameRoomButton.css'


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

    popUpForNoGood = () => {
        alert("Please Enter Players")
    }

    enterPressed = (event) => {
        let code = event.keyCode || event.which
        if(code === 13) {
            this.addPlayer()
        }
    }


    render() {

        // console.log('this is the redux state in Game room', this.props.reduxState.playerReducer);

        let playerList = this.props.reduxState.playerReducer.map((data, i) => {
            return (
                <li key={i}>{data.name}</li>
            )
        })

        let foundRoom = this.props.reduxState.roomReducer.foundRoom;
        
        let startButton;
        if (playerList.length > 0){
             startButton = <Link to="/StartGame"><button className="gameRoomStartButton">Start Game</button></Link>
        }else{
             startButton = <button className="gameRoomStartButton" onClick={()=> this.popUpForNoGood() }>Start Game</button>
        }

        return (
            <div>
            {foundRoom && 
                <div className='gameRoomDivContainer'>
                    
                    <div className='h3Bar'>
                        <h3 >Enter Players Here</h3>
                    </div>


                    <label htmlFor='inp' className='inp'>
                        <input className='inp' onChange={this.setPlayerState} value={this.state.player} onKeyPress={this.enterPressed.bind(this)}/>

                        <span className='label'>Names</span>
                        <span className='border'></span>
                    </label>


                    <div className='gameRoomButtonDiv'>

                        <button className="gameRoomAddbutton" onClick={() => this.addPlayer()}>Add</button>

                        <span className='spanInButtonDiv'></span>

                        {startButton}

                    </div>

                    <div className='gameRoomPlayerList'>
                        <ul>
                            {playerList}
                        </ul>
                    </div>
                    

                </div>}
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(GameRoom);