import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {CharacterPage, BookPage, HousePage} from '../pages'
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';


export default class App extends Component {

  state = {
    showRandomChar: true,
    error: false
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  toggleRandom = () => {
    this.setState({showRandomChar: !this.state.showRandomChar})
  }

  render() {

    if (this.state.error) { return <ErrorMessage />}

    return (
      <>
          <Container>
              <Header />
          </Container>
          <Container>
              <Row>
                  <Col lg={{size: 5, offset: 0}}>
                      <Btn onClick={this.toggleRandom}>{this.state.showRandomChar ? 'Скрыть случайного героя' : 'Показать случайного героя'}</Btn>
                      {this.state.showRandomChar ? <RandomChar/> : null}
                  </Col>
              </Row>
              <CharacterPage />
              <BookPage />
              <HousePage />
          </Container>
      </>
    );
  }
};


const Btn = styled.button`
  margin: 1rem auto;
  text-align: center;
  padding: 5px;
  display: block;
  background: #2522c7;
  color: #ffffff;
  border: none;
`;
