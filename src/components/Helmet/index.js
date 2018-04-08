import React from 'react';
import Helmet from 'react-helmet'

const CustomHelmet = () => {
    return (
        <Helmet
            title="Creative Wedding Company"
            meta={[
                { name: 'description', content: 'Creative Wedding Company' },
                { name: 'keywords', content: 'weddings' },
            ]}
        >
            <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        </Helmet>
    );
};

export default CustomHelmet;