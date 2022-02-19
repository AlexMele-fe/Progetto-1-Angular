import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li>
          <a
            [routerLink]="['/']"
            routerLinkActive="active"
            [routerLinkActiveOptions]="{ exact: true }"
            >Todos</a
          >
        </li>
        <li>
          <a [routerLink]="['/completed']" routerLinkActive="active"
            >Completati</a
          >
        </li>
      </ul>
    </nav>
  `,
  styles: [
    `
      nav {
        position: fixed;
        width: 100%;
        ul {
          display: flex;
          justify-content: center;
          list-style-type: none;
          padding:0;
          li{
            margin: 0 10px;
            a{
              text-decoration:none;
              color:green;
              &.active{
                font-weight:bold;
                color:red;
              }
            }
          }
        }
      }
    `,
  ],
})
export class NavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
