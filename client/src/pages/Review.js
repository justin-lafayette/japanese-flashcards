import React, { Component } from 'react';

/* Components */
import Card from '../components/Card';
import Container from '../components/Container';
import LangOptions from '../components/LangOptions';
import Tab from '../components/Tab';

/* Character import */
import jCharacters from '../jCharacters.json';

/* TODO:
    Get app functioning by skipping combining everything into one area.
    // - Get app to render basic information before getting it to shuffle.
    // - Get app to allow selecting basic information
    - Get app to recognize inputs
        - Possibly add inputs to object in state
        - or make validation dynamic to register the selected input
    - Get app to validate inputs
    - Randomize on submit instead of page load
*/

class Review extends Component {

    state= {
        jCharacters,
        cardIndex: 0,
        input: ""
    };

    shuffleArrays = ()=> {
        // Solution found here using the Fisher-Yates shuffle. Has been adapted to use ES6 and custom variables: https://javascript.info/task/shuffle 
        // import to variables done here to prevent multiple page re-rendering before displaying
        const hir = this.state.hiragana;
        const kat = this.state.katakana;
        const acc = this.state.accents;

        /* Add each imported language to a parent array. */
        let parent= [hir, kat, acc];
        let all= [];

        /* Itterate through each of the parent's arrays, then through each of those children's arrays. In the parent and child, assign a shorthand variable to track the given parent and child indexes. In the grandchild, randomize the order of the grandchild inside the child using the shorthand and random number. Child arrays will now be shuffled randomly. */
        parent.forEach( (value, index) => {
            let parentIndex= parent[index];
            value.forEach( (val, ind) => {
                let childIndex = parentIndex[ind];
                val.forEach( (v, i) => {
                    /* Assign the random number to a varialbe to be called later. Variable creates a random number between 0 & 1 and adds 1 to it. */
                    let random = Math.floor(Math.random() * (i +1));
                    [childIndex[i], childIndex[random]] = [childIndex[random], childIndex[i]];
                });
            });
        });

        this.setState({
            rHiragana: parent[0],
            rKatakana: parent[1],
            rAccents: parent[2],
            rAll: all.concat(parent[0], parent[1], parent[2]),
        });
    };

    handleNext = ()=> {
        let num = this.state.cardIndex;
        num++;
        this.setState({
            cardIndex: num
        })
    };

    handleChange(event) {
        const { name, value } = event.target;
        console.log("name", name);
        console.log("value", value);
        this.setState({
            input:{[name]: value}
        });
    }

    render() {
        // Object.keys(this.state.jCharacters.hiragana.hir).map( (key, index) => console.log(this.state.jCharacters.hiragana.hir[key].character));
        console.log(this.state)
        
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
                                {Object.keys(this.state.jCharacters.hiragana.hir).map( (key, index) => (
                                    <div className="card text-center" key= {index}>
                                        <div>
                                            <h5 className="card-title" >{this.state.jCharacters.hiragana.hir[key].character}</h5>
                                            <input type="text" name={this.state.jCharacters.hiragana.hir[key].characterName} value={this.state.input[index]} onChange={this.handleChange.bind(this)} />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button onClick={this.handleNext}>Next Card</button>
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