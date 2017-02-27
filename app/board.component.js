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
var board_service_1 = require('./board.service');
var cardList_service_1 = require('./cardList.service');
var components_1 = require('angular2-click-to-edit/components');
var ng2_dragula_1 = require('ng2-dragula');
var BoardComponent = (function () {
    function BoardComponent(_boardService, _listService, dragulaService) {
        var _this = this;
        this._boardService = _boardService;
        this._listService = _listService;
        this.dragulaService = dragulaService;
        dragulaService.dropModel.subscribe(function (value) {
            var weight = 0;
            _this.selectedBoard.lists.forEach(function (list) {
                list.weight = weight++;
                var cardWeight = 0;
                list.cards.forEach(function (card) {
                    card.weight = cardWeight++;
                });
                _this._listService.updateList(list).subscribe();
            });
        });
    }
    BoardComponent.prototype.boardSelect = function (boardId) {
        this.selectedID = boardId;
        this.getBoard(this.selectedID);
    };
    BoardComponent.prototype.checkPermissions = function () {
        return true;
    };
    BoardComponent.prototype.ngOnInit = function () {
        this.getBoards();
        this.dragulaService.setOptions('list-bag', {
            moves: function (el, source, handle, sibling) {
                return handle.className == 'drag-handle';
            }
        });
        this.dragulaService.setOptions('card-bag', {
            moves: function (el, source, handle, sibling) {
                return handle.className == 'drag-handle-card';
            }
        });
    };
    BoardComponent.prototype.addCardToList = function (list) {
        var newCard = { id: 0, title: 'newCard' };
        list.cards.push(newCard);
        var cardWeight = 0;
        list.cards.forEach(function (card) {
            card.weight = cardWeight++;
        });
        this._listService.updateList(list).subscribe();
    };
    BoardComponent.prototype.addNewList = function () {
        var _this = this;
        var newList = { id: 0, boardId: this.selectedBoard.id, title: 'new list', cards: [] };
        this._listService.storeList(newList).subscribe(function (newList) { return _this.selectedBoard.lists.push(newList); });
    };
    BoardComponent.prototype.saveList = function (event, list) {
        list.title = event.title;
        this._listService.updateList(list).subscribe();
    };
    BoardComponent.prototype.saveCard = function (event, card, list) {
        card.title = event.title;
        this._listService.updateList(list).subscribe();
    };
    BoardComponent.prototype.getBoards = function () {
        var _this = this;
        this._boardService.getBoards()
            .subscribe(function (boards) {
            _this.boards = boards;
            if (_this.boards.length) {
                _this.boardSelect(_this.boards[0].id);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    BoardComponent.prototype.getBoard = function (boardId) {
        var _this = this;
        this._boardService.getBoard(boardId)
            .subscribe(function (board) {
            _this.selectedBoard = board;
            _this.getBoardLists(board.id);
        }, function (error) { return _this.errorMessage = error; });
    };
    BoardComponent.prototype.getBoardLists = function (boardId) {
        var _this = this;
        this._boardService.getBoardLists(boardId)
            .subscribe(function (lists) {
            _this.dragulaService.destroy('card-bag');
            _this.selectedBoard.lists = lists;
        }, function (error) { return _this.errorMessage = error; });
    };
    BoardComponent = __decorate([
        core_1.Component({
            selector: 'my-board',
            templateUrl: '../templates/board.html',
            providers: [board_service_1.BoardService, cardList_service_1.CardListService, ng2_dragula_1.DragulaService],
            directives: [components_1.NDV_DIRECTIVES, ng2_dragula_1.Dragula]
        }), 
        __metadata('design:paramtypes', [board_service_1.BoardService, (typeof (_a = typeof cardList_service_1.CardListService !== 'undefined' && cardList_service_1.CardListService) === 'function' && _a) || Object, ng2_dragula_1.DragulaService])
    ], BoardComponent);
    return BoardComponent;
    var _a;
}());
exports.BoardComponent = BoardComponent;
//# sourceMappingURL=board.component.js.map