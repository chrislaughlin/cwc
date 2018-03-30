import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import Logo from '../../images/header/logo.png'
import FlexDiv from '../../components/styled/flexDiv'

const NavLinks = styled.ul`
  letter-spacing: .17em;
  text-align: center;
`;

const NavItem = styled.li`
    text-align: center;
    display: inline-block;
    margin: 0 10px 0 10px;
    color: #aaa;
    font-size: 14px;
    cursor: pointer;
    .active, :hover {
    color: #333;
    }
`;

const NavLink = styled(Link)`
  text-transform: uppercase;
`;

const HeaderLogo = styled.img`
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 75px;
`;

const LINKS = [
    {
        text: 'home',
        to: '/home'
    },
    {
        text: 'blog',
        to: '/blog'
    }
];

const renderLink = link => {
    const {
        to,
        text
    } = link;
    return (
        <NavItem
            key={to}
        >
            <NavLink
                to={to}
                activeClassName="active"
            >
                {text}
            </NavLink>
        </NavItem>
    )
};

const Header = () => {
    return (
        <FlexDiv
            padding="20px 0 20px 0"
        >
            <HeaderLogo src={Logo} />
            <NavLinks>
                {LINKS.map(renderLink)}
            </NavLinks>
        </FlexDiv>
    );
};

export default Header
