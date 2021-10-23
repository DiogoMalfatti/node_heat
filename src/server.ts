import { serverHttp } from "./app";
// const serverHttp = require('./app')

serverHttp.listen(process.env.PORT || 4000)