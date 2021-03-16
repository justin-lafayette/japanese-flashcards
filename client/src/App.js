import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home.js';
import Review from './pages/Review.js';
import Quiz from './pages/Quiz.js';
import Dictionary from './pages/Dictionary.js';
import Links from './pages/Links.js';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// TODO
// add background of moving Japanese characters. thought to slide across the background
// Change class "active" back in tab.index. Change class "show active" back in pages as needed.

class App extends Component {

    state={

    };

    render() {
        return (
            <>
            <Router>
                <nav className="navbar navbar-expanded-lg navbar-light gb-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <a className="navbar-brand" href="#">J-Flash</a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/review" className="nav-link" aria-current="page">Review</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/quiz" className="nav-link" aria-current="page">Quiz</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/dictionary" className="nav-link" aria-current="page">Dictionary</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/links" className="nav-link" aria-current="page">Links</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

                <Switch>
                    <Route path= "/links">
                        <Links />
                    </Route>
                    <Route path= "/dictionary">
                        <Dictionary />
                    </Route>
                    <Route path= "/quiz">
                        <Quiz />
                    </Route>
                    <Route path= "/review">
                        <Review />
                    </Route>
                    <Route path= "/">
                        <Home />
                    </Route>
                </Switch>

            </Router>
            </>
        );
    }
}

export default App;
