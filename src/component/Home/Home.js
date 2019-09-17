import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

import '../Home/Home.css';

class Home extends Component {
    state = {
        open: true
    }
    componentWillMount = () => {
        this.props.dispatch({ type: 'GET_ROOM_INFO' })
    }

    componentDidMount = () => {
        if (this.props.reduxState.roomReducer.foundRoom) {
            this.props.history.push('/GameRoom')
        }
    }

    componentDidUpdate = () => {
        if (this.props.reduxState.roomReducer.foundRoom) {
            this.props.history.push('/GameRoom')
        }
    }

    sendRoomInfo = () => {
        this.props.dispatch({ type: 'ROOM_INFO' })
    }

    closePopup = () => {
        this.setState({
            open: false
        })
    }

    render() {
        // console.log('this is the redux state', this.props.reduxState);

        return (
            <div className="Home">

                <Popup open={this.state.open} closeOnDocumentClick>
                    <div>
                        <h1>This game is meant for people who are 21 and older. DO NOT DRINK AND DRIVE!</h1>
                        <p>Hello Friends and families, this is going to be a 15 - 20min game at most if everyone follows the Rules. It is very simple, have a case of beer and couple bottles ready then enter everyones name into the game. Have fun and be safe!</p>
                        <button onClick={() => this.closePopup()}>Close</button>
                    </div>
                </Popup>

                <div className='buttonBox'>
                    <Link to='/GameRoom'><button className="initialButton" onClick={this.sendRoomInfo} ><span> Create a Game Room</span>
                    </button></Link>

                </div>

            </div>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Home);