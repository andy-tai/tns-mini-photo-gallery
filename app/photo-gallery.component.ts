import {Component, ViewChild, ElementRef, , NgZone} from '@angular/core';
//import {TNSFontIconService, TNSFontIconPipe} from 'nativescript-ng2-fonticon';
import {Image} from 'ui/image';
import {GC} from 'utils/utils';
import {Location} from "@angular/common";
import {Page} from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";
import {View} from "ui/core/view";

import { ImageAsset } from 'tns-core-modules/image-asset';
import { ImageSource } from 'tns-core-modules/image-source';
//import * as ImageAsset from 'tns-core-modules/image-asset';
//import * as ImageSource from 'tns-core-modules/image-source';
import * as camera from  'nativescript-camera';

@Component({
  moduleId: module.id,
  selector: 'pg-photo-gallery',
  templateUrl: "./photo-gallery.component.html",
  styleUrls: ["./photo-gallery.component.css"],
  //pipes: [TNSFontIconPipe]
})
export class PhotoGalleryComponent {
  @ViewChild('displayedPicture') displayedPictureRef: ElementRef;

  pictures: Array<ImageSource> = new Array<ImageSource>();

  constructor(
        protected router: RouterExtensions,
        location: Location,
        protected page: Page, 
        protected zone: NgZone
        /*private fonticon: TNSFontIconService*/){
  }

  get picturePlaceholderPath(): string {
    return '~/images/placeholder-img.jpg'
  };

  takePicture(): void {
    camera.takePicture({ 
      width: 400, height: 400, keepAspectRatio: true 
    })
    .then((pictureAsset) => {
      let picture = new ImageSource();
      picture.fromAsset(pictureAsset).then(
        (imgSrc) => {
          picture = imgSrc;        
        });
      this.display(picture);
      this.pictures.unshift(picture);
      GC();
    });
  }

  display(picture: ImageSource) {
    this.displayedPictureView.imageSource = picture;
  }

  get deleteButtonVisibility(): string {
    return this.noPicturesTaken? 'collapsed': 'visible'
  }

  private get noPicturesTaken(): boolean {
    return this.pictures.length == 0;
  }

  deleteDisplayedPicture() {
    let pictureIndex = this.pictures.indexOf(this.displayedPictureView.imageSource);
    this.pictures.splice(pictureIndex, 1);
    if (this.noPicturesTaken) {
      this.concealPicture();
    }
    else this.displayClosestPictureFrom(pictureIndex);
  }

  concealPicture(): void {
    this.displayedPictureView.imageSource.fromFile(
        this.picturePlaceholderPath).then (
            () => {
              // successfully loaded; add logging?     
            }        
        );
  }

  private displayClosestPictureFrom(pictureIndex: number): void {
    let pictureToDisplay = this.pictures[pictureIndex];
    if (this.pictures[pictureIndex] === undefined) {
      pictureToDisplay = this.pictures[pictureIndex - 1];
    }
    this.display(pictureToDisplay);
  }

  get displayedPictureView(): Image {
    return this.displayedPictureRef.nativeElement;
  }

}
