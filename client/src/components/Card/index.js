import React from 'react';

function Card(props) {
    // console.log(props)
    return (
        <>
            <div className="card text-center">
                <div className="card-body">
                    <h5 className="card-title">{props.character}</h5>
                    {props.on ? (
                        <>
                        <input type="text" id="cardInput"></input>
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