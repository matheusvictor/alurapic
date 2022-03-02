import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PhotoModel } from '../../photo/photo.model';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnChanges {

  @Input() photos: PhotoModel[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.photos) {
      this.rows = this.groupColumns(this.photos);
    }
  }

  groupColumns(photoList: PhotoModel[]) {
    const newRows = [];

    for (let index = 0; index < photoList.length; index += 3) {
      newRows.push(photoList.slice(index, index + 3));
    }
    return newRows;
  }

}
