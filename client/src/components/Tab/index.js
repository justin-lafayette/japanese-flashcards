import React from 'react';

function Tab(props) {
    return (
        <>
        {/* // For use if moving to independent page system */}
            {/* // <ul className="nav nav-tabs">
            //     <li className="nav-item">
            //         <a className="nav-link active" aria-current="page" href="#">Home</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">Review</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link" href="#">Quiz</a>
            //     </li>
            //     <li className="nav-item">
            //         <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            //     </li>
            // </ul> */}

        {/* For use in single page view */}
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
            </ul>
            <div className="tab-content" id="tabsContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">1</div>
                <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">2</div>
                <div className="tab-pane fade" id="quiz" role="tabpanel" aria-labelledby="quiz-tab">3</div>
                <div className="tab-pane fade" id="dictionary" role="tabpanel" aria-labelledby="dictionary-tab">4</div>
            </div>

        </>
    );
};

export default Tab;