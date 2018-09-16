import {Location} from "@angular/common";
import {Component, ViewChild, OnInit, ElementRef} from '@angular/core';
import {RouterExtensions} from "nativescript-angular/router";
import {Image} from 'ui/image';
import {Page} from "ui/page";
import {Placeholder} from "ui/placeholder";

import {PhotoGalleryComponent} from './photo-gallery.component';
//import {TNSFontIconService, TNSFontIconPipe} from 'nativescript-ng2-fonticon';

import * as imageProcessingModule from './utils/image-processing';

@Component({
  selector: 'top',
  moduleId : module.id,
  templateUrl: "./top.component.html",
  //styleUrls : [ './top.component.css' ],
  //directives: [PhotoGalleryComponent],
  //pipes: [TNSFontIconPipe]
})
export class TopComponent  implements OnInit {
  @ViewChild("pgPhotoGallery" /*PhotoGalleryComponent*/) photoGalleryComponent: PhotoGalleryComponent;
  @ViewChild('transformedPicture') transformedPictureRef: ElementRef;

  constructor(protected page: Page, protected router: RouterExtensions,
              location: Location
              /*private fonticon: TNSFontIconService*/) {
  }

  ngOnInit() { console.log("CameraviewPage ngOnInit() "); }
  
  transformDisplayedPictureToGrayScale(){
    imageProcessingModule.transformToGrayScale({
      source: this.photoGalleryComponent.displayedPictureView,
      destination: this.transformedPictureView
    });
  }

  private get transformedPictureView(): Image {
    return this.transformedPictureRef.nativeElement;
  }
}
