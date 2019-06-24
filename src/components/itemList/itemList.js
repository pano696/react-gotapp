import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/GotService';
import Spiner from '../spiner';
import ErrorMessage from '../errorMessage';
// import './itemList.css';
export default class ItemList extends Component {

  state = {
    charList: null,
    error: false
  }

  gotService = new GotService();

  componentDidMount() {
    this.gotService.getAllCharacters()
        .then((charList) => this.setState({charList}))
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  renderItems(arr) {
    return arr.map((item, i) => {
      console.log();

      return (
        <ListGroupItem
          key={item.url.substring(item.url.lastIndexOf('/') + 1)}
          onClick={() => this.props.onCharSelected(item.url.substring(item.url.lastIndexOf('/') + 1))}>
            {item.name}
        </ListGroupItem>
      )
    })
  }

  render() {

    const {charList, error} = this.state;

    if (!charList) {
      return <Spiner />
    }
    if (error) {
      return <ErrorMessage />
    }

    const items = this.renderItems(charList);

    return (
      <ListGroup>
        {items}
      </ListGroup>
    );
  }
}

const ListGroupItem = styled.li`
  position: relative;
  display: block;
  padding: 0.75rem 1.25rem;
  margin-bottom: -1px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  cursor: pointer;
  :first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }
  :last-child {
    margin-bottom: 0;
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }
`;

const ListGroup = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0;
  margin-bottom: 0;
`;
