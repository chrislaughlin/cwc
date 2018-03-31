import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import FlexDiv from "../styled/flexDiv";

const Message = styled.span`
  font-style: italic;
`;

const From = styled.span`
  text-transform: uppercase;
  font-size: 18px;
`;

const Testimonial = ({message, from}) => {
    return (
        <FlexDiv>
            <Message>
                "{message}"
            </Message>
            <From>
                - {from}
            </From>
        </FlexDiv>
    )
};

Testimonial.propTypes = {
    message: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired
};

export default Testimonial