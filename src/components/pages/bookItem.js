import React, {Component} from 'react';
import ItemDetails, {Field} from '../itemDetails';
import GotService from '../../services/GotService';


export default class BookItem extends Component {

  gotService = new GotService();

  render() {
    return(
      <ItemDetails
        getData={this.gotService.getBook}
        itemId={this.props.bookId}
        message='Загрузка данных с сервера'>
          <Field field='numberOfPages' label='Number of pages' />
          <Field field='publiser' label='Publiser' />
          <Field field='released' label='Released' />
      </ItemDetails>
    )
  }

}
