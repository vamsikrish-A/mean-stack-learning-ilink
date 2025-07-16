import { Injectable } from '@angular/core';

interface IToast {
  message: string;
  className: string;
  duration: number;
}

@Injectable({
  providedIn: 'root'
})
export class Toast {
  private toasts: IToast[] = [];

  constructor() { }

  getToasts() {
    return this.toasts;
  }

  add(toast: IToast) {
    this.toasts.unshift(toast);
  }

  remove(toast: IToast) {
    this.toasts = this.toasts.filter((t) => t ! == toast);
  }

  clear() {
    this.toasts = [];
  }
}
