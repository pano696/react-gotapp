import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import RowBlock from '../rowBlock';


export default class BookPage extends Component {

  state = {
    selectedItem: 3,
    error: false
  }

  gotService = new GotService();

  componentDidCatch() {
    this.setState({error: true})
  }

  onItemSelected = (id) => {
    this.setState({selectedItem: id})
  }

  render() {

    if (this.state.error) { return <ErrorMessage />}

    const itemList = (
      <ItemList onItemSelected={this.onItemSelected}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => `${name}`}/>
    )

    const bookDetails = (
      <ItemDetails
        getData={this.gotService.getBook}
        itemId={this.state.selectedItem}>
          <Field field='numberOfPages' label='Number of pages' />
          <Field field='publiser' label='Publiser' />
          <Field field='released' label='Released' />
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={bookDetails} />
    )
  }
}

