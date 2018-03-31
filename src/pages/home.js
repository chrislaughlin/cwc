import React from 'react'
import Link from 'gatsby-link'

import Testimonial from "../components/Testimonial/testimonial";
import BespokePackages from "../modules/bespokePackages";

const IndexPage = () => (
    <div>
        <Testimonial
            message="Absolutely love my invites... so unique... you did a fantastic job Louise... Thank you so much..x"
            from="KATHY & GEORGE, AUGUST 2016"
        />
        <BespokePackages />
    </div>
);

export default IndexPage
