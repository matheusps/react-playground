import React from 'react';
import './style.scss';
import { CreditCardContext } from '../../providers/CreditCard';

const Card = () => {

    return(
        <CreditCardContext.Consumer>
            {
                context => (
                    <div className='card-wrap'>
                        <div className={`card ${ context.state.isFrontFaced ? '' : 'isBackFaced' }`}>
                            <div className="front">
                                    
                                <div className="type">
                                    <img className="bankid" />
                                </div>

                                <span className="chip"></span>
                                    
                                <span className="card_number">{ context.state.number ? context.state.number : '\u2022 \u2022 \u2022 \u2022 \u00A0 \u2022 \u2022 \u2022 \u2022 \u00A0 \u2022 \u2022 \u2022 \u2022 \u00A0 \u2022 \u2022 \u2022 \u2022'} </span>
                                    
                                <div className="date"><span className="date_value">{context.state.mm ? context.state.mm : 'MM'} / { context.state.yyyy ? context.state.yyyy : 'YYYY' }</span></div>
                                    
                                <span className="fullname">{ context.state.holder ? context.state.holder.toUpperCase() : 'HOLDER NAME' }</span>

                            </div>

                            <div className="back">
                                <div className="magnetic"></div>
                                <div className="bar"></div>
                                <span className="seccode">{ context.state.cvc ? context.state.cvc : '\u2022 \u2022 \u2022'}</span>
                                <span className="chip"></span><span className="disclaimer">This card is property of Random Bank of Random corporation. <br /> If found please return to Random Bank of Random corporation - 21968 Paris, Verdi Street, 34 </span>
                            </div>
                        </div>
                    </div>
                        
                )
            }       
        </CreditCardContext.Consumer>
    );
};

export default Card;