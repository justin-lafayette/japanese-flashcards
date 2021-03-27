import React, { Component } from 'react';
import Card from '../components/Card';
import Container from '../components/Container';

let testData= [
    {
        "kanji":"亜",
        "grade":8,
        "stroke_count":7,
        "meanings":["Asia","rank next","come after","-ous"],
        "kun_readings":["つ.ぐ"],
        "on_readings":["ア"],
        "name_readings":["や","つぎ","つぐ"],
        "jlpt":1,
        "unicode":"4e9c",
        "heisig_en":"Asia"
    }
];

class Dictionary extends Component {

    state={
        kanjiData: testData,
        KanjiOn: true,

    }


    render() {
        return (
          <Container
              className={"fluid"}
          >
              <Container>

                {/* TODO: Possibly place all of the search into accordion/collapsible button. On search, accordion automatically collapses. */}
                <div>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search..." aria-label="Search" />
                        <button className="btn" type="submit">Search!</button>
                    </form>
                    <div className="accordion" id="kanjiSearchAccordion">
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="kanjiSearchAccordionH1">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-toggle="#collapseOne" aria-expanded="true" aria-controls="kanjiSearchAccordionH1">
                                    Filters
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="kanjiSearchAccordionH1" data-bs-parent="#kanjiSearchAccordion">
                                <div className="accordion-body">
                                    <form className="d-flex">
                                        {/* TODO: Setup options to show for and take input of multiple selections to pass to the API pull. */}
                                        <ul>
                                            <li>Grade: </li>
                                            <li>Stroke Count: </li>
                                        </ul>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                  <Card
                    kanjiOn={true}
                    data={this.state.kanjiData}
                    />
      
              </Container>
      
          </Container>
        );
    };
};

export default Dictionary;