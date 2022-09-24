import { __awaiter, __decorate, __generator, __metadata } from "tslib";
import { Component, Input } from '@angular/core';
import { FeedProviderService } from '../services/feed.provider.service';
var FeedListComponent = /** @class */ (function () {
    function FeedListComponent(feed) {
        this.feed = feed;
        this.subscriptions = [];
    }
    FeedListComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.subscriptions.push(this.feed.currentFeed$.subscribe(function (items) {
                            _this.feedItems = items;
                        }));
                        return [4 /*yield*/, this.feed.getFeed()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FeedListComponent.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this.subscriptions; _i < _a.length; _i++) {
            var subscription = _a[_i];
            subscription.unsubscribe();
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], FeedListComponent.prototype, "feedItems", void 0);
    FeedListComponent = __decorate([
        Component({
            selector: 'app-feed-list',
            templateUrl: './feed-list.component.html',
            styleUrls: ['./feed-list.component.scss'],
        }),
        __metadata("design:paramtypes", [FeedProviderService])
    ], FeedListComponent);
    return FeedListComponent;
}());
export { FeedListComponent };
//# sourceMappingURL=feed-list.component.js.map