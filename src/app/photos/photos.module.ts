import { HttpClient } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [PhotoComponent],
  exports: [PhotoComponent],
  imports: [HttpClient]
})
export class PhotosModule {

}
