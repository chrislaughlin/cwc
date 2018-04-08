import React, { Fragment } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import styled from 'styled-components';
import Recaptcha from 'react-recaptcha';
import Component from '@reactions/component'

import FlexDiv from "../components/styled/flexDiv";

const DeployButton = styled.button`
    height: 80px;
    width: 140px;
    font-size: 38px;
    background-color: transparent;
    border-color: #B39FB6;
    border-radius: 10px;
    :hover {
      background-color: #B39FB6;
      color: white;
      border-color: white;
    }
`;

const deployHook = 'https://api.netlify.com/build_hooks/5abebf89295b553d9faeb641';
const triggerDeploy = () => {
    fetch(deployHook, {
        method: 'POST'
    })
        .then(() => toast("Deployment Started...."))
        .catch(error => {
            toast("Deployment failed....");
            toast(JSON.stringify(error, null, 4));
        });
};

const Deploy = () => {
    return (
        <FlexDiv>
            <Component
                initialState={{verified: false}}
            >
                {({state, setState}) => {
                    console.log({state});
                    return (
                        <Fragment>
                            <Recaptcha
                                sitekey="6Lcm1lEUAAAAAMWY9TtdSqytTAT5cxmZ_4rim1CE"
                                verifyCallback={response => {
                                    console.log({response});
                                    console.log('VERIFIED');
                                    setState({verified: true})
                                }}
                            />
                            <DeployButton
                                onClick={triggerDeploy}
                                disabled={!state.verified}
                            >
                                Deploy
                            </DeployButton>
                            <ToastContainer />
                        </Fragment>
                    )
                }}

            </Component>
        </FlexDiv>
    )
};

export default Deploy;