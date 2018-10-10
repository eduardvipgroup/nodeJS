const request = require('request'); // не utf-8
const cheerio = require('cheerio');
const needle = require('needle');

needle('http://www.komcity.ru/news/', function (error, response, html) {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(html);
        const cols = $('#ad');

        cols.each(function () {
            console.dir($(this).text());
        });
    }
});
needle.get('https://habr.com', function(error, response) {
    if (!error && response.statusCode === 200) {
        const $ = cheerio.load(response.body);
        const el = $('h2 a');
        el.each((idx, item) => {
            console.log((idx + 1) + '.', $(item).text());
    })
    }
});
