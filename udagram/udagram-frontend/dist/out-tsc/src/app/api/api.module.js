import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
var components = [];
var ApiModule = /** @class */ (function () {
    function ApiModule() {
    }
    ApiModule = __decorate([
        NgModule({
            imports: [
                HttpClientModule,
            ],
            declarations: components,
            exports: components,
            providers: []
        })
    ], ApiModule);
    return ApiModule;
}());
export { ApiModule };
//# sourceMappingURL=api.module.js.map