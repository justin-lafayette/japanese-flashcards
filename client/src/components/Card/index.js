import React, { Component } from 'react';

class Card extends Component {
    // Following resources used to resolve issue with onChange. First link will be used to remove the .bind function later as a cleaner way to pass functions.
    // https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36/
    // https://stackoverflow.com/questions/35800491/how-to-get-values-from-child-components-in-react

    handleOnChange = e=> {
        this.props.handleChange(e.target.name, e.target.value);
    };
    
    render() {
        let bgColor = "card-body "
        if( this.props.outcome === null ){
            
        } else if ( this.props.outcome ) {
            bgColor+= "bg-success "
        } else {
            bgColor+= "bg-warning "
        };
        return (
            <>
                <div className="card text-center">
                    <div className={bgColor}>
                        <h5  className="card-title">{this.props.character}</h5>
                        {this.props.on ? (
                            <>
                            <input onChange={this.handleOnChange} name="guessInput" type="text" id="cardInput" value={this.props.guessInput} />
                            </>
                        ) : (
                            
                            <p className="card-text">{this.props.translation}</p>
                        )}
                    </div>
                </div>
            </>
        );
    }
};

export default Card;