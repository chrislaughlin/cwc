import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FlexDiv = styled.div`
    display: flex;
    flex-direction: ${props => props.direction || 'column'};
    align-items: ${props => props.align || 'center'};
    justify-content: ${props => props.justifyContent || 'space-between'};
`;

FlexDiv.propTypes = {
    direction: PropTypes.string,
    align: PropTypes.string,
    justifyContent: PropTypes.string,
};

export default FlexDiv;