import React, {useState} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/GotService';
import { longStackSupport } from 'q';


const App = () => {

  const [showRandomChar, toggleRandomChar] = useState(true);

  const got = new GotService();

  got.getAllCharacters()
      .then(res => console.log('All characters:', res));
  got.getCharacter(125)
    .then(res => console.log('Character 125:', res));
  got.getAllBooks()
    .then(res => console.log('All books:', res));
  got.getBook(4)
    .then(res => console.log('Book 4:', res));
  got.getAllHouses()
    .then(res => console.log('All houses:', res));
  got.getHouse(6)
    .then(res => console.log('Hous 6:', res));

  const toggleRandom = () => {
    toggleRandomChar(!showRandomChar)
  }

    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <button onClick={toggleRandom}>{showRandomChar ? 'Скрыть случайного героя' : 'Показать случайного героя'}</button>
                        {showRandomChar ? <RandomChar/> : null}
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default App;
