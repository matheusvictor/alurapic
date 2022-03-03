import { DarkOnHoverDirective } from './darken-on-hover.directive';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DarkOnHoverDirective],
  exports: [DarkOnHoverDirective]
})
export class DarkOnHoverModule { }
