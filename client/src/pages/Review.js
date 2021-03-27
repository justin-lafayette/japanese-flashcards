import React, {Component} from 'react';

import Card from '../components/Card';
import Container from '../components/Container';
import LangOptions from '../components/LangOptions';
import Tab from '../components/Tab';

class Review extends Component {

    state={
        rHiragana: [],
        rKatakana: [],
        rAccents: [],
        rKanji: [],
        correctFlash:[],
        wrongFlash: [],
        flashCardIndex: 0,
        flashCardSelections: [
            {"name": "flash-hir", "bool": false, "fullName": "Hiragana"},
            {"name": "flash-hirDak", "bool": false, "fullName": "Hiragana Dakuten"},
            {"name": "flash-hirCombo", "bool": false, "fullName": "Combination Hiragana"},
            {"name": "flash-kat", "bool": false, "fullName": "Katakana"},
            {"name": "flash-katDak", "bool": false, "fullName": "Katakana Dakuten"},
            {"name": "flash-katCombo", "bool": false, "fullName": "Combination Katakana"},
        ],
        practiceSelections: [
            {"name": "pract-hir", "bool": false, "fullName": "Hiragana"},
            {"name": "pract-hirDak", "bool": false, "fullName": "Hiragana Dakuten"},
            {"name": "pract-hirCombo", "bool": false, "fullName": "Combination Hiragana"},
            {"name": "pract-kat", "bool": false, "fullName": "Katakana"},
            {"name": "pract-katDak", "bool": false, "fullName": "Katakana Dakuten"},
            {"name": "pract-katCombo", "bool": false, "fullName": "Combination Katakana"}
        ],
        flashCardsOn: true,
        guessInput: [],
        answerOutcome: null
    };

    /* Function to take input from the child and assign it to the state for the given item. */
    handleInputChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    /* TODO: Determin if below function can be refactored to meet DRY standards. Function is used in Review.js and Quiz.js for the same purpose */
    /* Assign the current state of the letters guessed to a variable. Add the key pressed to gInput. Take card selections and the current card index and assign to variable. Create function to itterate to the next card and reset to basic states. */
    entryValidation = (e)=> {
        let gInput = this.state.guessInput;
        gInput += e.key;

        let cardSelections = this.state.flashCardSelections;
        let cardIndex = this.state.flashCardIndex;

        let nextCard = ()=> {
            // DRY function to increment cardIndex and reset state.
            setTimeout(()=> {
                cardIndex++
                this.setState({
                    answerOutcome: null,
                    flashCardIndex: cardIndex,
                    guessInput: []
                });
            }, 1000);
        };

        /* Validate if the current guess equals the length of the english translation. If so, run nested if to validate if the input matches the english translation strig or alternate translation exactly. If it does then change states to show correct and add that item to the correctly guessed flash cards. If not then show wrong and assign that item to the incorrectly guessed. After showing correct/incorrect, run the nextCard function. */
        if( gInput.length === cardSelections[cardIndex].englishTranslation.length ) {

            if( gInput === cardSelections[cardIndex].englishTranslation || gInput === cardSelections[cardIndex].alternateEnglishTranslation ) {
                
                /* Set background to green. increment card index. clear guessInput. assign to correctFlash */
                let addCorrect = this.state.correctFlash;
                addCorrect.push(cardSelections[cardIndex]);
                this.setState({
                    answerOutcome: true,
                    correctFlash: addCorrect
                }, nextCard());

            } else {
                /* Set background to red. Increment card index. Clear guessInput. Assign to wrongFlash */
                let addWrong = this.state.wrongFlash;
                addWrong.push(cardSelections[cardIndex]);
                this.setState({
                    answerOutcome: false,
                    wrongFlash: addWrong
                }, nextCard());
            };
        };
    };

    nextCard = (e)=> {
        e.preventDefault();

        let count = this.state.flashCardIndex;
        count++;

        this.setState({
            flashCardIndex: count
        });
    };

    /* Event handling function that will take the button selections and change the bool value for the object with the same name. */
    buttonSelection = (e)=> {
        let currentSelections= this.state.flashCardSelections;
        currentSelections.map( (value, index)=> {
            if( e === value.name ) {
                let valueName= value.name;
                let valueBool= value.bool;
                /* Take the current index of the current selection and overwrite the values. */
                currentSelections[index]= {"name": valueName, "bool": !valueBool, "fullName": currentSelections[index].fullName};
                this.setState({
                    flashCardSelections: currentSelections,
                });
            };
        });
    };

    /* TODO: Create way to clear the selection for the flashcards and reset quiz. */

    componentDidMount() {
        this.props.shuffle();
        // document.addEventListener("keydown", this.entryValidation);
    };

    componentDidUpdate(prevProps) {
        if( this.props !== prevProps ){
            this.setState({
                rHiragana: this.props.hir,
                rKatakana: this.props.kat,
                rAccents: this.props.acc,
                // flashCardSelections: this.props.hir[0]
            })
        }
    }

    render() {
        /* Shorthand variables. */
        let fCS= this.state.flashCardSelections;
        let fCI= this.state.flashCardIndex;

        /* TODO:
            Display only the language selection buttons on page render.
            Have onClick function passed from LangOptions to parent for the selected options to be written to a state.
            On selection finalization, write cards for only the selected options.
        */
        
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
                            <div className="row">Flashcards</div>
                            <div className="row">

                                {/* TODO: Possibly replace the .bind function with extract child component. https://www.freecodecamp.org/news/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e/ */}
                                {/* Pass unique names for the options to the child so they can be properly distinguished based off the page's state. */}
                                <LangOptions
                                    handleChange={this.buttonSelection.bind(this)}
                                    selected={fCS}
                                    />

                                {fCS.length ? (
                                    <>
                                    <Card 
                                        handleChange={this.handleInputChange.bind(this)}
                                        guessInput={this.state.guessInput}
                                        character={fCS[fCI].character}
                                        translation={fCS[fCI].englishTranslation}
                                        on={this.state.flashCardsOn}
                                        outcome={this.state.answerOutcome}
                                        />
                                    </>
                                ):(<></>)}

                            </div>

                            <button onClick={this.nextCard}>Next Card</button>
                        </div>

                        <div className="tab-pane fade" id="practiceQuiz" role="tabpanel" aria-labelledby="practiceQuiz-tab">
                            <LangOptions
                                handleChange={this.handleInputChange.bind(this)}
                                selected={this.state.practiceSelections}
                                />
                        </div>
                    </div>

                </Container>

            </Container>
        );
    };
};

export default Review;