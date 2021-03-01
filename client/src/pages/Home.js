import React, {Component} from 'react';
import Container from '../components/Container';
import Table from '../components/Table';
import mockData from '../mockData.js';


class App extends Component {

    state={

    };

    render() {
        return (
            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                <Container
                    className={"fluid"}
                >
                    <Container>

                        <Table
                            data={mockData}
                        />
                        
                    </Container>

                </Container>

            </div>
        );
    };
};

export default App;