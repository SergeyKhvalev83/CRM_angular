require('dotenv').config()
const app =require("./app");
const PORT = process.env.PORT || 6000;

app.get('/', (req, res)=>{
  res.status(200).json({message: "Okey"})
})


app.listen(PORT, ()=>{
  console.log(`Server is listening on PORT ${PORT}`)
})