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

  createNewImage = () => {
    this.images.push(this.newImage);
    this.newImage = {name: '', description: '', src: ''};
  }

  constructor(public imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.getImages().subscribe(res => {
      this.images = res.json();
    });
  }

}
