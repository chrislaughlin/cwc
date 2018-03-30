import React , { PureComponent } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';

import './index.css';
import Helmet from '../components/Helmet';
import DasiyAndTim from '../images/landing/landing-slider/CREATIVE_WEDDING_COMPANY_DAISY_ANDTIM.jpeg'
import KathyAndGeorge from '../images/landing/landing-slider/CREATIVE_WEDDING_COMPANY_KATHY_AND_GEORGE.jpg'
import RandDB from '../images/landing/landing-slider/CREATIVE_WEDDING_COMPANY_RANDB.jpg'

const StyledTemplate = styled.div`
  background: url("${props => props.backgroundImage}");
  background-size: cover;
  transition: background-image 0.2s cubic-bezier(.33,0,.2,1);
`;

const StyledMainContent = styled.div`
    background-color: #c3c3c34d;
`;

const backgroundImages = [
    DasiyAndTim,
    KathyAndGeorge,
    RandDB
];

class TemplateWrapper extends PureComponent {

    state = {
        index: 0
    };

    componentDidMount() {
        setInterval(() => {
            this.setState(state => {
                if (state.index === 2) {
                    return {
                        ...state,
                        index: 0
                    }
                }
                return {
                    ...state,
                    index: state.index + 1
                }
            })
        }, 5000);
    }

    render() {
        const {
            children
        } = this.props;
        return (
            <StyledTemplate
                backgroundImage={backgroundImages[this.state.index]}
            >
                <Helmet />
                <StyledMainContent>
                    {children()}
                </StyledMainContent>
                <div
                    style={{
                        display: 'none'
                    }}
                >
                    <img src={DasiyAndTim} />
                    <img src={KathyAndGeorge} />
                    <img src={RandDB} />
                </div>
            </StyledTemplate>
        )
    }
}

TemplateWrapper.propTypes = {
    children: PropTypes.func,
}

export default TemplateWrapper
