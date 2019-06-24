import React, {Component} from 'react';
import styled from 'styled-components';
import Spiner from '../spiner';
import ErrorMessage from '../errorMessage';
// import './itemList.css';
export default class ItemList extends Component {

  state = {
    itemList: null,
    error: false
  }

  componentDidMount() {
    const {getData} = this.props;
    getData()
      .then((itemList) => this.setState({itemList}))
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  renderItems(arr) {
    return arr.map((item) => {
      const {id} = item;
      const label = this.props.renderItem(item);
      return (
        <ListGroupItem
          key={id}
          onClick={() => this.props.onItemSelected(id)}>
            {label}
        </ListGroupItem>
      )
    })
  }

  render() {

    const {itemList, error} = this.state;

    if (!itemList) {
      return <Spiner />
    }
    if (error) {
      return <ErrorMessage />
    }

    const items = this.renderItems(itemList);

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
