var express = require("express"),
	app = express(),
	port = process.env.PORT || 3000;

app.use(express.static(__dirname + "/app/"));

app.get("/", function(req, res) {
	res.sendFile("index.html");
});

app.listen(port, function() {
	console.log("Server started on port " + port);
})