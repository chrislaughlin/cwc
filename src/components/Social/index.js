import React from 'react';
import PropTypes from 'prop-types';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import Instagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import Pintrest from '@fortawesome/fontawesome-free-brands/faPinterest';
import styled from 'styled-components';

const StyledSocial = styled.ul`
  list-style: none;
  li {
    color: black !important;
    margin: 0 5px 0 5px;
    display: inline;
    opacity: 0.6;
    :hover {
        opacity: 1; 
    }
  }
`;

const Social = ({
    size = 'lg'
}) => {
    return (
        <StyledSocial>
            <li>
                <a
                    href="https://www.facebook.com/creativeweddingcompany"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={Facebook} size={size} color="black" />
                </a>
            </li>
            <li>
                <a
                    href="https://twitter.com/cwcstationery"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={Twitter} size={size} color="black" />
                </a>
            </li>
            <li>
                <a
                    href="https://www.instagram.com/creativeweddingcompany/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={Instagram} size={size} color="black" />
                </a>
            </li>
            <li>
                <a
                    href="https://www.pinterest.com/cwcstationery/"
                    target="_blank"
                >
                    <FontAwesomeIcon icon={Pintrest} size={size} color="black" />
                </a>
            </li>
        </StyledSocial>
    );
};

Social.propTypes = {
    size: PropTypes.string
};

export default Social;