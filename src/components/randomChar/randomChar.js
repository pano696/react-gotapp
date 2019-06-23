import React, {Component} from 'react';
import styled from 'styled-components';
import GotSevices from '../../services/GotService';
import Spiner from '../spiner'
import ErrorMessage from '../errorMessage';
// import './randomChar.css';

export default class RandomChar extends Component {

  constructor() {
    super();
    this.updateCharacter();
  }


  gotSevices = new GotSevices();

  state = {
    char: {},
    loading: true,
    error: false
  }

  onCharLoaded = (char) => {
    this.setState({
      char,
      loading: false
    })
  }

  onError = (err) => {
    this.setState({
      error: true,
      loading: false
    })
  }

  updateCharacter() {
    const id = Math.floor(Math.random()*140 + 25); //25 - 140
    this.gotSevices.getCharacter(id)
        .then(this.onCharLoaded)
        .catch(this.onError)
  }

  render() {

    const {char, loading, error} = this.state;

      return (
          <RandomBlock>
            {!error ? (loading ? <Spiner/> : <View char={char}/> ) : <ErrorMessage /> }
          </RandomBlock>
      );
  }
}

const View = ({char}) => {
  const {name, gender, born, died, culture} = char;
  return (
    <>
      <H4>Random Character: {name}</H4>
      <Ul>
        <ListItemGroup>
          <Term>Gender</Term>
          <Span>{gender}</Span>
        </ListItemGroup>
        <ListItemGroup>
          <Term>Born</Term>
          <Span>{born}</Span>
        </ListItemGroup>
        <ListItemGroup>
          <Term>Died</Term>
          <Span>{died}</Span>
        </ListItemGroup>
        <ListItemGroup>
          <Term>Culture </Term>
          <Span>{culture}</Span>
        </ListItemGroup>
      </Ul>
    </>
  )
}

const RandomBlock = styled.div`
  background-color: #fff;
  padding: 25px 25px 15px 25px;
  margin-bottom: 40px;
  border-radius: 0.25rem;
`;

const H4 = styled.div`
  margin-bottom: 20px;
  text-align: center;
`;
const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;
const ListItemGroup = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-right: 0;
  border-left: 0;
  border-radius: 0;
  display: flex;
  justify-content: space-between;
`;
const Term = styled.span`
  font-weight: bold;
`;

const Span = styled.span``;
