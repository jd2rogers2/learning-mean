import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {
  image = {};

  getImage = () => {
    // fetch props.id
  }

  constructor() { }

  ngOnInit() {
  }

}
