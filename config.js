const twitter = require('twitter-lite');

exports.newClient = function (subdomain = 'api') {
    return new twitter({
        subdomain,
    consumer_key: 'ssFfzxR9ftTyztQxTqliLTgX5',
    consumer_secret: 'KTMqR5PSywA6gLr1QuxP8vlH2ECehpTaYgCaD4giabrkwK8Vvq',
    access_token_key: '3081007442-u7FTBMUektQc7lLzyIGfJrWv7OhyevCktJjUT5p',
    access_token_secret: 'U2Zu5bLwBGcmMDTcFUPWKQjKgAXuWpoQXvPRHPOmOflMG'
    });
}
