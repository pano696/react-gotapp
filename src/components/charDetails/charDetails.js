import React, {Component} from 'react';
import styled from 'styled-components';
import GotService from '../../services/GotService';
// import './charDetails.css';
export default class CharDetails extends Component {

  state = {
    char: null
  }

  gotService = new GotService();

  componentDidMount() {
    this.updateChar();
  }

  componentDidUpdate(prevProps) {
    if (this.props.charId !== prevProps.charId) {
      this.updateChar();
    }
  }

  updateChar() {
    const {charId} = this.props;
    console.log(charId);

    if (!charId) {return;}

    this.gotService.getCharacter(charId)
        .then((char) => this.setState({char}));
  }

  render() {

    if (!this.state.char) {
      return <span className="select-error">Please select a character</span>
    }

    const {name, gender, born, died, culture} = this.state.char;

    return (
        <CharDetailsBlock>
            <H4>{name}</H4>
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
                    <Term>Culture</Term>
                    <Span>{culture}</Span>
                </ListItemGroup>
            </Ul>
        </CharDetailsBlock>
    );
  }
}

const CharDetailsBlock = styled.div`
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
