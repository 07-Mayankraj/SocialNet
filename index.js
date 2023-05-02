const express = require('express')
const cors = require('cors');
const app = express()
const { dbconnection } = require('./configs/db');
const { userRouter } = require('./routes/user.route');
const { postRouter } = require('./routes/post.route');
const port = process.env.port;


// middleware
app.use(express.json())
app.use(cors())


// home route

app.get('/', (req, res) => {res.send("home")})
// routers
app.use('/users', userRouter)
app.use('/posts', postRouter)


app.listen(port ,()=>{
    try {
        dbconnection
        console.log('server listening on port ' + port,);
    } catch (error) {
        console.log(error.message);
    }
})
