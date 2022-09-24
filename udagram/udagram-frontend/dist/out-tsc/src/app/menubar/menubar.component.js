import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { environment } from '../../environments/environment';
var MenubarComponent = /** @class */ (function () {
    function MenubarComponent() {
        this.appName = environment.appName;
    }
    MenubarComponent.prototype.ngOnInit = function () { };
    MenubarComponent = __decorate([
        Component({
            selector: 'app-menubar',
            templateUrl: './menubar.component.html',
            styleUrls: ['./menubar.component.scss'],
        }),
        __metadata("design:paramtypes", [])
    ], MenubarComponent);
    return MenubarComponent;
}());
export { MenubarComponent };
//# sourceMappingURL=menubar.component.js.map