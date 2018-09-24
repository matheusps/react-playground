import React, { Component } from 'react';
import Card from './components/Card';
import PaymentForm from './components/PaymentForm';
import ProductList from './components/ProductList';

import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);

        this.turnCardFront = this.turnCardFront.bind(this);
        this.turnCardBack = this.turnCardBack.bind(this);
        this.pay = this.pay.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.state = {
            card: {
                isFrontFaced: true,
                number: '',
                holder: '',
                mm: '',
                yyyy: '',
                cvc: ''
            }
        }
    }

    turnCardFront() {
        this.setState({
            card: {
                ...this.state.card,
                isFrontFaced: true
            }
        })
    }

    turnCardBack() {
        this.setState({
            card: {
                ...this.state.card,
                isFrontFaced: false
            }
        })
    }

    handleInputChange(e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            card: {
                ...this.state.card,
                [name]: value
            }
        })
    }

    pay( e ) {
        e.preventDefault();
        console.log(this.state.card);
    }

    render() {
        return (
            <div className="App">
                <section className="cart-area">
                    <ProductList />
                </section>
                <section className="content">
                    <Card 
                        { ...this.state.card }
                    />
                    <PaymentForm
                        payFn={ this.pay }
                        handleInputChange={ this.handleInputChange }
                        turnCardBack={ this.turnCardBack }
                        turnCardFront={ this.turnCardFront }
                        { ...this.state.card }
                    />
                </section>
                
            </div>
            
        );
    }
}

export default App;