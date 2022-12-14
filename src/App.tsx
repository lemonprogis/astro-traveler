import React from 'react';
import {Grid, Row, Col, Panel} from 'rsuite';
import './App.css';
import {Playlist} from "./Player";
import styles from "./shared";
import {Paypal} from "./Donations";

interface PageProps {
}

interface PageState {
}

class App extends React.Component<PageProps, PageState> {
    public render() {
        return (
            <div style={styles}>
                <Grid fluid>
                    <Row>
                        <Col xs={24} sm={24} md={8}>
                        </Col>
                        <Col xs={24} sm={24} md={16}>
                            <Panel>
                                <Playlist />
                            </Panel>
                            <Panel>
                               <Paypal />
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
  }
}

export default App;
