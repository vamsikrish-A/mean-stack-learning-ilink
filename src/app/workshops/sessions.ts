import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ISession from './models/ISession';

@Injectable({
  providedIn: 'root'
})
export class Sessions {

  constructor( private http : HttpClient) { }

  getSessionsFromWorkshop(workshopId:number) {
    return this.http.get<ISession[]>(
      `https://workshops-server.onrender.com/workshops/${workshopId}/sessions`
    );
  }
}
