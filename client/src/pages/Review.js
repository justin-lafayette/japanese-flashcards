import React, {Component} from 'react';

import Card from '../components/Card';
import Container from '../components/Container';
import LangOptions from '../components/LangOptions';
import Tab from '../components/Tab';

class Review extends Component {

    state={
        rHiragana: [this.props.hir],
        rKatakana: [this.props.kat],
        rAccents: [this.props.acc],
        rKanji: [],
        correctFlash:[],
        wrongFlash: [],
        flashCardIndex: 0,
        flashCardSelections: [],
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

    // https://stackoverflow.com/questions/40691062/add-and-remove-html-elements-on-button-click-in-react
    inputReviewSelection = ()=> {

    };

    // initialState = ()=> {
    //     this.setState({flashCardSelections:})
    // }

    componentDidMount() {
        console.log(this.props);

        this.setState({flashCardSelections: this.props.hir[0]});
        document.addEventListener("keydown", this.entryValidation);
    };

    render() {
        /* Shorthand variables. */
        let fCS= this.state.flashCardSelections;
        let fCI= this.state.flashCardIndex;
        console.log(this.props);
        console.log(fCS);
        console.log(fCI);
        return (
            <Container
                className={"fluid"}
            >
                <Container>

                    <Tab />
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade  show active" id="charts" role="tabpanel" aria-labelledby="charts-tab">
                            <h1>Charts go here</h1>
                        </div>

                        <div className="tab-pane fade" id="flashcards" role="tabpanel" aria-labelledby="flashcards-tab">
                            <div className="row">Flashcards</div>
                            <div className="row">

                                {/* TODO: Possibly replace the .bind function with extract child component. https://www.freecodecamp.org/news/react-pattern-extract-child-components-to-avoid-binding-e3ad8310725e/ */}
                                {/* Pass unique names for the options to the child so they can be properly distinguished based off the page's state. */}
                                <LangOptions
                                    handleChange={this.handleInputChange.bind(this)}
                                    hir="flash-hir"
                                    hirDak="flash-hirDak"
                                    hirCombo="flash-hirCombo"
                                    kat="flash-kat"
                                    katDak="flash-katDak"
                                    katCombo="flash-katCombo"
                                    />

                                {this.props.length ? (
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
                                hir="pract-hir"
                                hirDak="pract-hirDak"
                                hirCombo="pract-hirCombo"
                                kat="pract-kat"
                                katDak="pract-katDak"
                                katCombo="pract-katCombo"
                                />
                        </div>
                    </div>

                </Container>

            </Container>
        );
    };
};

export default Review;