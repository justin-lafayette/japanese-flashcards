import React, { Component } from 'react';

class Card extends Component {
    // console.log(props)
    // TODO: get onChange working here instead of Review...
    // https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36/

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