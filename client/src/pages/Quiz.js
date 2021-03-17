import React, { Component } from 'react';
import Container from '../components/Container';
import LangOptions from '../components/LangOptions';
import Card from '../components/Card';

import jCharactersHir from '../jCharacters-hir.json';
import jCharactersHirDak from '../jCharacters-hir-dak.json';
import jCharactersHirCombo from '../jCharacters-hir-combo.json';
import jCharactersKat from '../jCharacters-kat.json';
import jCharactersKatDak from '../jCharacters-kat-dak.json';
import jCharactersKatCombo from '../jCharacters-kat-combo.json';
import jCharactersSmallLetters from '../jCharacters-smallLetters.json';
import jCharactersSymbols from '../jCharacters-symbols.json';

class Quiz extends Component {

    state={
        guessInput: "",
        answerOutcome: null,
        flashCardSelections: [""],
        flashCardsOn: true
    };

    handleInputChange = (name, value) => {
        this.setState({
            [name]: value
        });
    };

    // TODO: Function used in two places. Find way to pass function down but still be able to re-randomize when necessary.
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

    // TODO: entryValidation used in two places. Find way to pass function from parent and still function as intended.
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