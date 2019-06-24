import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/GotService';
import Spiner from '../spiner';
import ErrorMessage from '../errorMessage';
// import './charDetails.css';

const Field = ({item, field, label}) => {
  return(
    <ListItemGroup>
        <Term>{label}</Term>
        <Span>{item[field]}</Span>
    </ListItemGroup>
  )
}

export {
  Field
}
export default class ItemDetails extends Component {

  state = {
    item: null,
    loading: false,
    error: false
  }

  gotService = new GotService();

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({loading: true});
      this.updateItem()
    }
  }

  componentDidCatch() {
    this.setState({error: true})
  }

  updateItem() {
    const {getData, itemId} = this.props;
    getData(itemId)
      .then((item) => this.setState({
        item,
        loading: false
      }))
  }

  render() {

    if (!this.state.item) {
      return (
        <ItemDetailsBlock>Please select a item</ItemDetailsBlock>
      )
    }


    const {item, error} = this.state
    const {name} = item;

    if (!item) {
      return  (
        <ItemDetailsBlock>
          <Spiner />
        </ItemDetailsBlock>
      )
    }

    if (error) {
      return <ErrorMessage />
    }



    return (
        <ItemDetailsBlock>
            <H4>{name}</H4>
            <Ul>
                {
                  React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, {item})
                  })
                }
            </Ul>
        </ItemDetailsBlock>
    );
  }
}

const ItemDetailsBlock = styled.div`
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
