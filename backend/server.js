import {app} from "./app.js"
import  {config}  from "dotenv"
import {connectDB} from "./config/database.js"




// config file from dotenv
config({path:"config/config.env"})


connectDB();

app.listen(process.env.PORT,()=> console.log(`listening to port ${process.env.PORT}`))






