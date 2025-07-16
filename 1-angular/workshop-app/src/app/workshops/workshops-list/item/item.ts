import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import IWorkshop from '../../models/Iworkshop';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../../common/location/location-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-item',
  imports: [ RouterLink, DatePipe, LocationPipe, FontAwesomeModule],
  templateUrl: './item.html',
  styleUrl: './item.scss',
  providers: [DatePipe]
})
export class Item {

  icons = {
    faPencil, faTrash
  }

  @Input() 
  workshop!: IWorkshop;

  @Output()
  delete = new EventEmitter();

  onDeleteWorkshop() {
    this.delete.emit();
  }

  constructor(private datePipe: DatePipe) {
    console.log( this.datePipe.transform( "2025-07-02", "medium" ) );
  }

}
