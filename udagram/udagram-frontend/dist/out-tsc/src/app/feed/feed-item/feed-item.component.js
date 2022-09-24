import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
var FeedItemComponent = /** @class */ (function () {
    function FeedItemComponent() {
    }
    FeedItemComponent.prototype.ngOnInit = function () { };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], FeedItemComponent.prototype, "feedItem", void 0);
    FeedItemComponent = __decorate([
        Component({
            selector: 'app-feed-item',
            templateUrl: './feed-item.component.html',
            styleUrls: ['./feed-item.component.scss'],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [])
    ], FeedItemComponent);
    return FeedItemComponent;
}());
export { FeedItemComponent };
//# sourceMappingURL=feed-item.component.js.map