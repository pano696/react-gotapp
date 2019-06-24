import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import RowBlock from '../rowBlock';


export default class CharacterPage extends Component {

  state = {
    selectedItem: 130,
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
        getData={this.gotService.getAllCharacters}
        renderItem={({name, gender}) => `${name} (${gender})`}/>
    )

    const charDetails = (
      <ItemDetails
        getData={this.gotService.getCharacter}
        itemId={this.state.selectedItem}>
          <Field field='gender' label='Gender' />
          <Field field='born' label='Born' />
          <Field field='died' label='Died' />
          <Field field='culture' label='Culture' />
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={charDetails} />
    )
  }
}

