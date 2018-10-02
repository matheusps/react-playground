import React from 'react';
import MaskedInput from 'react-text-mask';
import './style.scss';
import { CreditCardContext } from '../../providers/CreditCard';

const PaymentForm = ({ payFn }) => {

    const maskCreditCard = [/\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/ ];
    const maskCVC = [ /\d/, /\d/, /\d/ ];

    return (
           <CreditCardContext.Consumer>
               { context => (
                    <form className="payment-form" onSubmit={ payFn }>
                    
                    <div className="payment-input">
                            <label>Credit Card Numbers</label>
                            <MaskedInput 
                                mask={ maskCreditCard }
                                name="number"
                                type="text"
                                onChange={ context.actions.handleInputChange }
                            />                
                        </div>
                        
                        <div className="payment-input">
                            <label>Holder</label>
                            <input style={ { textTransform: 'uppercase' } } name="holder" type="text" onChange={ context.actions.handleInputChange }/>                
                        </div>
                        
                        <div className="payment-input">
                            <label>Expiration</label>
                            
                            <select name="mm" onChange={ context.actions.handleInputChange }>
                                <option value="JAN">JAN</option>
                                <option value="FEB">FEB</option>
                                <option>...</option>
                            </select>
            
                            <select name="yyyy" onChange={ context.actions.handleInputChange }>
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
                                onChange={ context.actions.handleInputChange } 
                                onClick={ context.actions.turnCardBack } 
                                onBlur={ context.actions.turnCardFront }
                            />                
                        </div>

                        <button> Pay Now </button>
                    
                    </form>
               )}
           </CreditCardContext.Consumer>           
    );
};

export default PaymentForm;