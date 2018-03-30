const logMessage = message => {
    console.log('***********************');
    console.log(message);
    console.log('***********************')
};

const errorMessage = message => {
    console.error('***********************');
    console.log(message);
    console.error('***********************')
};

exports.logMessage = logMessage;
exports.errorMessage = errorMessage;