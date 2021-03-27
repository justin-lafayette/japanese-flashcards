import React from 'react';

function Tab(props) {
    return (
        <>
        {/* Tabs for use in Review.js. Will tab between Charts, Review, and Quiz. */}
        <ul className="nav nav-tabs" id="tabsNav" role="tablist">
            <li className="nav-item" role="presentation">
                <button className="nav-link " id="charts-tab" data-bs-toggle="tab" data-bs-target="#charts" type="button" role="tab" aria-controls="charts" aria-selected="true">Charts</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link active" id="flashcards-tab" data-bs-toggle="tab" data-bs-target="#flashcards" type="button" role="tab" aria-controls="flashcards" aria-selected="false">Review</button>
            </li>
            <li className="nav-item" role="presentation">
                <button className="nav-link" id="practiceQuiz-tab" data-bs-toggle="tab" data-bs-target="#practiceQuiz" type="button" role="tab" aria-controls="practiceQuiz" aria-selected="false">Quiz</button>
            </li>
        </ul>
        </>
    );
};

export default Tab;