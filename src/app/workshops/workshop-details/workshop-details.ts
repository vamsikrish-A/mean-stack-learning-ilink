import { Component, OnInit } from '@angular/core';
import { Workshops } from '../workshops';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import IWorkshop, { IModes } from '../models/Iworkshop';
import { LoadingSpinner } from '../../common/loading-spinner/loading-spinner';
import { ErrorAlert } from '../../common/error-alert/error-alert';
import { DatePipe } from '@angular/common';
import { LocationPipe } from '../../common/location/location-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-workshop-details',
  imports: [ LoadingSpinner, ErrorAlert, DatePipe, LocationPipe, FontAwesomeModule, RouterOutlet,RouterLink, RouterLinkActive],
  templateUrl: './workshop-details.html',
  styleUrl: './workshop-details.scss'
})
export class WorkshopDetails implements OnInit {
  loading = true;
  error: Error | null = null;
  workshopId!: number;
  workshop!: IWorkshop;

  icons = {
    faCheckCircle,
    faTimesCircle
  };

  constructor(private workshopService: Workshops,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe({
        next: (params) => {
          const isStr = params.get('id');
          this.workshopId = +(isStr as string);

          this.workshopService.getWorkshopsById(this.workshopId).subscribe({
            next:(workshop) => {
              this.workshop = workshop;
              this.loading = false;

            },
            error: (error) => {
              this.error = error;
              this.loading=false;
            },
          });
        }
      });
  }

  getIconForMode(mode: keyof IModes) {
    return this.workshop.modes[mode]
        ? this.icons.faCheckCircle
        : this.icons.faTimesCircle;
}

}
