import { Component, OnInit } from '@angular/core';
import { Serie } from '../serie';
import { from } from 'rxjs';
import { SerieService } from '../serie.service';
import { SerieDetail } from '../serie-detail';


@Component({
  selector: 'app-serie-listar',
  templateUrl: './serie-listar.component.html',
  styleUrls: ['./serie-listar.component.css']
})
export class SerieListarComponent implements OnInit {

  constructor(private serieService: SerieService) { }
  public series: Array<Serie>;

  selectedSerie: SerieDetail;
  selected = false;

  getSeries(): void {
    this.serieService.getSeries()
      .subscribe(series => {
        this.series = series;
      });
  }

  onSelected(s: SerieDetail): void {
    console.log(`se seleccionó la serie  ${s.id}`);
    this.selected = true;
    this.selectedSerie = s;
  }

  ngOnInit() {
    this.getSeries();
  }

  getAvgSeasons(): number {
    let totalSeries: number = 0;
    this.series.forEach((serie) => totalSeries = totalSeries + serie.seasons);
    return totalSeries/this.series.length;
  }

}
