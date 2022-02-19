import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
  .container{
    display:flex;
    align-items:center;
    justify-content: center;
    height:100%;
    width:100%
  }
  `],
})
export class AppComponent {}
