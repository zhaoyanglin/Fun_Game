import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import { connect } from 'react-redux';

import '../Nav/Nav.css';

class Nav extends Component {

    exitOut() {
        this.props.dispatch({ type: 'EXIT_GAME' })

    }

    render() {
        return (
            <div className="Nav">

                {this.props.reduxState.roomReducer.foundRoom && <a><button onClick={() => this.exitOut()}
                ><i className="fa fa-sign-out" aria-hidden="true"></i>

                </button></a>}


                <Link to="/Player">
                    <i className="fa fa-fw fa-user"></i>Player List</Link>

                <Link to="/">
                    <i className="fa fa-fw fa-home"></i>Home</Link>
            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(Nav);