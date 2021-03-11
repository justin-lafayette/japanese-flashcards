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
        flashCardsOn: true
    };

    // importStates = ()=> {
    //     this.setState({
    //         hiragana: [jCharactersHir, jCharactersHirDak, jCharactersHirCombo],
    //         katakana: [jCharactersKat, jCharactersKatDak, jCharactersKatCombo],
    //         accents: [jCharactersSmallLetters, jCharactersSymbols]
    //     }, ()=> this.shuffleArray());
    // };

    importAndShuffleArray = ()=> {
        // Solution found here using the Fisher-Yates shuffle. Has been adapted to use ES6 and custom variables: https://javascript.info/task/shuffle 

        // import to variables done here to prevent multiple page re-rendering before displaying
        let hir = [jCharactersHir, jCharactersHirDak, jCharactersHirCombo];
        let kat = [jCharactersKat, jCharactersKatDak, jCharactersKatCombo];
        let acc = [jCharactersSmallLetters, jCharactersSymbols];

        let rHir = hir;
        let rKat = kat;
        let rAcc = acc;

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

    entryValidation = ()=> {

    };

    nextCard = (e)=> {
        e.preventDefault();

        let count = this.state.flashCardIndex;
        count++;

        this.setState({
            flashCardIndex: count
        })
    };

    inputReviewSelection = ()=> {

    };

    componentDidMount() {
        this.importAndShuffleArray();
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
                                character={fCS[fCI].character}
                                translation={fCS[fCI].englishTranslation}
                                on={this.state.flashCardsOn}
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