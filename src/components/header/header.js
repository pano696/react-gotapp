import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <HeaderBlock>
            <HeaderTitle>
                <Link to="/">Game of Thrones DB</Link>
            </HeaderTitle>
            <HeaderLinks>
                <Li>
                    <Link to="/characters/" >Characters</Link>
                </Li>
                <Li>
                    <Link to="/houses/">Houses</Link>
                </Li>
                <Li>
                    <Link to="/books/">Books</Link>
                </Li>
            </HeaderLinks>
        </HeaderBlock>
    );
};

export default Header;


const HeaderBlock = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const HeaderTitle = styled.h3`
    font-size: 24px;
    color: #fff;
    margin: 0;
`;

const HeaderLinks = styled.ul`
    display: flex;
    margin: 0;
    align-items: center;
    color: #fff;
    list-style-type: none;
    li {
        margin-right: 20px;
        font-size: 18px;
    }
`;
const Li = styled.li``;
