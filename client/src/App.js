import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Home from './pages/Home.js';
import Review from './pages/Review.js';
import Quiz from './pages/Quiz.js';
import Dictionary from './pages/Dictionary.js';
import Links from './pages/Links.js';

import jCharactersHir from './jCharacters-hir.json';
import jCharactersHirDak from './jCharacters-hir-dak.json';
import jCharactersHirCombo from './jCharacters-hir-combo.json';
import jCharactersKat from './jCharacters-kat.json';
import jCharactersKatDak from './jCharacters-kat-dak.json';
import jCharactersKatCombo from './jCharacters-kat-combo.json';
import jCharactersSmallLetters from './jCharacters-smallLetters.json';
import jCharactersSymbols from './jCharacters-symbols.json';

// TODO
// add background of moving Japanese characters. thought to slide across the background
// Change class "active" back in tab.index. Change class "show active" back in pages as needed.

class App extends Component {

    state={
        hiragana: [jCharactersHir, jCharactersHirDak, jCharactersHirCombo],
        katakana: [jCharactersKat, jCharactersKatDak, jCharactersKatCombo],
        accents: [jCharactersSmallLetters, jCharactersSymbols],
        kanji: [],
        rHiragana: [],
        rKatakana: [],
        rAccents: [],
        rKanji: []
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
                        <a className="navbar-brand" href="/">J-Flash</a>
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
                        <Quiz
                            hir={this.state.hiragana}
                            kat={this.state.katakana}
                            acc={this.state.accents}
                            />
                    </Route>
                    <Route path= "/review">
                        <Review
                            hir={this.state.hiragana}
                            kat={this.state.katakana}
                            acc={this.state.accents}
                            />
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
