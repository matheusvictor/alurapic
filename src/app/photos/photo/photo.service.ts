import { PhotoModel } from './photo.model';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

const BASE_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http
      .get<PhotoModel[]>(BASE_URL + '/' + userName + '  /photos');
  }

}
