import React, { Component } from 'react';
import Container from '../components/Container';
import Table from '../components/Table';
import mockData from '../mockData.js';


class Home extends Component {

    state={

    };

    render() {
        return (
            <Container
                className={"fluid"}
            >
                <Container>

                    <Table
                        data={mockData}
                    />

                </Container>

            </Container>
        );
    };
};

export default Home;