import React from 'react';
import './style.scss';

const Card = ({ number, holder, mm, yyyy, cvc, isFrontFaced }) => {

    return(
        <div className='card-wrap'>
            <div className={`card ${ isFrontFaced ? '' : 'isBackFaced' }`}>
                <div className="front">
                    
                    <div className="type">
                        <img className="bankid" />
                    </div>

                    <span className="chip"></span>
                    
                    <span className="card_number">&#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; &#x25CF;&#x25CF;&#x25CF;&#x25CF; </span>
                    
                    <div className="date"><span className="date_value">MM / YYYY</span></div>
                    
                    <span className="fullname">FULL NAME</span>

                </div>

                <div className="back">
                    <div className="magnetic"></div>
                    <div className="bar"></div>
                    <span className="seccode">&#x25CF;&#x25CF;&#x25CF;</span>
                    <span className="chip"></span><span className="disclaimer">This card is property of Random Bank of Random corporation. <br /> If found please return to Random Bank of Random corporation - 21968 Paris, Verdi Street, 34 </span>
                </div>
            </div>
        </div>
    );
};

export default Card;