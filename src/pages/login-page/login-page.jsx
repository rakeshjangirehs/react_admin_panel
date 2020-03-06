import React, { useState } from 'react';
import { Container, Content, Button, FlexboxGrid, Panel, Form, FormGroup, ControlLabel, FormControl, ButtonToolbar } from 'rsuite';

import './login-page.styles.css'

const LoginPage = () => {

    return (
        <Container>
            <Content>
                <FlexboxGrid justify="center">
                    <FlexboxGrid.Item colspan={6}  style={{marginTop: 110}}>
                        <Panel header={<h3>Login</h3>} bordered>
                        <Form fluid>
                            <FormGroup>
                            <ControlLabel>Username or email address</ControlLabel>
                            <FormControl name="name" />
                            </FormGroup>
                            <FormGroup>
                            <ControlLabel>Password</ControlLabel>
                            <FormControl name="password" type="password" />
                            </FormGroup>
                            <FormGroup>
                            <ButtonToolbar>
                                <Button appearance="primary">Sign in</Button>
                                <Button appearance="link">Forgot password?</Button>
                            </ButtonToolbar>
                            </FormGroup>
                        </Form>
                        </Panel>
                    </FlexboxGrid.Item>
                </FlexboxGrid>
            </Content>
        </Container>
    );
}

export default LoginPage;