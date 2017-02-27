"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var BoardService = (function () {
    function BoardService(http) {
        this.http = http;
        this.boardApiUrl = 'http://localhost:8000/api/v1/boards';
    }
    BoardService.prototype.getBoards = function () {
        return this.http.get(this.boardApiUrl)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    BoardService.prototype.getBoard = function (boardId) {
        return this.http.get(this.boardApiUrl + '/' + boardId)
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    BoardService.prototype.getBoardLists = function (boardId) {
        return this.http.get(this.boardApiUrl + '/' + boardId + '/lists')
            .map(function (res) { return res.json(); })
            .do(function (data) { return console.log(data); })
            .catch(this.errorHandler);
    };
    BoardService.prototype.errorHandler = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json.error || 'Server error');
    };
    BoardService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], BoardService);
    return BoardService;
}());
exports.BoardService = BoardService;
//# sourceMappingURL=board.service.js.map