import React, { Component } from 'react';
import Card from './components/Card';
import PaymentForm from './components/PaymentForm';
import ProductList from './components/ProductList';
import { CreditCardProvider } from './providers/CreditCard';

import './App.scss';

class App extends Component {

    constructor(props) {
        super(props);
        this.pay = this.pay.bind(this);
    }

    pay( e ) {
        e.preventDefault();
        alert("PAID!");
    }

    render() {
        return (
            <CreditCardProvider>
                <div className="App">
                    <section className="cart-area">
                        <ProductList />
                    </section>
                    <section className="content">
                        <Card />
                        <PaymentForm payFn={ this.pay } />
                    </section>
                    
                </div>
            </CreditCardProvider>
        );
    }
}

export default App;