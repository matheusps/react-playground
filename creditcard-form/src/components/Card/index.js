import React from 'react';
import './style.scss';

const Card = ({ isFrontFaced, number, holder, mm, yyyy, cvc }) => {

    return(
        <div className='card-wrap'>
            <div className={`card ${ isFrontFaced ? '' : 'isBackFaced' }`}>
                <div className="front">
                    
                    <div className="type">
                        <img className="bankid" />
                    </div>

                    <span className="chip"></span>
                    
                    <span className="card_number">{ number ? number : '\u2022 \u2022 \u2022 \u2022 \u00A0 \u2022 \u2022 \u2022 \u2022 \u00A0 \u2022 \u2022 \u2022 \u2022 \u00A0 \u2022 \u2022 \u2022 \u2022'} </span>
                    
                    <div className="date"><span className="date_value">{mm ? mm : 'MM'} / { yyyy ? yyyy : 'YYYY' }</span></div>
                    
                    <span className="fullname">{ holder ? holder.toUpperCase() : 'HOLDER NAME' }</span>

                </div>

                <div className="back">
                    <div className="magnetic"></div>
                    <div className="bar"></div>
                    <span className="seccode">{ cvc ? cvc : '\u2022 \u2022 \u2022'}</span>
                    <span className="chip"></span><span className="disclaimer">This card is property of Random Bank of Random corporation. <br /> If found please return to Random Bank of Random corporation - 21968 Paris, Verdi Street, 34 </span>
                </div>
            </div>
        </div>
    );
};

export default Card;