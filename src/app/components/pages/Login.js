// Karthik

import React, { Component } from 'react'
import { Form, Label, FormGroup, Input, Button, Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { login } from '../../state/actions';
import { Redirect } from 'react-router-dom'

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isLoading: false,
            isLogged: false,

        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmit = (e) => {
        e.preventDefault();


        if (this.state.username === 'admin' && this.state.password === 'admin') {
            this.props.login(this.state.username, this.state.password);
            this.setState({ isLogged: true });
        }
        else if (this.state.username && this.state.password) {
            alert("Incorrect Username or Password!!!")
        }
        else {
            alert('Please enter username and passwrd');
        }
    }
    render() {
        const { username, password, isLoading } = this.state;
        console.log(this.props.loginDetails, 'props')
        // console.log(this.props.isAuthenticatedUser, 'check')
        if (this.props.loginDetails.isAuthenticatedUser) {
            return <Redirect to="/" />
        }

        return (

            <Container>
                <h2>Login</h2>
                <Row>
                    <Col xs="6">
                        <Form onSubmit={this.handleSubmit} id='form'>
                            <FormGroup>
                                <Label for="userName">Username</Label>
                                <Input type="text" name="username" id="username" value={username} onChange={this.handleChange} />
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" value={password} onChange={this.handleChange} />
                            </FormGroup>
                            <Button disabled={isLoading}>Login</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        );
    }

}


export default connect(state => ({ loginDetails: state.loginReducer }), { login })(Login);
