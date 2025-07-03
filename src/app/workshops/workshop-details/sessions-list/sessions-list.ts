import { Component, OnInit } from '@angular/core';
import { Sessions } from '../../sessions';
import { ActivatedRoute } from '@angular/router';
import ISession from '../../models/ISession';

@Component({
  selector: 'app-sessions-list',
  imports: [],
  templateUrl: './sessions-list.html',
  styleUrl: './sessions-list.scss'
})
export class SessionsList implements OnInit{

  workshopId?: number;
  sessions!: ISession[];

  constructor(
    private sessionService: Sessions,
    private activatedRoute: ActivatedRoute
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

}
