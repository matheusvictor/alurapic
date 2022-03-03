import { PhotoModel } from './photo.model';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

const BASE_URL = 'http://localhost:3000';

@Injectable({ providedIn: 'root' })
export class PhotoService {

  constructor(private http: HttpClient) { }

  listFromUser(userName: string) {
    return this.http
      .get<PhotoModel[]>(BASE_URL + '/' + userName + '/photos');
  }

  listFromUserPaginated(userName: string, page: number) {
    const params = new HttpParams().append('page', page.toString());
    return this.http
      .get<PhotoModel[]>(BASE_URL + '/' + userName + '/photos', { params });
  }


}
