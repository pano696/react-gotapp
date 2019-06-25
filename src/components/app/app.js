import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import {Start, ErrorPath, CharacterPage, HousePage, BookPage, BookItem} from '../pages'
import styled from 'styled-components';
import ErrorMessage from '../errorMessage';
import {BrowserRouter as Router,  Route, Switch} from 'react-router-dom';


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
      <Router>
        <div className="app">
          <Container>
              <Header />
          </Container>
          <Container>
              <Row>
                  <Col lg={{size: 5, offset: 0}}>
                      <Btn onClick={this.toggleRandom}>{this.state.showRandomChar ? 'Скрыть случайного героя' : 'Показать случайного героя'}</Btn>
                      {this.state.showRandomChar ? <RandomChar interval='5000'/> : null}
                  </Col>
              </Row>
              <Switch>
                <Route path='/' exact component={Start} />
                <Route path='/characters' exact component={CharacterPage} />
                <Route path='/houses' exact component={HousePage} />
                <Route path='/books' exact component={BookPage} />
                <Route path='/books/:id' exact render={
                  ({match, location, history}) => {
                    return <BookItem bookId={match.params.id}/>
                  }
                }/>
                <Route component={ErrorPath} />
              </Switch>
          </Container>
        </div>
      </Router>
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
