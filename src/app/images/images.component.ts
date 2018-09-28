import { Component, OnInit } from '@angular/core';
import { ImagesService } from './images.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  images: any[] = [];
  newImage: any = {};

  goToImage = () => {
    // go to image edit view
  }

  deleteImage = () => {}

  createNewImage = event => {
    event.preventDefault();
    this.images.push(this.newImage);
    this.imagesService.createImage(this.newImage)
    this.newImage = {name: '', description: '', src: ''};
  }

  constructor(public imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.getImages().subscribe(response => {
      this.images = response;
    });
  }

}
