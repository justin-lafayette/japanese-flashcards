import React, { Component } from 'react';
import Api from '../utils/Api';

/* Components */
// import Card from '../components/Card';
import Container from '../components/Container';
// import LangOptions from '../components/LangOptions';
import Tab from '../components/Tab';

/* Character import */
import jCharacters from '../jCharacters.json';
// import jCharactersArr from '../jCharacters-arr.json';

/* TODO:
    Get app functioning by skipping combining everything into one area.
    // - Get app to render basic information before getting it to shuffle.
    // - Get app to allow selecting basic information
    - Get app to recognize inputs
        - Possibly add inputs to object in state
        - or make validation dynamic to register the selected input
    - Get app to validate inputs
    - Randomize on submit instead of page load
    - Fix regex letter validation for inputs
    - Find some way to add sections for each category and how to highlight the buttons on click...
*/

class Review extends Component {

    state= {
        selections: jCharacters,
        language: "",
        start: false,
        defalutLang: "Hiragana",
        username: "",
        calculatedScore: 0,
        breakdown: {},
        selectButtons:{}
    };

    handleChange(event) {
        const { name, value } = event.target;
        const dLang= event.target.dataset.lang;
        const dCat= event.target.dataset.cat;
        const dSect= event.target.dataset.sect;
        let currentObj= this.state.selections;
        let currentLetter= currentObj[dLang][dCat][dSect][name.toLowerCase()];
        const regex = /^[A-Za-z]$/;

        // console.log("Name: ", name);
        // console.log("Value: ", value);
        // console.log("dLang: ", dLang);
        // console.log("dCat: ", dCat);
        // console.log("dSect: ", dSect);

        currentLetter.answer = value;

        // Validate value is a letter
        // if (regex.test(value)) {
            // console.log(regex.test(value));
            // Check length of Value vs englishTranslation
            if (value.length >= currentLetter.englishTranslation.length) {
                // console.log("Length check: ", value.length)
                // Check if strings match
                if (value === currentLetter.englishTranslation || value === currentLetter.alternateEnglishTranslation) {
                    // console.log("Value check: ", value)
                    currentLetter.correct= true;
                    currentLetter.incorrect= false
                    currentLetter.unanswered= false;
                } else {
                    currentLetter.correct= false;
                    currentLetter.incorrect= true;
                    currentLetter.unanswered= false;
                };
            } else {
                currentLetter.correct= false;
                currentLetter.incorrect= false;
                currentLetter.unanswered= true;
            };

            this.setState({
                selections: currentObj,
            });
        // };
    };

    handleLangSelection(event) {
        const { name } = event.target;
        const dLang= event.target.dataset.lang;
        const category = event.target.dataset.category;
        let currentObj= this.state.selections;
        const l1= currentObj[dLang];
        // console.log("Name: ", name);
        // console.log("dLang: ", dLang);
        console.log("Category: ", category);

        if (dLang !== this.state.defalutLang) {
            // Set all show properties to false
            // console.log(dLang);
            for (const lang in currentObj) {
                // console.log(lang);
                for (const cat in currentObj[lang]) {
                    // console.log(cat);
                    // console.log(currentObj[dLang][cat])
                    for (const sect in currentObj[lang][cat]) {
                        // console.log(sect);
                        // console.log(currentObj[lang][cat][sect]);
                        for (const letter in currentObj[lang][cat][sect]) {
                            // console.log(letter);
                            // console.log(lang, letter, currentObj[lang][cat][sect][letter].show)
                            currentObj[lang][cat][sect][letter].show = false;
                        };
                    };
                };
            };
        };

        if (name === "category") {
            for (const sect in l1[category]) {
                for (const letter in l1[category][sect]) {
                    currentObj[dLang][category][sect][letter].show = !currentObj[dLang][category][sect][letter].show;
                    // console.log(currentObj[dLang][category][sect][letter].show);
                };
            };
        };

        this.setState({
            selections: currentObj,
            defalutLang: dLang
        });
    };

    handleStart(event) {
        let currentState= this.state.start;

        this.setState({
            start: !currentState
        });
    };

    handleSubmit(event) {
        const currentObj= this.state.selections;
        const selectedLang= this.state.defalutLang;
        let calculatedScore= 0;
        let correct= 0;
        let incorrect= 0;
        let unanswered= 0;
        let totalCount= 0;

        for (const sect in currentObj[selectedLang]) {
            // console.log("Sect: ", sect);
            for (const sectLetters in currentObj[selectedLang][sect]) {
                // console.log("sectLetters: ", sectLetters);
                for (const l in currentObj[selectedLang][sect][sectLetters]) {
                    let letter= currentObj[selectedLang][sect][sectLetters][l];
                    // console.log("letter", letter.correct);
                    if (letter.show) {
                        if (letter.correct) {
                            console.log("Correct");
                            correct++;
                            totalCount++;
                        };
                        if (letter.incorrect) {
                            console.log("Incorrect");
                            incorrect ++;
                            totalCount++;
                        };
                        if (letter.unanswered) {
                            console.log("Unanswered");
                            unanswered ++;
                            totalCount++;
                        };
                    };
                };
            };
        };

        /* https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary */
        calculatedScore= (Math.round((correct) / (totalCount) * 10000) / 100);

        this.setState({
            calculatedScore: calculatedScore,
            breakdown: {
                "correct": correct,
                "incorrect": incorrect,
                "unanswered": unanswered
            }
        });

        Api.sendScore({
            score: calculatedScore,
            userID: this.state.username,
            totalCount: totalCount
        });
    };

