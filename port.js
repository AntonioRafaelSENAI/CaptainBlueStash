const express = require('express')
const app = express()

const port =  process.env.port || 3000

app.get('/', (req, res)=> {
    res.send('Testando aplicação.')
})
app.listen(port, ()=>{
    console.log('Aplicação rodando.')
})