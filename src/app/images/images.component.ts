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

  deleteImage = id => {
    this.imagesService.deleteImage(id).subscribe(response => {
      this.images = this.images.filter(img => img._id != id);
    });
  }

  createNewImage = () => {
    this.imagesService.createImage(this.newImage).subscribe(response => {
      this.images.push(response);
    });
    this.newImage = {name: '', description: '', src: ''};
  }

  constructor(public imagesService: ImagesService) {}

  ngOnInit() {
    this.imagesService.getImages().subscribe(response => {
      this.images = response;
    });
  }

}
