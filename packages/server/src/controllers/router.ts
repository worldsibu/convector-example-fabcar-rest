import * as express from 'express';
import { 
    FabcarController_init,
    FabcarController_queryOne,
    FabcarController_getAll,
    FabcarController_create,
    FabcarController_changeOwner } from './controllers'
export default express.Router()
.post('/fabcar/init', FabcarController_init)
.get('/fabcar/queryOne/:id', FabcarController_queryOne)
.get('/fabcar/queryAll', FabcarController_getAll)
.post('/fabcar/create', FabcarController_create)
.post('/fabcar/changeOwner', FabcarController_changeOwner)
