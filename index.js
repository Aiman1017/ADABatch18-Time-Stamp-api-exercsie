let express = require('express')
let app = express()
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

let port = process.env.PORT||8080;
let router = express.Router();

router.get('/', (req, res) => {
    res.json({message: 'Successfully connect!!'})
})

router.get('/timestamp/:date_string', (req,res) => {
    if(new Date(req.params.date_string * 1000) != 'Invalid Date'){
        res.json({unix: req.params.date_string, utc: new Date(req.params.date_String*1000)})
    } else{
        if(new Date(req.params.date_string) != 'Invalid Date'){
            res.json({unix: new Date(req.params.date_string).getTime() / 1000, utc: new Date(req.params.date_string)})
        } else{
            res.json({error: 'Invalid Date'})
        }
    }
    // res.json({'unix': date.getTime(), 'utc': date.toUTCString()})
})

app.use('/api', router);

app.listen(port);

console.log('Magic happen at port ' + port)