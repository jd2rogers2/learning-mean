import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({providedIn: 'root'})
export class ImagesService {
  constructor(private http: Http) {}

  getImages = () => {
    return this.http.get('http://localhost:3000/api/images').map(res => res.json());
  }

  createImage = image => {
    const headers = new Headers();
    headers.append('Content-Type', 'application/json')
    return this.http.post('http://localhost:3000/api/image', JSON.stringify(image), {headers}).map(res => res.json());
  }

  deleteImage = id => {
    return this.http.delete('http://localhost:3000/api/image/' + id).map(res => res.json());
  }
}
