"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_1 = require("@worldsibu/convector-core");
var fabcar_model_1 = require("./fabcar.model");
var FabcarController = (function (_super) {
    tslib_1.__extends(FabcarController, _super);
    function FabcarController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FabcarController.prototype.init = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mockData;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        mockData = [
                            new fabcar_model_1.Fabcar({ id: '1', make: 'Toyota', model: 'Prius', colour: 'blue', owner: 'Tomoko' }),
                            new fabcar_model_1.Fabcar({ id: '2', make: 'Ford', model: 'Mustang', colour: 'red', owner: 'Brad' }),
                            new fabcar_model_1.Fabcar({ id: '3', make: 'Hyundai', model: 'Tucson', colour: 'green', owner: 'Jin Soo' }),
                            new fabcar_model_1.Fabcar({ id: '4', make: 'Volkswagen', model: 'Passat', colour: 'yellow', owner: 'Max' }),
                            new fabcar_model_1.Fabcar({ id: '5', make: 'Tesla', model: 'S', colour: 'black', owner: 'Adriana' }),
                            new fabcar_model_1.Fabcar({ id: '6', make: 'Peugeot', model: '205', colour: 'purple', owner: 'Michel' }),
                            new fabcar_model_1.Fabcar({ id: '7', make: 'Chery', model: 'S22L', colour: 'white', owner: 'Aarav' }),
                            new fabcar_model_1.Fabcar({ id: '8', make: 'Fiat', model: 'Punto', colour: 'violet', owner: 'Pari' }),
                            new fabcar_model_1.Fabcar({ id: '9', make: 'Tata', model: 'Nano', colour: 'indigo', owner: 'Valeria' }),
                            new fabcar_model_1.Fabcar({ id: '10', make: 'Holden', model: 'Barina', colour: 'brown', owner: 'Shotaro' })
                        ];
                        return [4, Promise.all(mockData.map(function (car) { return car.save(); }))];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    FabcarController.prototype.query = function (id) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, fabcar_model_1.Fabcar.getOne(id)];
            });
        });
    };
    FabcarController.prototype.queryAll = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2, fabcar_model_1.Fabcar.getAll()];
            });
        });
    };
    FabcarController.prototype.create = function (car) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, car.save()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    FabcarController.prototype.changeOwner = function (id, owner) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var car;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, fabcar_model_1.Fabcar.getOne(id)];
                    case 1:
                        car = _a.sent();
                        car.owner = owner;
                        return [2, car.save()];
                }
            });
        });
    };
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], FabcarController.prototype, "init", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string()))
    ], FabcarController.prototype, "query", null);
    tslib_1.__decorate([
        convector_core_1.Invokable()
    ], FabcarController.prototype, "queryAll", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(fabcar_model_1.Fabcar))
    ], FabcarController.prototype, "create", null);
    tslib_1.__decorate([
        convector_core_1.Invokable(),
        tslib_1.__param(0, convector_core_1.Param(yup.string())),
        tslib_1.__param(1, convector_core_1.Param(yup.string()))
    ], FabcarController.prototype, "changeOwner", null);
    FabcarController = tslib_1.__decorate([
        convector_core_1.Controller('fabcar')
    ], FabcarController);
    return FabcarController;
}(convector_core_1.ConvectorController));
exports.FabcarController = FabcarController;
//# sourceMappingURL=fabcar.controller.js.map