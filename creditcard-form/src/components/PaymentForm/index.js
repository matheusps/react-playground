import React from 'react';
import './style.scss';

const PaymentForm = ({ payFn }) => {

    return (
       
       <form className="payment-form" onSubmit={ payFn }>
           <div className="payment-input">
                <label>Credit Card Numbers</label>
                <input type="text"/>                
           </div>
           <div className="payment-input">
                <label>Holder</label>
                <input type="text" placeholder=''/>                
           </div>
           <div className="payment-input">
                <label>Expiration</label>
                <select>
                    <option>Jan</option>
                    <option>Feb</option>
                    <option>...</option>
                </select>
                <select>
                    <option>2018</option>
                    <option>2019</option>
                    <option>...</option>
                </select>               
           </div>
           <div className="payment-input">
                <label>CVC</label>
                <input type="text" placeholder=''/>                
           </div>
           <button> Pay Now </button>
       </form>
    );
};

export default PaymentForm;