    handleUsername(event) {
        const { name, value } = event.target;
        const regex = /^[A-Za-z]$/;
        let newVal = value
        console.log(name, value);

        // if (regex.test(value)) {
            this.setState({
                [name]: newVal
            })
        // };
    };

    render() {
        console.log(this.state);
        /* Solution for mapping cards:
        https://stackoverflow.com/questions/67438590/jsx-conditional-rendering-for-nested-object-values
        */

        // Have Hiragana and Katakana completely separate. Have the buttons selected in two different fields. https://kana-quiz.tofugu.com/

        const getBgClass= (letter)=> {
            if (letter.correct) return "card text-center bg-success";
            if (letter.incorrect) return "card text-center bg-warning";
            return "card text-center";
        };

        return (
            <Container
                className={"fluid"}
                >
                
                <Container>
                    <Tab />
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade " id="charts" role="tabpanel" aria-labelledby="charts-tab">
                            <h1>Charts go here</h1>
                        </div>

                        <div className="tab-pane fade show active" id="flashcards" role="tabpanel" aria-labelledby="flashcards-tab">
                            <div className="row">
                                Flashcards
                            </div>

                                <div className="row">
                                    <div className="col">

                                        <div className="row">
                                            {!this.state.start &&
                                                <>
                                                {Object.keys(this.state.selections).map( (lang, index) => (
                                                    <div className="col" key={index}>
                                                        <button data-lang={lang} name="language" className="btn" onClick={this.handleLangSelection.bind(this)}>{lang}</button>
                                                    </div>

                                                ))}
                                                <div className="row">
                                                    {Object.keys(this.state.selections[this.state.defalutLang]).map( (cat, index) => (

                                                        <div className="col" key={index}>
                                                            <button data-lang={this.state.defalutLang} data-category={cat} value={index} name="category" type="button" className="btn" onClick={this.handleLangSelection.bind(this)}>{cat}</button>
                                                            <div className="row row-cols-2" >
                                                        
                                                                {/* {Object.keys(this.state.selections[this.state.defalutLang][cat]).map( (sect, index) => (
                                                                    
                                                                    <div className="col" key={index}>
                                                                        <button value={index} name="category" data-lang={this.state.defalutLang} data-category={sect} className="btn" type="button" style={{width: "100%"}} onClick={this.handleLangSelection.bind(this)}>{sect}</button>
                                                                    </div>
                                                                ))} */}

                                                            </div>
                                                        </div>
                                                    ))}
                                                </div>
                                                </>
                                            }
                                            <button value="submit" name="submit" stype={{width:"100%"}} onClick={this.handleStart.bind(this)}>{this.state.start ? "Quit" : "Begin"}</button>
                                        </div>
                                    </div>
                                </div>
                            {this.state.start && 
                                <div className="row">
                                    {Object.values(this.state.selections).map( (cat) =>
                                        Object.values(cat).map((sect, indexCat) =>
                                            Object.values(sect).map((sectLetters, indexSect) =>
                                                Object.values(sectLetters).map((letter, indexSectL) =>
                                                    letter.show &&
                                                    <div
                                                        className={getBgClass(letter)}
                                                        key={indexSectL}>
                                                        <div>
                                                            <h5 className="card-title" >{letter.character}</h5>
                                                            <input data-lang={this.state.defalutLang} data-cat={Object.getOwnPropertyNames(cat)[indexCat]} data-sect={Object.getOwnPropertyNames(sect)[indexSect]} type="text" name={letter.characterName} value={letter.answer} onChange={this.handleChange.bind(this)} />
                                                        </div>
                                                    </div>
                                                )
                                            )
                                        )
                                    )}
                                    <label htmlFor="submitButton"></label>
                                    <input id="submitButton" value={this.state.username} name="username" type="text" maxLength="3" onChange={this.handleUsername.bind(this)}></input>
                                    <button value="finish" name="finish" className="btn bg-light" stype={{width:"100%"}} onClick={this.handleSubmit.bind(this)}>{this.state.start && "Submit"}</button>
                                </div>
                            }
                        </div>

                        <div className="tab-pane fade" id="practiceQuiz" role="tabpanel" aria-labelledby="practiceQuiz-tab">
                            <div className="row">Practice Quiz</div>
                            <div className="row">
                                content
                            </div>
                            
                        </div>
                    </div>

                </Container>
            
            </Container>
        );
    };
};

export default Review;