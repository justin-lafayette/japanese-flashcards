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

let log= (t)=>console.log(t);

class App extends Component {

    state={
        hiragana: [jCharactersHir, jCharactersHirDak, jCharactersHirCombo],
        katakana: [jCharactersKat, jCharactersKatDak, jCharactersKatCombo],
        accents: [jCharactersSmallLetters, jCharactersSymbols],
        kanji: [],
        rHiragana: [],
        rKatakana: [],
        rAccents: [],
        rKanji: [],
        rAll: [],
    };

    /* Function will take the imported json files for the different languages and randomize them using the Fisher-Yates shuffle. Function should be accessible for use in multiple locations and should be allowed to re-randomize the given arrays base off input received from the pages. */
    shuffleArrays = ()=> {
        log("App shuffleArrays start");
        // Solution found here using the Fisher-Yates shuffle. Has been adapted to use ES6 and custom variables: https://javascript.info/task/shuffle 
        // import to variables done here to prevent multiple page re-rendering before displaying
        const hir = this.state.hiragana;
        const kat = this.state.katakana;
        const acc = this.state.accents;

        /* Add each imported language to a parent array. */
        let parent= [hir, kat, acc];
        let all= [];

        /* Itterate through each of the parent's arrays, then through each of those children's arrays. In the parent and child, assign a shorthand variable to track the given parent and child indexes. In the grandchild, randomize the order of the grandchild inside the child using the shorthand and random number. Child arrays will now be shuffled randomly. */
        parent.forEach( (value, index) => {
            let parentIndex= parent[index];
            value.forEach( (val, ind) => {
                let childIndex = parentIndex[ind];
                val.forEach( (v, i) => {
                    /* Assign the random number to a varialbe to be called later. Variable creates a random number between 0 & 1 and adds 1 to it. */
                    let random = Math.floor(Math.random() * (i +1));
                    [childIndex[i], childIndex[random]] = [childIndex[random], childIndex[i]];
                });
            });
        });

        this.setState({
            rHiragana: parent[0],
            rKatakana: parent[1],
            rAccents: parent[2],
            rAll: all.concat(parent[0], parent[1], parent[2]),
        }, log("App r states set"));
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
                            all={this.state.rAll}
                            hir={this.state.rHiragana}
                            kat={this.state.rKatakana}
                            acc={this.state.rAccents}
                            shuffle={this.shuffleArrays}
                            />
                    </Route>
                    <Route path= "/review">
                        <Review
                            all={this.state.rAll}
                            hir={this.state.rHiragana}
                            kat={this.state.rKatakana}
                            acc={this.state.rAccents}
                            shuffle={this.shuffleArrays}
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
