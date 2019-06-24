import React, {Component} from 'react';
import ItemList from '../itemList';
import ItemDetails, {Field} from '../itemDetails';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/GotService';
import RowBlock from '../rowBlock';


export default class HousePage extends Component {

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
        getData={this.gotService.getAllHouses}
        renderItem={({name}) => `${name}`}/>
    )

    const HouseDetails = (
      <ItemDetails
        getData={this.gotService.getHouse}
        itemId={this.state.selectedItem}>
          <Field field='region' label='Region' />
          <Field field='words' label='Words' />
          <Field field='titles' label='Titles' />
          <Field field='overlord' label='Overlord' />
          <Field field='ancentralWeapons' label='Ancentral weapons' />
      </ItemDetails>
    )

    return (
      <RowBlock left={itemList} right={HouseDetails} />
    )
  }
}

