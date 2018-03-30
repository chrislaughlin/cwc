import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components';

import LandingLogo from '../images/landing/landing-logo.png';
import FlexDiv from '../components/styled/flexDiv';
import Social from '../components/Social';

const Title = styled.span`
  font-family: 'Montserrat', sans-serif;
  font-size: 23px;
  margin-bottom: 10px;
`;
const SubTitle = styled.span`
  font-family: 'Homemade Apple', cursive;
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 10px;
`;

const EnterButton = styled.button`
    font-family: 'Montserrat', sans-serif;
    margin-top: 10px;
    background-color: transparent;
    color: #fff;
    border: 2px solid #fff;
    transition: color 170ms ease-in-out, border-color 170ms ease-in-out;
    :hover {
      background-color: #fff;
      border-color: transparent;
      color: #181818;
    }
`;

const LandingPage = () => {
    return (
        <FlexDiv
            style={{
                height: '100vh',
                padding: '50px 0 50px 0',
                color: 'white',
                textAlign: 'center'
            }}
        >
            <img
                src={LandingLogo}
                alt="CWC Logo"
                width="206px"
                height="100px"
            />
            <FlexDiv>
                <Title>
                    WEDDING INVITATIONS & STATIONERY DESIGN
                </Title>
                <SubTitle>
                    have your big day, your way
                </SubTitle>
                <span>
                    <EnterButton>
                        <Link
                            to="/home"
                        >
                            ENTER
                        </Link>
                    </EnterButton>
                </span>
            </FlexDiv>
            <Social/>
        </FlexDiv>
    )
}

export default LandingPage
