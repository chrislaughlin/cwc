import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justifyContent || 'space-between'};
    ${props => props.padding && `padding: ${props.padding};`}
    ${props => props.flexWrap && `flex-wrap: wrap;`}
`;

FlexDiv.propTypes = {
    direction: PropTypes.string,
    align: PropTypes.string,
    justifyContent: PropTypes.string,
    flexWrap: PropTypes.bool
};

export default FlexDiv;