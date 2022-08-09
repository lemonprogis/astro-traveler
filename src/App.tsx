import React from 'react';
import {Grid, Row, Col, Panel} from 'rsuite';
import album from './assets/album.jpeg';
import backgroundImage from './assets/site-background.jpg';
import './App.css';
import {Playlist} from "./Player";



const styles = {
    backgroundImage: `url(${backgroundImage})`,
    height:'100vh',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
}

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
                            <Panel shaded>
                                <Playlist />
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
  }
}

export default App;
