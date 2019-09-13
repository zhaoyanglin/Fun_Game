import React, { Component } from 'react';
import { connect } from "react-redux";


class Players extends Component {

    render() {

        let currentPlayerList = this.props.reduxState.playerReducer.map((data, i) => {
            return <tr key={i}>
                <td>{data.name}</td>
            </tr>
        })
        console.log('this is the currentPlayerList:', currentPlayerList);

        return (
            <div>
                <table>
                    <tr>
                        <th>All the Players:</th>
                    </tr>
                    {currentPlayerList}
                </table>
            </div>
        );
    }
}
const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Players);
