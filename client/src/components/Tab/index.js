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
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="links-tab" data-bs-toggle="tab" data-bs-target="#links" type="button" role="tab" aria-controls="links" aria-selected="false">Links</button>
                </li>
            </ul>

        </>
    );
};

export default Tab;