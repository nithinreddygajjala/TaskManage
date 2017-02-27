"use strict";
var app_boards_1 = require('./app.boards');
var app_dashboard_1 = require('./app.dashboard');
exports.routes = [
    { path: '', component: app_boards_1.appboards },
    { path: 'dashboard/:id', component: app_dashboard_1.dashboard }
];
//# sourceMappingURL=app.routes.js.map