import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import {TopComponent} from './top.component';
//import {TNSFontIconService, TNSFontIconPipe} from 'nativescript-ng2-fonticon';

import * as imageProcessingModule from './utils/image-processing';

const routes: Routes = [
    { path: "", redirectTo: "/top", pathMatch: "full" },
    { path: "top", component: TopComponent},
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }


export const navigatableComponents = [
    TopComponent
];
