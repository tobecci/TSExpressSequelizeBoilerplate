import express from "express"
import { initControllers } from "./controllers"
import { resolve } from 'path'
import * as dotenv from 'dotenv' 

const envConfig = {
    'development': resolve(__dirname, '../', '.env.development'),
    'production': resolve(__dirname, '../', '.env.production'),
}
dotenv.config({ path: envConfig[process.env.NODE_ENV]})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
initControllers(app);
const port = process.env.PORT || 5000;
app.listen(port, function(){
    console.log(`app served on http://localhost:${port}`)
})