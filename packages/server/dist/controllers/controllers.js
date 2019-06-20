"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_1 = require("../convector");
function FabcarController_init(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_1;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.FabcarControllerBackEnd
                            .init()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_1 = _c.sent();
                    console.log('Error post FabcarController_init', ex_1.stack);
                    res.status(500).send(ex_1);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.FabcarController_init = FabcarController_init;
function FabcarController_query(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_2;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.FabcarControllerBackEnd
                            .query(params.id)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_2 = _c.sent();
                    console.log('Error get FabcarController_query', ex_2.stack);
                    res.status(500).send(ex_2);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.FabcarController_query = FabcarController_query;
function FabcarController_queryAll(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_3;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.params;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.FabcarControllerBackEnd
                            .queryAll()];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_3 = _c.sent();
                    console.log('Error get FabcarController_queryAll', ex_3.stack);
                    res.status(500).send(ex_3);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.FabcarController_queryAll = FabcarController_queryAll;
function FabcarController_create(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_4;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.FabcarControllerBackEnd
                            .create(params.car)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_4 = _c.sent();
                    console.log('Error post FabcarController_create', ex_4.stack);
                    res.status(500).send(ex_4);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.FabcarController_create = FabcarController_create;
function FabcarController_changeOwner(req, res) {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var params, _a, _b, ex_5;
        return tslib_1.__generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 2, , 3]);
                    params = req.body;
                    _b = (_a = res.status(200)).send;
                    return [4, convector_1.FabcarControllerBackEnd
                            .changeOwner(params.id, params.owner)];
                case 1:
                    _b.apply(_a, [_c.sent()]);
                    return [3, 3];
                case 2:
                    ex_5 = _c.sent();
                    console.log('Error post FabcarController_changeOwner', ex_5.stack);
                    res.status(500).send(ex_5);
                    return [3, 3];
                case 3: return [2];
            }
        });
    });
}
exports.FabcarController_changeOwner = FabcarController_changeOwner;
//# sourceMappingURL=controllers.js.map