import React, { Component } from 'react';
import { connect } from "react-redux";

import '../Players/players.css'

class Players extends Component {

    deletePlayer = () => {
        
    }

    render() {

        let currentPlayerList = this.props.reduxState.playerReducer.map((data, i) => {
            return <tr key={i}>
                <td>{data.name}</td>
                <td><button className='deleteButton'>Delete</button></td>
            </tr>
        })
        console.log('this is the currentPlayerList:', currentPlayerList);

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
