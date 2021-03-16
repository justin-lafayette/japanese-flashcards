import React, {Component} from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

import jCharactersHir from '../jCharacters-hir.json';
import jCharactersHirDak from '../jCharacters-hir-dak.json';
import jCharactersHirCombo from '../jCharacters-hir-combo.json';
import jCharactersKat from '../jCharacters-kat.json';
import jCharactersKatDak from '../jCharacters-kat-dak.json';
import jCharactersKatCombo from '../jCharacters-kat-combo.json';
import jCharactersSmallLetters from '../jCharacters-smallLetters.json';
import jCharactersSymbols from '../jCharacters-symbols.json';
import Tab from '../components/Tab';
import LangOptions from '../components/LangOptions';

// TODO:
// render data
// options for seeing chart, flash cards, and guessing game
// store different tabs in state. Bootstrap tabs do not appear to work

class Review extends Component {

    state={
        hiragana: [],
        katakana: [],
        accents: [],
        kanji: [],
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

    handleInputChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    importAndShuffleArray = ()=> {
        // Solution found here using the Fisher-Yates shuffle. Has been adapted to use ES6 and custom variables: https://javascript.info/task/shuffle 

        // import to variables done here to prevent multiple page re-rendering before displaying
        const hir = [jCharactersHir, jCharactersHirDak, jCharactersHirCombo];
        const kat = [jCharactersKat, jCharactersKatDak, jCharactersKatCombo];
        const acc = [jCharactersSmallLetters, jCharactersSymbols];

        const rHir = hir;
        const rKat = kat;
        const rAcc = acc;

        // TODO: DRY code necessary for index map in following 3 functions.
        rHir.forEach((value, index) => {
            let currentIndex = rHir[index];

            currentIndex.forEach( (val, ind) => {

                let random = Math.floor(Math.random() * (ind + 1));
                [currentIndex[ind], currentIndex[random]] = [currentIndex[random], currentIndex[ind]];
            });
        });

        rKat.forEach((value, index) => {
            let currentIndex = rKat[index];

            currentIndex.forEach( (val, ind) => {

                let random = Math.floor(Math.random() * (ind + 1));
                [currentIndex[ind], currentIndex[random]] = [currentIndex[random], currentIndex[ind]];
            });
        });

        rAcc.forEach((value, index) => {
            let currentIndex = rAcc[index];

            currentIndex.forEach( (val, ind) => {

                let random = Math.floor(Math.random() * (ind + 1));
                [currentIndex[ind], currentIndex[random]] = [currentIndex[random], currentIndex[ind]];
            });
        });

        this.setState({
            hiragana: hir,
            katakana: kat,
            accents: acc,
            rHiragana: rHir,
            rKatakana: rKat,
            rAccents: rAcc,
            flashCardSelections: rHir[0]
        }, ()=> console.log("Random Hir: ", this.state.flashCardSelections));
    };

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

        if( gInput.length === cardSelections[cardIndex].englishTranslation.length ) {

            if( gInput === cardSelections[cardIndex].englishTranslation || gInput === cardSelections[cardIndex].alternateEnglishTranslation ) {
                
                // set background to green. increment card index. clear guessInput. assign to correctFlash
                let addCorrect = this.state.correctFlash;
                addCorrect.push(cardSelections[cardIndex]);
                this.setState({
                    answerOutcome: true,
                    correctFlash: addCorrect
                }, nextCard());

            } else {
                // set background to red. Increment card index. Clear guessInput. Assign to wrongFlash
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

    componentDidMount() {
        this.importAndShuffleArray();
        document.addEventListener("keydown", this.entryValidation);
    };

    render() {
        let fCS= this.state.flashCardSelections;
        let fCI= this.state.flashCardIndex;

        return (
            <Container
                className={"fluid"}
            >
                <Container>

                    <Tab />
                    <div className="tab-content" id="myTabContent">
                        <div className="tab-pane fade" id="charts" role="tabpanel" aria-labelledby="charts-tab">
                            ...
                        </div>

                        <div className="tab-pane fade show active" id="flashcards" role="tabpanel" aria-labelledby="flashcards-tab">
                            <div className="row">Flashcards</div>
                            <div className="row">

                                <LangOptions />

                                <Card 
                                    handleChange={this.handleInputChange.bind(this)}
                                    guessInput={this.state.guessInput}
                                    character={fCS[fCI].character}
                                    translation={fCS[fCI].englishTranslation}
                                    on={this.state.flashCardsOn}
                                    outcome={this.state.answerOutcome}
                                    />

                            </div>

                            <button onClick={this.nextCard}>Next Card</button>
                        </div>

                        <div className="tab-pane fade" id="practiceQuiz" role="tabpanel" aria-labelledby="practiceQuiz-tab">
                            <LangOptions />
                        </div>
                    </div>

                </Container>

            </Container>
        );
    };
};

export default Review;