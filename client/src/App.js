import React, { Component } from 'react';
import './App.css';
import Tab from './components/Tab';
import Home from './pages/Home.js';
import Review from './pages/Review.js';
import Quiz from './pages/Quiz.js';
import Dictionary from './pages/Dictionary.js';
import Links from './pages/Links.js';

// TODO
// add background of moving Japanese characters. thought to slide across the background
// Change class "active" back in tab.index. Change class "show active" back in pages as needed.

class App extends Component {

    state={

    };

    render() {
        return (
            <>
                <Tab />

                <div className="tab-content" id="tabsContent">
                    
                    <Home />

                    <Review />

                    <Quiz />

                    <Dictionary />

                    <Links />

                </div>
            </>
        );
    }
}

export default App;
