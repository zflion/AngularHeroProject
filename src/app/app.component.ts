import {Component} from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: ['./app.component.css'],
    template:`
        <h1 id="pageTitle">{{title}}</h1>
        <a routerLink="/dashboard">Dashboard</a>
        <a routerLink="/heroes">Heroes</a>
        <router-outlet></router-outlet>       
    `
})
export class AppComponent {
    title = "Tour of Heroes1";
}
