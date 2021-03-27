import React, { Component } from 'react';
import Container from '../components/Container';
import LangOptions from '../components/LangOptions';
import Card from '../components/Card';

class Quiz extends Component {

    state={
        rHiragana: [],
        rKatakana: [],
        rAccents: [],
        rKanji: [],
        correctFlash:[],
        wrongFlash: [],
        flashCardIndex: 0,
        flashCardSelections: [""],
        flashCardsOn: true,
        guessInput: [],
        answerOutcome: null
    };

    /* DRY */
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

    componentDidMount() {
        this.importAndShuffleArray();
        document.addEventListener("keydown", this.entryValidation);
    };

    render() {
        // let fCS= this.state.flashCardSelections;
        // let fCI= this.state.flashCardIndex;
        return (
            <Container
                className={"fluid"}
            >
                <Container>
                    <h1>Select options:</h1>
                    
                    <LangOptions
                        handleChange={this.handleInputChange.bind(this)}
                        hir="quiz-hir"
                        hirDak="quiz-hirDak"
                        hirCombo="quiz-hirCombo"
                        kat="quiz-kat"
                        katDak="quiz-katDak"
                        katCombo="quiz-katCombo"
                        />
                    <button type="button">Start</button>

                    {/* TODO: 
                        Adjust CSS formatting for how many colums should fit on a page for different breakpoints
                        Make it so cards do not appear before options are selected above and a button is pressed to start
                    */}
                    <div className="row row-cols-3 g-0">
                        {this.state.flashCardSelections.map( (value, index) => (
                            <div className="col" key={index}>
                                <Card 
                                    handleChange={this.handleInputChange.bind(this)}
                                    // character={fCS[fCI].character}
                                    // translation={fCS[fCI].englishTranslation}
                                    guessInput={this.state.guessInput}
                                    on={this.state.flashCardsOn}
                                    outcome={this.state.answerOutcome}
                                    />
                            </div>
                        ))}
                    </div>
    
                </Container>
    
            </Container>
        );
    }
}

export default Quiz;