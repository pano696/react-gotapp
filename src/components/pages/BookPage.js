import React, {Component} from 'react';
import ItemList from '../itemList';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import {withRouter} from 'react-router-dom';


class BookPage extends Component {

  state = {
    error: false
  }

  gotService = new GotService();

  componentDidCatch() {
    this.setState({error: true})
  }

  render() {

    if (this.state.error) { return <ErrorMessage />}

    return (
      <ItemList onItemSelected={(itemId) => {
        this.props.history.push(itemId)
      }}
        getData={this.gotService.getAllBooks}
        renderItem={({name}) => `${name}`}/>
    )
  }
}

export default withRouter(BookPage);
