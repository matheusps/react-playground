import React from 'react';
import MaskedInput from 'react-text-mask';
import './style.scss';

const PaymentForm = ({ payFn, turnCardBack, turnCardFront, handleInputChange }) => {

    const maskCreditCard = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ];
    const maskCVC = [ /\d/, /\d/, /\d/ ];

    return (
       <form className="payment-form" onSubmit={ payFn }>
           
           <div className="payment-input">
                <label>Credit Card Numbers</label>
                <MaskedInput 
                    mask={ maskCreditCard }
                    name="number"
                    type="text"
                    onChange={ handleInputChange }
                />                
           </div>
           
           <div className="payment-input">
                <label>Holder</label>
                <input style={ { textTransform: 'uppercase' } } name="holder" type="text" onChange={ handleInputChange }/>                
           </div>
           
           <div className="payment-input">
                <label>Expiration</label>
                
                <select name="mm" onChange={ handleInputChange }>
                    <option value="JAN">JAN</option>
                    <option value="FEB">FEB</option>
                    <option>...</option>
                </select>

                <select name="yyyy" onChange={ handleInputChange }>
                    <option value="2018">2018</option>
                    <option value="2019">2019</option>
                    <option>...</option>
                </select>

           </div>
           
           <div className="payment-input">
                <label>CVC</label>
                <MaskedInput
                    mask={ maskCVC }
                    name="cvc" 
                    type="text" 
                    onChange={ handleInputChange } 
                    onClick={ turnCardBack } 
                    onBlur={ turnCardFront }
                />                
           </div>

           <button> Pay Now </button>
       
       </form>
    );
};

export default PaymentForm;