import React, {Component} from 'react';
import Container from '../components/Container';
import Card from '../components/Card';

import jCharacters from '../jCharacters.json';

// TODO:
// render data
// options for seeing chart, flash cards, and guessing game
// store different tabs in state. Bootstrap tabs do not appear to work

class Review extends Component {

    state={

    };

    render() {
        console.log(jCharacters[0])
        return (
            <div className="tab-pane fade show active" id="review" role="tabpanel" aria-labelledby="review-tab">
                <Container
                    className={"fluid"}
                >
                    <Container>

                        <div className="row">Hiragana</div>

                        <div className="row row-cols-lg-5 row-cols-sm-2 g-0">

                            {jCharacters.map( (value, index) => (

                                // {jCharacters.alphabet = "hir" ?}

                                <div className="col">
                                        <Card 
                                            key={index}
                                            character={value.character}
                                            translation={value.englishTranslation}
                                            altTranslation={value.alternateEnglishTranslation}
                                            isLetter={value.isLetter}
                                            />
                                </div>
                            ))}

                        </div>
                        <div className="row">Katakana</div>

                    </Container>

                </Container>

            </div>
        );
    };
};

export default Review;