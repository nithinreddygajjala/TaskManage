import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';


import { MainComponent }  from './main.component';
import { dashboard }  from './app.dashboard';
import { appboards}  from './app.boards';
import { FormsModule }   from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { DragulaModule } from 'ng2-dragula';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
    imports:      [ BrowserModule, FormsModule, HttpModule, DragulaModule,RouterModule.forRoot(routes) ,RouterModule.forRoot(routes, {useHash: true})],
    declarations: [ MainComponent,appboards,dashboard],
    bootstrap:    [ MainComponent ],
    providers:    [{provide: LocationStrategy, useClass: HashLocationStrategy} ]
})
export class AppModule { }
