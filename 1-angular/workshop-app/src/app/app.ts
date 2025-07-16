import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { Menu } from './menu/menu';
import { Toast } from './common/toast/toast';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgbAlert, CommonModule, Menu, Toast], 
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'workshop-app';

  count = 0;
  isOpen = true;


  increment() {
    this.count = this.count +1;
  }

  toggle() {
    //alert{ 'isClosed'};
    this.isOpen = false;
  }
}
