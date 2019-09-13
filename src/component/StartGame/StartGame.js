import React, { Component } from 'react';
import { connect } from 'react-redux';

import '../StartGame/StartGame.css'
import '../StartGame/startGameButton.css'

class StartGame extends Component {

    state = {
        showPlayer: false,
        opOne: false,
        opTwo: false,
        finalArray: [],
        order: []
    }

    componentWillMount() {
        this.shuffle(true)
    }

    componentDidUpdate() {
        if (!this.props.reduxState.roomReducer.foundRoom) {
            this.props.history.push('/')
        }
    }

    allInOne = () => {
        this.pickPlayerNow()
        this.shuffle(false)
        this.stopSpinning()
        setTimeout(() => {
            this.setState({
                showPlayer: true,
            })
        }, 3000)
    }

    shuffle = (first) => {
        let tempArray = []
        let options = [0, 1, 2, 3, 4]


        for (let i = 0; i < 5; i++) {
            let random = [Math.floor(Math.random() * (5 - i))]
            tempArray.push(options[random])
            options.splice(random, 1)
        }

        this.setState({
            order: tempArray,
        }, () => {
            if (!first) {
                this.startSpinning()
            }
        })
    }

    pickPlayerNow = (first) => {

        let playerArray = this.props.reduxState.playerReducer
        let newPlayerArray = []
        // console.log('this is the playerReducer:', playerArray);

        if (playerArray.length < 5) {
            for (let i = 0; i < 5; i++) {
                let pickedPlayer = playerArray[Math.floor(playerArray.length * Math.random())]
                newPlayerArray.push(pickedPlayer.name)
            }
        } else {
            for (let i = 0; i < playerArray.length; i++) {
                let pickedPlayer = playerArray[Math.floor(playerArray.length * Math.random())]
                newPlayerArray.push(pickedPlayer.name)
            }
        }

        this.setState({
            opOne: false,
            opTwo: false,
            finalArray: newPlayerArray
        })
        this.getRule()
    }

    startSpinning = () => {
        let tempArray = []
        let arr = this.state.order
        let intervalId = setInterval(() => {
            tempArray = []
            tempArray[0] = arr[4];
            tempArray[1] = arr[0];
            tempArray[2] = arr[1];
            tempArray[3] = arr[2];
            tempArray[4] = arr[3];
            arr = tempArray
            this.setState({
                order: tempArray,
                interval: intervalId
            })
        }, 300)
    }

    stopSpinning = () => {
        setTimeout(() => {
            clearTimeout(this.state.interval)
        }, 3000)
    }

    getRule = () => {
        this.props.dispatch({ type: "GET_RULES" })
    }

    applyRule = (key) => {
        if (key === 'opOne') {
            // console.log('this is the option one:', this.props.reduxState.ruleReducer.firstOp);
            setTimeout(() => {
                this.setState({
                    showPlayer: false,
                    opOne: true,
                })
            }, 1000);
        } else if (key === 'opTwo') {
            // console.log('this is the option two:', this.props.reduxState.ruleReducer.secondOp);
            setTimeout(() => {
                this.setState({
                    showPlayer: false,
                    opTwo: true,
                })
            }, 1000);
        }
    }

    render() {

        // console.log('this is the state showplayer:',this.state.showPlayer);

        return (

            <div className='StartGameDivContainer'>

                <div className='StartGamePickPlayerDiv'>
                    <button className="startGamePickPlayerButton" onClick={() => this.allInOne()}><span>Pick Player</span></button>
                </div>

                <div className='playerNameDiv'>
                    <h1 style={{ 'top': this.state.order[0] * 150, 'transition': 'all 0.3s' }}>{this.state.finalArray[0]}</h1>

                    <h1 style={{ 'top': this.state.order[1] * 150, 'transition': 'all 0.3s' }}>{this.state.finalArray[1]}</h1>

                    <h1 style={{ 'top': this.state.order[2] * 150, 'transition': 'all 0.3s' }}>{this.state.finalArray[2]}</h1>

                    <h1 style={{ 'top': this.state.order[3] * 150, 'transition': 'all 0.3s' }}>{this.state.finalArray[3]}</h1>

                    <h1 style={{ 'top': this.state.order[4] * 150, 'transition': 'all 0.3s' }}>{this.state.finalArray[4]}</h1>
                </div>

                <div className='StartGameRuleButtonDiv'>
                    {this.state.showPlayer && <button className="opButton" onClick={() => this.applyRule('opOne')}><span>Option One</span></button>}
                    <span className='opButtonSpan'></span>
                    {this.state.showPlayer && <button className="opButton" onClick={() => this.applyRule('opTwo')}><span>Option Two</span></button>}
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