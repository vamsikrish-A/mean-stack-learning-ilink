import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import IWorkshop from './models/Iworkshop';

@Injectable({
  providedIn: 'root'
})
export class Workshops {

  constructor( private http: HttpClient) { }

  doSomething() {
    console.log(' I do Something');
  }

  getWorkshops(page : number = 1, category: string = '') {
    const params : {_page: number; category?: string} = {
      _page: page
    };

    if(category!== '') {
      params.category =category;
    }
   return this.http.get<IWorkshop[]> (
    `https://workshops-server.onrender.com/workshops`,
    {
      params,
    }
    
   );
  }


}
