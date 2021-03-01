import React, { Component } from 'react';
import './App.css';
// import Tab from './components/Tab';
import Home from './pages/Home.js';
import Review from './pages/Review.js';
import Quiz from './pages/Quiz.js';
import Dictionary from './pages/Dictionary.js';
import Links from './pages/Links.js';


class App extends Component {

    state={

    }

    render() {
        return (
            <>
                {/* <div className="App"> */}
                    <ul className="nav nav-tabs" id="tabsNav" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Home</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review" type="button" role="tab" aria-controls="review" aria-selected="false">Review</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="quiz-tab" data-bs-toggle="tab" data-bs-target="#quiz" type="button" role="tab" aria-controls="quiz" aria-selected="false">Quiz</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="dictionary-tab" data-bs-toggle="tab" data-bs-target="#dictionary" type="button" role="tab" aria-controls="dictionary" aria-selected="false">Dictionary</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="links-tab" data-bs-toggle="tab" data-bs-target="#links" type="button" role="tab" aria-controls="links" aria-selected="false">Links</button>
                        </li>
                    </ul>
                    <div className="tab-content" id="tabsContent">
                        
                        <Home />

                        <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">

                        </div>

                        <div className="tab-pane fade" id="quiz" role="tabpanel" aria-labelledby="quiz-tab">

                        </div>

                        <div className="tab-pane fade" id="dictionary" role="tabpanel" aria-labelledby="dictionary-tab">

                        </div>

                        <div className="tab-pane fade" id="links" role="tabpanel" aria-labelledby="links-tab">

                        </div>

                    </div>
                {/* </div> */}
            </>
        );
    }
}

export default App;
