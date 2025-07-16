import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-voting-wdget',
  imports: [ FontAwesomeModule],
  templateUrl: './voting-wdget.html',
  styleUrl: './voting-wdget.scss'
})
export class VotingWdget {
  icons = {
    faCaretUp,
    faCaretDown,
  };

  @Input()
  votes!: number;

  @Output()
  vote = new EventEmitter<number>();

  emitVote(by: number) {
    this.vote.emit(by);
  }

}
