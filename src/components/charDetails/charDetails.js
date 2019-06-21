import React, {Component} from 'react';
import styled from 'styled-components';
// import './charDetails.css';
export default class CharDetails extends Component {

    render() {
        return (
            <CharDetailsBlock>
                <H4>John Snow</H4>
                <Ul>
                    <ListItemGroup>
                        <Term>Gender</Term>
                        <Span>male</Span>
                    </ListItemGroup>
                    <ListItemGroup>
                        <Term>Born</Term>
                        <Span>1783</Span>
                    </ListItemGroup>
                    <ListItemGroup>
                        <Term>Died</Term>
                        <Span>1820</Span>
                    </ListItemGroup>
                    <ListItemGroup>
                        <Term>Culture</Term>
                        <Span>First</Span>
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
