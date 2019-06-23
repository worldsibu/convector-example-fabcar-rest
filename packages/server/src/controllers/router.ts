import * as express from 'express';
import { 
    FabcarController_init,
    FabcarController_get,
    FabcarController_getAll,
    FabcarController_create,
    FabcarController_changeOwner } from './controllers'
export default express.Router()
.post('/fabcar/init', FabcarController_init)
.get('/fabcar/get/:id', FabcarController_get)
.get('/fabcar/getAll', FabcarController_getAll)
.post('/fabcar/create', FabcarController_create)
.post('/fabcar/changeOwner', FabcarController_changeOwner)
