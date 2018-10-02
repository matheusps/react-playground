import React, {Component, createContext }from 'react'

export const CreditCardContext = createContext();

export class CreditCardProvider extends Component {
    
    constructor(props) {
        super(props);

        this.turnCardFront = this.turnCardFront.bind(this);
        this.turnCardBack = this.turnCardBack.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        
        this.state = {
            isFrontFaced: true,
            number: '',
            holder: '',
            mm: '',
            yyyy: '',
            cvc: '' 
        }

    }

    turnCardFront () {
        this.setState({
            isFrontFaced: true
        })
    }

    turnCardBack () {
        this.setState({
            isFrontFaced: false
        })
    }

    handleInputChange (e) {

        const name = e.target.name;
        const value = e.target.value;

        this.setState({
            [name]: value
        })
    }


    render () {
        return (
            <CreditCardContext.Provider value={{
                state: this.state,
                actions: {
                    turnCardFront: this.turnCardFront,
                    turnCardBack: this.turnCardBack,
                    handleInputChange: this.handleInputChange
                }
            }}>
                { this.props.children }
            </CreditCardContext.Provider>
        )
    }
}