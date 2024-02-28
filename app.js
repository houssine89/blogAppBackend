express = require('express');
const {middleware} = require('./Middlewares/middleware');
const postRoutes = require('./routes/postRoutes');
app = express();
app.use(express.json());
app.use(middleware);

app.use('/posts', postRoutes);



const port = 3000;
app.listen(port, ()=>{
  console.log(`Server is running on port ${port}`);
})