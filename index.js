import express from "express"
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT||5000

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/home',(req,res)=>{
    res.json({
        id:1,
        name:'Anushka'
    })
})
app.get('/about',(req,res)=>{
    res.send("<h1>Anushka!!</h1>")
})
app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})