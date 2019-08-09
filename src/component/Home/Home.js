import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import '../Home/Home.css';

class Home extends Component {

    componentWillMount = () => {
        this.props.dispatch({ type: 'GET_ROOM_INFO' })
    }

    componentDidMount = () => {
        if (this.props.reduxState.roomReducers.foundRoom) {
            this.props.history.push('/GameRoom')
        }
    }

    componentDidUpdate = () => {
        if (this.props.reduxState.roomReducers.foundRoom) {
            this.props.history.push('/GameRoom')
        }
    }

    sendRoomInfo = () => {
        this.props.dispatch({ type: 'ROOM_INFO' })
    }

    render() {
        console.log('this is the redux state', this.props.reduxState);

        return (
            <div className="Home">

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