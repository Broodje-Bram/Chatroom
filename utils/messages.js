const moment = require('moment');

function formatMessage(username, text) {
    return {
        username,
        text,
        time: moment().utcOffset(60).format(' HH:mm ')
    }
}

module.exports = formatMessage;