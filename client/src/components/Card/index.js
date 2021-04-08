import React, { Component } from 'react';
let log= (t)=>console.log(t);

class Card extends Component {
    // Following resources used to resolve issue with onChange. First link will be used to remove the .bind function later as a cleaner way to pass functions.
    // https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36/
    // https://stackoverflow.com/questions/35800491/how-to-get-values-from-child-components-in-react

    
    /* Function will essentially pass the target name and value to the parent through props.handleChange. */
    handleOnChange = e=> {
        this.props.handleChange(e.target.name, e.target.value);
        // log("Card handleOnChange");
    };

    render() {
        /* Variables that will allow the card background to change based off the props passed for the input received during flashcards and quiz. */
        let bgColor = "card-body "
        if( this.props.outcome === null ){
            /* Background color class will remain empty or return to neutral. */
        } else if ( this.props.outcome ) {
            /* Background color for card when correct input is registered */
            bgColor+= "bg-success "
        } else {
            /* Background color for card when incorrect input is registered */
            bgColor+= "bg-warning "
        };

        // TODO: Remove temporary values below
        // log("Card has rendered");
        // console.log("props: ", this.props);
        // if(this.props.character) console.log("character: ", this.props.character);
        // let data= this.props.data[0];
        return (
            <>
            {this.props ? (
                <>
                {this.props.data ? (
                    <>
                    <div className="card text-center">
                        <div className={bgColor}>
                            <h5 className="card-title">{this.props.data[this.props.cardIndex].character}</h5>
                            <input onChange={this.handleOnChange} name="guessInput" type="text" value={this.props.guessInput} />
                            {/* {this.props.show ? (
                                <>
                                </>
                            ):(
                                <>
                                </>
                            )} */}
                        </div>
                    </div>
                    </>
                ):(
                    <>
                    </>
                )}
                </>
            ):(
                <>
                </>
            )}
            </>
        );
    }
};

export default Card;