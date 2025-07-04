import { Component, OnInit } from '@angular/core';
import { Workshops } from '../workshops';
import IWorkshop from '../models/Iworkshop';
import { CommonModule } from '@angular/common';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { Item } from './item/item';
import { Pagination } from "../../common/pagination/pagination";
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Toast as ToastService } from '../../common/toast';

@Component({
  selector: 'app-workshops-list',
  imports: [CommonModule, LoadingSpinner, ErrorAlert, Item, Pagination, FormsModule],
  templateUrl: './workshops-list.html',
  styleUrl: './workshops-list.scss'
})
export class WorkshopsList implements OnInit{

  workshops! : IWorkshop[];  //all the 10 workshops for the page
  filteredWorkshops!: IWorkshop[];  //only filetered workshops
  error: Error | null = null;
  loading = true;
  page = 1;
  filterKey = '';
  category: string = '';
  // worksshopService : Workshops

  // constructor( workshopService : Workshops) {
  //   this.worksshopService = workshopService;

  //   workshopService.doSomething();
  // }

  //short synatx for data member creation and initialization by using access modifier
  constructor(private workshopService : Workshops,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastService: ToastService
  ) {
    this.workshopService.doSomething();
  }

  //LifeCycle method: executed when the component shows up on the screen
  // ngOnInit() {
  //   this.workshopService.getWorkshops().subscribe(
  getWorkShops() {
    this.workshopService.getWorkshops(this.page).subscribe(
      {
        next: ( w ) => {
          console.log( w );
          this.workshops = w;
          this.loading = false;
          this.filterWorkshops();
        },
        error: (err) => {
          console.log(err);
          this.loading=false;
        }
      }
    )
  }

  ngOnInit() {
    this.loading = true;
    //this.getWorkShops();
    // this.activatedRoute.queryParamMap is an Observable that tracks changes to the query string -> thus whenever `page` in the query string changes, the next() method is called
    this.activatedRoute.queryParamMap.subscribe({
      next: (queryParams) => {
        const queryStr = queryParams.get('page'); //read as a string

        // when the page loads for the first time, there is no `page` query string parameter -> so we set page to 1. Later on there is some `page` value

        if(queryStr === null) {
          this.page = 1;
        } else {
          this.page = +queryStr; // convert `page` from string type to number
        }

        this.getWorkShops();  // page has changed -> get fresh data
        this.filterByCategory(this.category);
      }

    })
      
  }

  changePage(newPage: number) {
       this.page = newPage

    //this.getWorkShops();

    this.router.navigate(
        ['/workshops'],
        {
          queryParams: {
              page: this.page,
          },
        }
    );
  }

 filterWorkshops() {
    this.filteredWorkshops = this.workshops.filter(
      (w) => w.name.toLowerCase().includes(this.filterKey.toLowerCase())
    );
  }

  filterByCategory(category: string) {
    this.workshopService.getWorkshops(this.page, category).subscribe({
        next: (workshops) => {
            this.workshops = workshops;
            // A better alternative: If you make `this.workshops` and `this.filterKey` as signals, you can compute `this.filteredWorkshops` automatically when either `this.workshops` changes or `this.filterKey` changes
            this.filterWorkshops();
        },
    });

  }

  deleteWorkShop(workshop: IWorkshop) {
    console.log(workshop);

    this.workshopService.deleteWorkshopById(workshop.id).subscribe({
      next: (params) => {
        console.log(`${workshop.name} gets deleted`);
        this.toastService.add({
          message: `Deleated workshop with Id =${workshop.id} `,
          className:'bg-success text-light',
          duration:3000,
        });

        //update the workshops
        this.workshops = this.workshops.filter(w => {
          w.id !== workshop.id
        });

        this.filterWorkshops();
      },
      error: (error) => {
        this.error =error;
         this.toastService.add({
                message: `Could not delete workshop with id = ${workshop.id}`,
                className: 'bg-danger text-light',
                duration: 3000,
            });
      }

    })
  }
}
