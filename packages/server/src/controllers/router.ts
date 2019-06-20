import * as express from 'express';
import { 
    FabcarController_init,
    FabcarController_query,
    FabcarController_queryAll,
    FabcarController_create,
    FabcarController_changeOwner } from './controllers'
export default express.Router()
.post('/fabcar/init', FabcarController_init)
.get('/fabcar/query/:id', FabcarController_query)
.get('/fabcar/queryAll', FabcarController_queryAll)
.post('/fabcar/create', FabcarController_create)
.post('/fabcar/changeOwner', FabcarController_changeOwner)
