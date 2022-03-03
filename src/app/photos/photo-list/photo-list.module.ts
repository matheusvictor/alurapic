import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotoModule } from '../photo/photo.module';
import { PhotoListComponent } from './photo-list.component';
import { PhotosComponent } from './photos/photos.component';
import { LoadButtonComponent } from './load-button/load-button.component';
import { FilterByDescriptionPipe } from './filter-by-description.pipe';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { SearchComponent } from './search/search.component';
import { DarkOnHoverModule } from './../../shared/directives/darken-on-hover/darken-on-hover.module';

@NgModule({
  imports: [
    CommonModule,
    PhotoModule,
    CardModule,
    DarkOnHoverModule
  ],
  declarations: [
    PhotoListComponent,
    PhotosComponent,
    LoadButtonComponent,
    FilterByDescriptionPipe,
    SearchComponent
  ]
})
export class PhotoListModule { }
