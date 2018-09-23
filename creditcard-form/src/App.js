import React, { Component } from 'react';
import Card from './components/Card';
import PaymentForm from './components/PaymentForm';
import ProductList from './components/ProductList';

import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.turnCard = this.turnCard.bind(this);
        this.pay = this.pay.bind(this);


        this.state = {
            cardState: true
        }
    }

    turnCard() {
        this.setState({
            cardState: !this.state.cardState
        })
    }

    pay( e ) {
        e.preventDefault();
        alert('Payment done');
    }

    render() {
        return (
            <div className="App">
                <section className="cart-area">
                    <ProductList />
                </section>
                <section className="content">
                    <Card 
                        number=""
                        holder=""
                        mm=""
                        yyyy=""
                        cvc=""
                        isFrontFaced={ this.state.cardState }
                    />
                    <PaymentForm
                        payFn={ this.pay }
                    />
                    <button onClick={this.turnCard}> Rotate Card </button>
                </section>
                
            </div>
            
        );
    }
}

export default App;