import React from 'react';

function Navbar(props) {
    return (
        <>
        <nav className="navbar navbar-expanded-lg navbar-light gb-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <a className="navbar-brand" href="#">J-Flash</a>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link active" aria-current="page">Home</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" aria-current="page">Review</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" aria-current="page">Quiz</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" aria-current="page">Dictionary</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" aria-current="page">Links</button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar;