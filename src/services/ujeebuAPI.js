// https://ujeebu.com/docs?endpoint=Article%20API

var unirest = require("unirest");

var req = unirest("GET", "https://lexper.p.rapidapi.com/v1.1/extract");

req.query({
	"media": "1",
	"url": "https%3A%2F%2Fmedium.com%2Fpersonal-growth%2Fhow-to-be-yourself-2221085391a3"
});

req.headers({
	"x-rapidapi-host": "lexper.p.rapidapi.com",
	"x-rapidapi-key": ''
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});