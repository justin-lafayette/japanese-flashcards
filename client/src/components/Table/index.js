import React from 'react';
import './style.css';

function Table(props) {
    return (
        <>
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
                 </>
             )}
        </>
    );
};

export default Table;