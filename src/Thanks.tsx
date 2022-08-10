import React from "react";
import styles from "./shared";
import {Col, Grid, Panel, Row} from "rsuite";

interface PageProps {
}

interface PageState {
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
                            <Panel shaded>
                                <p>Thank you! I really appreciate it.</p>
                            </Panel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Thanks
