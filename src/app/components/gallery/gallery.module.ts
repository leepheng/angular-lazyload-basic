import { NgModule } from '@angular/core';
import { GalleryComponent } from "app/components/gallery/gallery.component";

import { galleryRouter } from './gallery.router';

@NgModule({
  declarations: [ GalleryComponent ],
  imports: [ galleryRouter ]
})

export class GalleryModule {}