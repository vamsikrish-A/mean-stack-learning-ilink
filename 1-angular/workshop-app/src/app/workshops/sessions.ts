import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import ISession from './models/ISession';
import { environment } from '../../environments/environment';

export type VoteType = 'upvote' | 'downvote';

@Injectable({
  providedIn: 'root'
})
export class Sessions {
  apiUrl = environment.apiUrl;

  constructor( private http : HttpClient) { }

  getSessionsFromWorkshop(workshopId:number) {
    return this.http.get<ISession[]>(
      `${this.apiUrl}/workshops/${workshopId}/sessions`
    );
  }

  voteForSession(sessionId: number, voteType: VoteType) {
    return this.http.put<ISession>(
      `${this.apiUrl}/sessions/${sessionId}/${voteType}`,
      null  //we genrally pass data in put request. In this case we don't have any data
    );
  }

  addSession(session: Omit<ISession, 'id'>) {
    return this.http.post<ISession>(
      `${this.apiUrl}/sessions`, 
      session, 
      {
        headers: {
            'Content-Type': 'application/json',
        },
    });
}
}
