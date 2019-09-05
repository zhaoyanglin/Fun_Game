import React, { Component } from 'react';
import { connect } from 'react-redux';


class StartGame extends Component {

    state ={
        showPlayer:false,
    }

    pickPlayerNow = () => {

        let playerArray = this.props.reduxState.playerReducer
        // console.log('this is the playerReducer:', playerArray);

        let pickedPlayer = playerArray[Math.floor(playerArray.length * Math.random())]
        console.log('this is the picked player: ', pickedPlayer.name);

        this.setState({
            showPlayer:true
        })

        this.getRule()
    }

    getRule = () => {
        this.props.dispatch({type: "GET_RULES"})
    }

    applyRule = (key) => {
        if (key === 'opOne') {
            console.log('this is the option one:', this.props.reduxState.ruleReducer.firstOp);
            this.setState({
                showPlayer:false
            })
        } else if(key === 'opTwo') {
            console.log('this is the option two:', this.props.reduxState.ruleReducer.secondOp);
            this.setState({
                showPlayer: false
            })
        }
    }

    render() {

        console.log('this is the state showplayer:',this.state.showPlayer);
        
        return (

            <div>

                <button onClick={() => this.pickPlayerNow()}>Pick Player</button>

                {this.state.showPlayer && <button onClick={()=>this.applyRule('opOne')}>Option One</button>}
                
                {this.state.showPlayer && <button onClick={()=>this.applyRule('opTwo')}>Option Two</button>}

            </div>
        );
    }
}

const mapStateToProps = reduxState => ({
    reduxState,
});
export default connect(mapStateToProps)(StartGame);