import React from 'react';
import styled from 'styled-components';

import FlexDiv from "../components/styled/flexDiv";
import SmallLeft from '../images/home/bespokePackage/small-left.jpeg'
import SmallRight from '../images/home/bespokePackage/small-right.jpeg'
import ProductListSide from '../images/home/bespokePackage/product-list-side.jpg'
import {media} from "../components/styled/media";

const Content = styled.div`
  margin: 0 20px 0 20px;
  flex: 1;
`;

const SideImage = styled.div`
   width: ${props => props.width || '150px'};
   ${
    media.modile`
        width: 100vh
        margin: 10px 10px
    `
    }
`;

const ProductsList = styled.ul`
  list-style: disc;
  h3 {
    text-align: left;
    color: #B39FB6;
  }
`;

const BespokePackages = () => {
    return (
        <FlexDiv>
            <h1>
                Bespoke Packages
            </h1>
            <FlexDiv
                direction="row"
                flexWrap
            >
                <SideImage>
                    <img src={SmallLeft} />
                </SideImage>
                <Content>
                    <h3>
                        WE CAN PROVIDE YOU WITH ALL THE STATIONERY YOU WILL NEED FOR YOUR BIG DAY & BEYOND..
                    </h3>
                    <p>
                        Every wedding is different and we think your stationery is the perfect way to reflect your personality...
                    </p>
                    <p>
                        Through personal consultation together we can create the perfect stationery design for your wedding showcasing your individual style as a couple - From rustic and charming to modern and elegant and anything and everything in between. We are extremely open to suggestions you may have and aim to make the experience of choosing your wedding stationery enjoyable, easy and exciting.
                    </p>
                </Content>
                <SideImage>
                    <img src={SmallRight} />
                </SideImage>
            </FlexDiv>
            <FlexDiv
                direction="row"
                flexWrap
            >
                <ProductsList>
                    <li>
                        <h3>
                            SAVE THE DATES
                        </h3>
                    </li>
                    <li>
                        <h3>
                            WEDDING INVITATIONS & RSVP CARDS
                        </h3>
                    </li>
                    <li>
                        <h3>
                            EVENING RECEPTION INVITATIONS
                        </h3>
                    </li>
                    <li>
                        <h3>
                            ORDERS OF SERVICE
                        </h3>
                    </li>
                    <li>
                        <h3>
                            TABLE NAMES & PLACE CARDS
                        </h3>
                    </li>
                    <li>
                        <h3>
                            SEATING PLANS
                        </h3>
                    </li>
                    <li>
                        <h3>
                            & MORE!
                        </h3>
                    </li>
                </ProductsList>
                <SideImage
                    width="50%"
                >
                    <img src={ProductListSide}/>
                </SideImage>
            </FlexDiv>
        </FlexDiv>
    )
};

export default BespokePackages