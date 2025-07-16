import { Component, OnInit } from '@angular/core';
import { Sessions } from '../../sessions';
import { ActivatedRoute } from '@angular/router';
import ISession from '../../models/ISession';
import { VotingWdget } from '../../../common/voting-wdget/voting-wdget';
import { Toast as ToastService } from '../../../common/toast';

@Component({
  selector: 'app-sessions-list',
  imports: [VotingWdget],
  templateUrl: './sessions-list.html',
  styleUrl: './sessions-list.scss'
})
export class SessionsList implements OnInit{

  workshopId?: number;
  sessions!: ISession[];
  error: Error | null = null;

  constructor(
    private sessionService: Sessions,
    private activatedRoute: ActivatedRoute,
    private toastService: ToastService
  ) {}
  ngOnInit(): void {

    const idStr = this.activatedRoute.snapshot.paramMap.get('id');
    this.workshopId = +(idStr as string);

    this.sessionService.getSessionsFromWorkshop(this.workshopId).subscribe({
      next: (param) => {
        this.sessions = param;
      },
    });

      
  }

  updateVote(session: ISession, by:number) {
    this.sessionService.voteForSession(session.id, by===1? 'upvote' : 'downvote').subscribe({
      next: (updateSession) => {
        console.log("upvote api call::{}", updateSession);
        session.upvoteCount = updateSession.upvoteCount;
        this.toastService.add({
          message: `Your vote for ${session.name} has been captured`,
          duration: 5000,
          className: 'bg-success text-light'
        });
      },
      error: (error) => {
        this.error = error;
        this.toastService.add({
          message: `Your vote for ${session.name} could not be captured ${this.error?.message}, try again`,
          duration: 5000,
          className: 'bg-danger text-light'
        });
      },
    });
  }

}
