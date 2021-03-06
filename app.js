var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var fs=require('fs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));


app.get('/',function(req,res){
	res.render('anotherHome.ejs');
})

app.get('/workpage/:id', function(req,res){
	if(req.params.id=='shadesOfGray'){
		var worksheet={
			title:'Bob Ross',
			body:fs.readFileSync('public/textFiles/bobRoss.txt').toString(),	
		}
		res.render('workpage.ejs',{worksheet:worksheet});
	}else if(req.params.id=='foxInSocks'){
		var worksheet={
			title:'Fox In Socks',
			body:fs.readFileSync('public/textFiles/foxInSocks.txt').toString(),
		}
		res.render('workpage.ejs',{worksheet:worksheet});
	}else if(req.params.id=='alexJonesDreams'){
		var worksheet={
			title:'Alex Jones',
			body:fs.readFileSync('public/textFiles/alexJonesDreams.txt').toString(),
		}
		res.render('workpage.ejs',{worksheet:worksheet});
	}else if(req.params.id=='tonaldDrump'){
		var worksheet={
			title:'Tonald Drump',
			body:fs.readFileSync('public/textFiles/trumpAxios.txt').toString(),
		}
		res.render('workpage.ejs',{worksheet:worksheet});
	}
	
})

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);