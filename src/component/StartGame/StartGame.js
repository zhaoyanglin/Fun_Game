import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../StartGame/StartGame.css'

class StartGame extends Component {

    state = {
        showPlayer: false,
        pickedPlayer: '',
        opOne: false,
        opTwo: false,
    }

    componentDidUpdate() {
        if (!this.props.reduxState.roomReducer.foundRoom) {
            this.props.history.push('/')
        }
    }

    pickPlayerNow = () => {

        let playerArray = this.props.reduxState.playerReducer
        // console.log('this is the playerReducer:', playerArray);

        this.state.pickedPlayer = playerArray[Math.floor(playerArray.length * Math.random())]
        console.log('this is the picked player: ', this.state.pickedPlayer.name);

        this.setState({
            showPlayer: true,
            opOne: false,
            opTwo: false,
        })

        this.getRule()
    }

    getRule = () => {
        this.props.dispatch({ type: "GET_RULES" })
    }

    applyRule = (key) => {
        if (key === 'opOne') {
            console.log('this is the option one:', this.props.reduxState.ruleReducer.firstOp);
            this.setState({
                showPlayer: false,
                opOne: true,
            })
        } else if (key === 'opTwo') {
            console.log('this is the option two:', this.props.reduxState.ruleReducer.secondOp);
            this.setState({
                showPlayer: false,
                opTwo: true,
            })
        }
    }

    render() {

        // console.log('this is the state showplayer:',this.state.showPlayer);

        return (

            <div>

                <div className='StartGamebuttonBox'>
                    <button className="initialButton" onClick={() => this.pickPlayerNow()}><span>Pick Player</span></button>
                </div>

                <div className='playerNameDiv'>
                    <h1>{this.state.pickedPlayer.name}</h1>
                </div>

                <div className='StartGamebuttonBox2'>
                    {this.state.showPlayer && <button className="initialButton" onClick={() => this.applyRule('opOne')}><span>Option One</span></button>}
                    {this.state.showPlayer && <button className="initialButton" onClick={() => this.applyRule('opTwo')}><span>Option Two</span></button>}
                </div>

                    {this.state.opOne && <div className='optionDiv'><p>{this.props.reduxState.ruleReducer.firstOp}</p></div>}

                {this.state.opTwo && <div className='optionDiv'><p>{this.props.reduxState.ruleReducer.secondOp}</p></div>}

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(StartGame);