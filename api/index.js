const app = (require('express'))()
const dotenv = require('dotenv')
var os = require('os')
dotenv.config()


app.get('/', (req, res) => {
    res.send(os.hostname())
})

app.listen(process.env.LISTEN_PORT, ()=>{
    console.log('Server starte port ' + process.env.LISTEN_PORT);
})