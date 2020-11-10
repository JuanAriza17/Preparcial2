import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SerieListarComponent } from './serie-listar/serie-listar.component';
import { SerieDetailComponent } from './serie-detail/serie-detail.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieListarComponent, SerieDetailComponent],
  exports: [SerieListarComponent]
})
export class SerieModule { }
