var express       = require ('express');
var bodyParser    = require ('body-parser');
var logger        = require ('morgan');
var requestinator = require ('request');
var cheerio       = require('cheerio');

//Create the express App object
var app = express();

// Mount middleware
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended :true }));
app.use(logger('dev'));

// Routes
app.get('/', function(req, res){
	res.sendFile('index.html', {
		root : './public/html'
	});
});

app.get('/api/news', function(req, res){
	var articleData = [];
	//1 - use REQUEST to grab ViceNews info
	requestinator('https://news.vice.com', function(err, reponse, body){
		// console.log('BODY : ', body);
	//2 - use CHEERIO to get the info we want
	var $ = cheerio.load(body);
	// .widget-list article // - Too generic, we got too many articles
	// .widget-list .in-the-news-list-item
	// console.log( $('.widget-list > .in-the-news-list-item').length);
	
	
	//Grabbing articles
	var $articles = $('.widget-list > .in-the-news-list-item');

	// For each article, find the relevant information
	$articles.each(function(index, element){
		var $article = $(element);
		var articleInfo = {};
		// Topic : .article-topic > a TEXT
		articleInfo.topic = $article
			.find('.article-topic > a')
			.text();
		// Image : img SRC attribute
		articleInfo.img = $article
			.find('img')
			.attr('data-sources');
		// Title : h2 > a TEXT
		articleInfo.title = $article
			.find('h2 > a')
			.text();
		// Desc  : .article-one-liner TEXT
		articleInfo.desc = $article
			.find('.article-one-liner')
			.text();
		articleData.push(articleInfo);
	}); // END $articles each
	res.send(articleData);
}) //END request callback
});
// Listen

var port = process.env.PORT || 8008;
app.listen(port, function(){
	console.log(`Server online, human. Port: ${port}`);
})