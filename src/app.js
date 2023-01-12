const path = require('path')
const express = require('express')
const hbs = require('hbs')
const bodyParser = require ('body-parser')
const sendContactEmail = require('./emails/contact')
const { type } = require('os')


const app = express()
// app.use(express.json())
app.use(bodyParser.urlencoded({extended: false}))

//Defining paths
const publicDirectoryPath = path.join(__dirname + '../public')
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

// Engine set up
app.set('view engine', '.hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)


app.use(express.static(publicDirectoryPath));
app.use('*/css',express.static('public/css'));
app.use('*/js',express.static('public/js'));
app.use('*/img',express.static('public/img'));

app.get('', (req, res)=> {
    res.render('index', {

    })
})

app.get('/about', (req, res)=> {
    res.render('about', {

    })
})

app.get('/discover/artistes', (req, res)=> {
    res.render('slider', {

    })
})

app.get('/faq', (req, res)=> {
    res.render('faq', {

    })
})

app.get('/services', (req, res)=> {
    res.render('srv', {

    })
})

app.get('/contact-us', (req, res)=> {
    res.render('contact-us', {
        
    })
})

app.get('/slider', (req, res)=> {
    res.render('slider', {

    })
})

app.get('/privacy', (req, res)=> {
    res.render('privacy', {

    })
})

app.get('/terms', (req, res)=> {
    res.render('terms', {

    })
})

app.post('/contact-us', function (req, res){

    
    try {
        // sendContactEmail(req.body.email, req.body.subject, req.body.message);
        // res.send(req.body)
        console.log(req.body)
        res.redirect('/')
    } catch(e) {
        res.send(e)
    }
})





const port = process.env.PORT


app.listen(port, () => {
    console.log('Server is up on port '+ port);
})

