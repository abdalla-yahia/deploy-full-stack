import { __awaiter, __decorate, __generator, __metadata, __spreadArray } from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from '../../api/api.service';
var FeedProviderService = /** @class */ (function () {
    function FeedProviderService(api) {
        this.api = api;
        this.currentFeed$ = new BehaviorSubject([]);
    }
    FeedProviderService.prototype.getFeed = function () {
        return __awaiter(this, void 0, void 0, function () {
            var req, items;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.get('/feed')];
                    case 1:
                        req = _a.sent();
                        items = req.rows;
                        this.currentFeed$.next(items);
                        return [2 /*return*/, Promise.resolve(this.currentFeed$)];
                }
            });
        });
    };
    FeedProviderService.prototype.uploadFeedItem = function (caption, file) {
        return __awaiter(this, void 0, void 0, function () {
            var res, feed;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.api.upload('/feed', file, { caption: caption, url: file.name })];
                    case 1:
                        res = _a.sent();
                        feed = __spreadArray([res], this.currentFeed$.value, true);
                        this.currentFeed$.next(feed);
                        return [2 /*return*/, res];
                }
            });
        });
    };
    FeedProviderService = __decorate([
        Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [ApiService])
    ], FeedProviderService);
    return FeedProviderService;
}());
export { FeedProviderService };
//# sourceMappingURL=feed.provider.service.js.map