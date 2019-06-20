"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var yup = require("yup");
var convector_core_model_1 = require("@worldsibu/convector-core-model");
var Fabcar = (function (_super) {
    tslib_1.__extends(Fabcar, _super);
    function Fabcar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.type = 'io.worldsibu.fabcar';
        return _this;
    }
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required()
    ], Fabcar.prototype, "type", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required(),
        convector_core_model_1.Validate(yup.string())
    ], Fabcar.prototype, "make", void 0);
    tslib_1.__decorate([
        convector_core_model_1.ReadOnly(), convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Fabcar.prototype, "model", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Fabcar.prototype, "colour", void 0);
    tslib_1.__decorate([
        convector_core_model_1.Required(), convector_core_model_1.Validate(yup.string())
    ], Fabcar.prototype, "owner", void 0);
    return Fabcar;
}(convector_core_model_1.ConvectorModel));
exports.Fabcar = Fabcar;
//# sourceMappingURL=fabcar.model.js.map