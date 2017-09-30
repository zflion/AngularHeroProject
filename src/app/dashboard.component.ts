import { Component, OnInit } from '@angular/core';

import { Hero} from './hero';
import { HeroService} from './hero.service'

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.compoent.html'
})
export class DashboardComponent implements OnInit{
    heroes:Hero[] = [];
    heroService:HeroService
    constructor( heroService:HeroService){
        this.heroService = heroService;
    }

    ngOnInit():void{
        this.heroService.getHeroes().then(heroes=>this.heroes = heroes.slice(0,2));
    }
}