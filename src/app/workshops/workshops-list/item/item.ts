import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import IWorkshop from '../../models/Iworkshop';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/location/location-pipe';

@Component({
  selector: 'app-item',
  imports: [ RouterLink, DatePipe, LocationPipe],
  templateUrl: './item.html',
  styleUrl: './item.scss',
  providers: [DatePipe]
})
export class Item {

  @Input() 
  workshop!: IWorkshop;

  constructor(private datePipe: DatePipe) {
    console.log( this.datePipe.transform( "2025-07-02", "medium" ) );
  }

}
