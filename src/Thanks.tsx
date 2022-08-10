import React from "react";
import styles from "./shared";
import {Col, Grid, Popover, Row} from "rsuite";
import './Thanks.css';
import {NavLink} from "react-router-dom";

interface PageProps {
}

interface PageState {
}

const thanksStyles = {
    padding: '20px',
    backgroundColor: '#ddbcec',
    textColor: '#e3e3e3',
}

class Thanks extends React.Component<PageProps, PageState> {
    render() {
        return (
            <div style={styles}>
                <Grid fluid>
                    <Row>
                        <Col xs={24} sm={24} md={8}>
                        </Col>
                        <Col xs={24} sm={24} md={16}>
                            <Popover title={'Thank YOU!!'} visible className={'thanks-panel'}>
                                <div style={thanksStyles}>
                                    <p>Your support means the world to me, thanks :)</p>
                                    <p>
                                        <NavLink to="/" end>
                                            Return to Player
                                        </NavLink>
                                    </p>
                                </div>
                            </Popover>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Thanks
