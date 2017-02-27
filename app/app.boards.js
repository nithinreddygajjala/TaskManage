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
var router_1 = require('@angular/router');
var appboards = (function () {
    function appboards(router) {
        this.router = router;
        this.arr = [];
        this.boardname = 'asdasd';
        this.boarddes = 'basdasd';
        this.arr = JSON.parse(localStorage.getItem("lastname3"));
        if (this.arr == null) {
            this.arr = [];
        }
        //this.arr=['Board1','Board2','Board3','Board4','Board2','Board3','Board4','Board3','Board4','Board2','Board3','Board4'];
    }
    appboards.prototype.remove = function (x) {
        var k = JSON.parse(localStorage.getItem("lastname3"));
        console.log(k);
        var index = k.map(function (e) { return e.bname; }).indexOf(x);
        console.log(index);
        k.splice(index, 1);
        localStorage.setItem("lastname3", JSON.stringify(k));
        location.reload();
    };
    appboards.prototype.onClick = function (item) {
        console.log(item);
        this.item = item;
    };
    appboards.prototype.boardTitle = function () {
        var x = JSON.parse(localStorage.getItem("lastname3"));
        if (x == null) {
            x = [];
        }
        //.log(x);
        var index = x.map(function (e) { return e.bname; }).indexOf(this.boardname);
        console.log(index);
        if (index > -1) {
            alert('The Board name already used');
        }
        else {
            this.arr.push({ bname: this.boardname, boarddes: this.boarddes });
            localStorage.setItem("lastname3", JSON.stringify(this.arr));
        }
    };
    appboards = __decorate([
        core_1.Component({
            selector: 'about-home',
            templateUrl: "app/app.boards.html"
        }), 
        __metadata('design:paramtypes', [router_1.Router])
    ], appboards);
    return appboards;
}());
exports.appboards = appboards;
//# sourceMappingURL=app.boards.js.map