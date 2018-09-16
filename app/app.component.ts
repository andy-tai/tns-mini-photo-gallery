import { Component } from "@angular/core";
import {PhotoGalleryComponent} from './photo-gallery.component';
import { registerElement } from "nativescript-angular/element-registry";
registerElement("PhotoGalleryComponent", () => <any>PhotoGalleryComponent);

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { }