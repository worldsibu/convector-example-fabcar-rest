"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var controllers_1 = require("./controllers");
exports.default = express.Router()
    .post('/fabcar/init', controllers_1.FabcarController_init)
    .get('/fabcar/query/:id', controllers_1.FabcarController_query)
    .get('/fabcar/queryAll', controllers_1.FabcarController_queryAll)
    .post('/fabcar/create', controllers_1.FabcarController_create)
    .post('/fabcar/changeOwner', controllers_1.FabcarController_changeOwner);
//# sourceMappingURL=router.js.map