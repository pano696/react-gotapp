import React, {Component} from 'react';
import styled from 'styled-components';
import Spiner from '../spiner';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
// import PropTypes from 'prop-type';
// import './itemList.css';
class ItemList extends Component {

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
    const {data} = this.props;
    const items = this.renderItems(data);

    return (
      <ListGroup>
        {items}
      </ListGroup>
    );
  }
}


const withData = (View, getData) => {
  return class extends Component {

    state = {
      data: null,
      error: false
    }


    componentDidMount() {
      getData()
        .then((data) => this.setState({data}))
    }

    componentDidCatch() {
      this.setState({error: true})
    }

    render() {

      const {data, error} = this.state;

      if (!data) {
        return <Spiner />
      }
      if (error) {
        return <ErrorMessage />
      }

      return <View  {...this.props} data={data}/>
    }
  }
}

const {getAllCharacters} = new GotService();
export default withData(ItemList, getAllCharacters);

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
