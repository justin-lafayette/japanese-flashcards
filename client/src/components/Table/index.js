import React from 'react';
import './style.css';

function Table(props) {
    return (
        <>
        {/* TODO: Have validation and fall-back if the server is not working properly. */}
        {/* Validate if the data received has length. If so, render the data in a table for the high scores. If not, show error message. */}
        {props.data.length ? (
            <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Username</th>
                        <th scope="col">Score</th>
                        <th scope="col">Time</th>
                    </tr>
                </thead>
                <tbody>
                    {props.data.map( (value, index)=>
                    <tr key={value.uid}>
                        <th scope="row">{index+1}</th>
                        <td >{value.id}</td>
                        <td >{value.score}</td>
                        <td >{value.time}</td>
                    </tr>
                    )}
                </tbody>
            </table>
            </>
            ) : (
                <>
                <h1>Server offline. Flashcards and quizes will still function but will not be tracked. Please excuse this inconveniece.</h1>
                </>
            )}
        </>
    );
};

export default Table;