import React from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import GotService from '../../services/GotService';


const App = () => {

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


    return (
        <>
            <Container>
                <Header />
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        <RandomChar/>
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
