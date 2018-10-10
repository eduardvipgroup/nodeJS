const request = require('request');
const cheerio = require('cheerio');

request('http://www.komcity.ru/news/', function (error, response, html) {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const cols = $('#ad');

        cols.each(function () {
            console.dir($(this).text());
        });
    }
});
