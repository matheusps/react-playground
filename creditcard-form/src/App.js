import React, { Component } from 'react';
import Card from './components/Card';

class App extends Component {

    constructor(props) {
        super(props);

        this.turnCard = this.turnCard.bind(this);

        this.state = {
            cardState: true
        }
    }

    turnCard() {
        this.setState({
            cardState: !this.state.cardState
        })
    }

    render() {
        return (
            <div>
                <Card 
                    number=""
                    holder=""
                    mm=""
                    yyyy=""
                    cvc=""
                    isFrontFaced={ this.state.cardState }
                />
                <button onClick={this.turnCard}> Rotate Card </button>
            </div>
            
        );
    }
}

export default App;