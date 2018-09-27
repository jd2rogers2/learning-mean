import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({providedIn: 'root'})
export class ImagesService {
  constructor(private http: Http) {}

  getImages = () => {
    return this.http.get('localhost:3000/api/images').map(res => res.json());
  }
}
