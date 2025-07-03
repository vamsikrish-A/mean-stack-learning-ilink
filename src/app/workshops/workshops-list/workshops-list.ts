import { Component, OnInit } from '@angular/core';
import { Workshops } from '../workshops';
import IWorkshop from '../models/Iworkshop';
import { CommonModule } from '@angular/common';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';

@Component({
  selector: 'app-workshops-list',
  imports: [ CommonModule, NgbAlert, LoadingSpinner, ErrorAlert],
  templateUrl: './workshops-list.html',
  styleUrl: './workshops-list.scss'
})
export class WorkshopsList implements OnInit{

  workshops! : IWorkshop[];
  error: Error | null = null;
  loading: boolean = true;
  // worksshopService : Workshops

  // constructor( workshopService : Workshops) {
  //   this.worksshopService = workshopService;

  //   workshopService.doSomething();
  // }

  //short synatx for data member creation and initialization by using access modifier
  constructor(private workshopService : Workshops) {
    this.workshopService.doSomething();
  }

  //LifeCycle method: executed when the component shows up on the screen
  ngOnInit() {
    this.workshopService.getWorkshops().subscribe(
      {
        next: ( w ) => {
          console.log( w );
          this.workshops = w;
          this.loading = false;
        },
        error: (err) => {
          console.log(err);
          this.loading=false;
        }
      }
    )
  }

}
