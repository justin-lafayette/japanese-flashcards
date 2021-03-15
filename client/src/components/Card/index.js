import React from 'react';

function Card(props) {
    // console.log(props)
    // {...props.outcome ? (className="card-title bg-success") : (className="card-title bg-danger")}
    let bgColor = "card-body "
    if( props.outcome === null ){
        
    } else if ( props.outcome ) {
        bgColor+= "bg-success "
    } else {
        bgColor+= "bg-warning "
    };

    return (
        <>
            <div className="card text-center">
                <div className={bgColor}>
                    <h5  className="card-title">{props.character}</h5>
                    {props.on ? (
                        <>
                        <input type="text" id="cardInput" value={props.value} />
                        </>
                    ) : (
                        
                        <p className="card-text">{props.translation}</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Card;