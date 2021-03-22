import React, { Component } from 'react';

class Card extends Component {
    // Following resources used to resolve issue with onChange. First link will be used to remove the .bind function later as a cleaner way to pass functions.
    // https://www.freecodecamp.org/news/why-arrow-functions-and-bind-in-reacts-render-are-problematic-f1c08b060e36/
    // https://stackoverflow.com/questions/35800491/how-to-get-values-from-child-components-in-react

    
    /* Function to allow input change to be taken and passed into the parent for flashcard and quiz */
    handleOnChange = e=> {
        this.props.handleChange(e.target.name, e.target.value);
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
        // console.log(this.props);
        // let data= this.props.data[0];
        return (
            <>
            {/* {this.props.kanjiOn ? (
                <>
                <div className="card text-center">
                    <div>
                        <h3 className="card-title">{data.kanji}</h3>
                        <h5 className="card-title">{data.heisig_en}</h5>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Grade: {data.grade}</li>
                            <li className="list-group-item">Stroke Count: {data.stroke_count}</li>
                            <li className="list-group-item">Kun Readings: {data.kun_readings}</li>
                            <li className="list-group-item">On Readings: {data.on_readings}</li>
                            <li className="list-group-item">Name Readings: {data.name_readings}</li>
                            <li className="list-group-item">Meanings: {data.meanings}</li>
                        </ul>
                    </div>
                </div>
                </>
            ):( */}
                <>
                <div className="card text-center">
                    <div className={bgColor}>
                        <h5  className="card-title">{this.props.character}</h5>
                        {this.props.on ? (
                            <>
                            {/* TODO: adjust CSS for input to better match and adjust with the card size on different breakpoints */}
                            <input onChange={this.handleOnChange} name="guessInput" type="text" value={this.props.guessInput} />
                            </>
                        ) : (
                            
                            <p className="card-text">{this.props.translation}</p>
                        )}
                    </div>
                </div>
                </>
            {/* )} */}
            </>
        );
    }
};

export default Card;