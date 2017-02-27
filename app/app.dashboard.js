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
var router_2 = require('@angular/router');
var ng2_dragula_1 = require('ng2-dragula/ng2-dragula');
var dashboard = (function () {
    function dashboard(activatedRoute, dragulaService, router) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.dragulaService = dragulaService;
        this.router = router;
        this.name = [];
        this.cards = [];
        this.testdata = 'sample';
        this.arrdet = [];
        dragulaService.dropModel.subscribe(function (value) {
            _this.onDropModel(value.slice(1));
            console.log(_this.name);
            localStorage.setItem(_this.id, JSON.stringify(_this.name));
        });
        dragulaService.removeModel.subscribe(function (value) {
            _this.onRemoveModel(value.slice(1));
        });
    }
    dashboard.prototype.test1 = function (x) {
        this.modalpass = x;
        if (this.arrdet == null) {
            this.arrdet = ['a'];
        }
        var index = this.arrdet.map(function (e) { return e.cardname; }).lastIndexOf(x);
        console.log(this.arrdet[index]);
        if (this.arrdet[index] == undefined) {
            this.des = '';
            this.curdate = '';
            return;
        }
        else {
            this.des = this.arrdet[index].des;
            this.curdate = this.arrdet[index].date;
        }
    };
    dashboard.prototype.onDropModel = function (args) {
        var el = args[0], target = args[1], source = args[2];
        // do something else
        console.log('reached');
    };
    dashboard.prototype.onRemoveModel = function (args) {
        var el = args[0], source = args[1];
        // do something else
        console.log('reached');
    };
    dashboard.prototype.ngOnInit = function () {
        var _this = this;
        this.paramsSub = this.activatedRoute.params.subscribe(function (params) { return _this.id = params['id']; });
        console.log(this.id);
        var k = JSON.parse(localStorage.getItem(this.id));
        if (k == null) {
            k = ['a'];
        }
        else {
            this.name = JSON.parse(localStorage.getItem(this.id));
        }
    };
    dashboard.prototype.ngOnDestroy = function () {
        this.paramsSub.unsubscribe();
    };
    dashboard.prototype.remove = function (x) {
        //var k=JSON.parse(localStorage.getItem("lastname3"));
        console.log(x);
        //var index = k.map(function(e) { return e.bname; }).indexOf(x);
        //console.log(index);
        //k.splice(index,1);
        //localStorage.setItem("lastname3", JSON.stringify(k));
        //location.reload();
        //console.log(x);
        var k = JSON.parse(localStorage.getItem(this.id));
        if (k == null) {
            k = ['a'];
        }
        console.log(k);
        var index = k.map(function (e) { return e.bname; }).indexOf(x);
        k.splice(index, 1);
        localStorage.setItem(this.id, JSON.stringify(k));
        location.reload();
    };
    dashboard.prototype.getData = function (asdas) {
        var k = JSON.parse(localStorage.getItem(this.id));
        if (k == null) {
            k = ['a'];
        }
        //console.log(k);
        if (k != null) {
            var index = k.map(function (e) { return e.name; }).indexOf(this.testdata);
            //console.log(index);
            if (index > -1) {
                alert('name already used');
            }
            else {
                this.name.push({ name: this.testdata, arr: [], arrdet: [] });
                //console.log(this.name);
                localStorage.setItem(this.id, JSON.stringify(this.name));
            }
        }
        else {
            this.name.push({ name: this.testdata, arr: [] });
            //console.log(this.name);
            localStorage.setItem(this.id, JSON.stringify(this.name));
        }
    };
    dashboard.prototype.cardClick = function (i) {
        var index = this.name[i].arr.indexOf(this.cardname);
        if (index > -1) {
            alert('name already used');
        }
        else {
            this.name[i].arr.push(this.cardname);
            //console.log(this.name[i].arrdet);
            localStorage.setItem(this.id, JSON.stringify(this.name));
        }
    };
    dashboard.prototype.savedata = function (x) {
        console.log(this.curdate);
        this.arrdet.push({ cardname: x, des: this.des, date: this.curdate });
        console.log(this.arrdet);
        localStorage.setItem('arrdet', JSON.stringify(this.arrdet));
    };
    dashboard = __decorate([
        core_1.Component({
            selector: 'about-home',
            templateUrl: 'app/app.dashboard.html',
            viewProviders: [ng2_dragula_1.DragulaService]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, ng2_dragula_1.DragulaService, router_2.Router])
    ], dashboard);
    return dashboard;
}());
exports.dashboard = dashboard;
//# sourceMappingURL=app.dashboard.js.map