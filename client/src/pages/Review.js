import React, {Component} from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

import jCharacters from '../jCharacters.json';
import jCharactersHir from '../jCharacters-hir.json';
import jCharactersHirDak from '../jCharacters-hir-dak.json';
import jCharactersHirCombo from '../jCharacters-hir-combo.json';
import jCharactersKat from '../jCharacters-kat.json';
import jCharactersKatDak from '../jCharacters-kat-dak.json';
import jCharactersKatCombo from '../jCharacters-kat-combo.json';
import jCharactersSmallLetters from '../jCharacters-smallLetters.json';
import jCharactersSymbols from '../jCharacters-symbols.json';

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
        rHir.map((value, index) => {
            let currentIndex = rHir[index];

            currentIndex.map( (val, ind) => {

                let random = Math.floor(Math.random() * (ind + 1));
                [currentIndex[ind], currentIndex[random]] = [currentIndex[random], currentIndex[ind]];
            });
        });

        rKat.map((value, index) => {
            let currentIndex = rKat[index];

            currentIndex.map( (val, ind) => {

                let random = Math.floor(Math.random() * (ind + 1));
                [currentIndex[ind], currentIndex[random]] = [currentIndex[random], currentIndex[ind]];
            });
        });

        rAcc.map((value, index) => {
            let currentIndex = rAcc[index];

            currentIndex.map( (val, ind) => {

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
        // compare to state info for current flash card shown. Validate once input has reached the length of the english translation. Add second validator to see if alternate translation is valid. Set state for correct/incorrect so card shows different color. Add card to correct pile for later review. Update flashCardIndex.

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

        // TODO: Card currently doesn't register which translation is longer. This needs to be done as some alt translations are longer than the normal.

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
            }
        }

        this.setState({guessInput: [gInput]}, ()=> console.log(this.state.guessInput));
    };

    // nextCard = (e)=> {
    //     e.preventDefault();

    //     let count = this.state.flashCardIndex;
    //     count++;

    //     this.setState({
    //         flashCardIndex: count
    //     })
    // };

    inputReviewSelection = ()=> {

    };

    componentDidMount() {
        this.importAndShuffleArray();
        document.addEventListener("keydown", this.entryValidation)
    }

    render() {
        let fCS= this.state.flashCardSelections;
        let fCI= this.state.flashCardIndex;

        return (
            <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                <Container
                    className={"fluid"}
                >
                    <Container>

                        <div className="row">Flashcards</div>

                        <div className="row">
                            {/* Write selected items to single array in flashCardSelections
                                User flashCardIndex to loop through array until complete
                                Set wrong and right answers while looping
                                evaluate after complete & offer review of wrong
                            */}
                            
                            <Card
                                onChange={this.entryValidation}
                                value={this.state.guessInput}
                                character={fCS[fCI].character}
                                translation={fCS[fCI].englishTranslation}
                                on={this.state.flashCardsOn}
                                outcome={this.state.answerOutcome}
                                />
                        </div>

                        <button onClick={this.nextCard}>Next Card</button>

                    </Container>

                </Container>

            </div>
        );
    };
};

export default Review;