import React, { Component } from 'react';
import { connect } from "react-redux";

import '../Players/players.css'

class Players extends Component {

componentDidMount = () => {
    if(!this.props.reduxState.roomReducer.foundRoom) {
        this.props.history.push("/")
    }
}

componentDidUpdate = () => {
    if (!this.props.reduxState.roomReducer.foundRoom) {
        this.props.history.push("/")
    }
}

    deletePlayer = (key) => {
        this.props.dispatch({type:'DELETE_PLAYER', payload:key})
    }

    render() {

        // console.log('this is Players reduxState playerReducer:', this.props.reduxState.playerReducer);
        
        
        let currentPlayerList = this.props.reduxState.playerReducer.map((data, i) => {
            return <tr key={i}>
                <td>{data.name}</td>
                <td><button className='deleteButton' onClick={()=>this.deletePlayer(data.id)}>Delete</button></td>
            </tr>
        })
        

        return (
            <div className='playerDivContainer'>
                <table>
                    <thead>
                        <th>THE REAL MVP</th>
                        <th>Why you LEAVING??</th>
                    </thead>
                    <tbody>
                        {currentPlayerList}
                    </tbody>
                </table>


            </div>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Players);
