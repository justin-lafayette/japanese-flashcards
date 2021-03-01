import React from 'react';
import './style.css';

function Table(props) {
    return (
        <>
            {props.data.length ? (
                <>
                {props.data.map( (value, index)=>
                    <div className="row" key={value.uid}>
                        <div className="col-sm p-1 scoreBoard">{value.id}</div>
                        <div className="col-sm p-1 scoreBoard">{value.time}</div>
                        <div className="col-sm p-1 scoreBoard">{value.score}</div>
                    </div>
                )}
                </>
             ) : (
                 <>
                 </>
             )}
        </>
    );
};

export default Table;