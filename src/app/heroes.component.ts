import { Component } from '@angular/core';
import { OnInit} from '@angular/core';
import { Router} from '@angular/router';

import { Hero } from './hero';
import { HeroService} from './hero.service';

@Component({
  selector: 'my-heroes',
  //templateUrl: './app.component.html',
  template:  `
    <h2>My Heroes</h2>
    <ul class="heroes">
      <li *ngFor='let hero of heroes' 
        [class.selected]="hero==selectedHero"  
        (click)="onSelect(hero)" 
        >
        <span class='badge'>{{hero.id}}</span>{{hero.name}}
      </li>
    </ul>
    <div *ngIf="selectedHero">
      <h2>
        {{selectedHero.name | uppercase}} is my hero
      </h2>
      <button (click)="gotoDetail(selectedHero.id)">View Details</button>
    </div>

    <!--Test table-->
    <table>
      <tr>
        <td>id</td>
        <td>name</td>
      </tr>
      <tbody>
        <tr *ngFor="let hero of heroes">
          <td>
            <input [(ngModel)]="hero.id" disabled="disabled" placeholder="id">
          </td>
          <td>
            <input [(ngModel)]="hero.name" placeholder="name" [class.invalid]="!hero.name">
          </td>
        </tr>
      </tbody>
    </table>
    <button (click)="addNewHero()">Add Hero</button>

    <!--details-->
    <!--<hero-detail [hero]="selectedHero"></hero-detail>-->
  `,
  styleUrls: ['./app.component.css'],
  providers:[]
})
export class HeroesComponent implements OnInit{
  title = 'Tour of Heroes';
  selectedHero:Hero;
  heroes: Hero[];

  ngOnInit():void{
    this.getHeroes();
  }

  constructor(
    private heroService: HeroService,
    private route:Router){

    }

  getHeroes():void{
    this.heroService.getHeroes().then(heroes=>this.heroes = heroes);
  }
  onSelect(hero:Hero):void {
    this.selectedHero = hero;
  }
  gotoDetail(id:number){
    this.route.navigate(['/detail',id]);
  }

  addNewHero():void{
    
    var newHero = new Hero(this.getNewId(),null);
    this.heroes.push(newHero);
  }

  private getNewId(){
    if (this.heroes.length == 0)
    {
      return 1;
    }
    var copiedHeroes = this.heroes.slice();
    copiedHeroes.sort(a=>a.id);
    var firstOne = copiedHeroes[0];
    console.log(firstOne);
    var newHeroId = firstOne.id +1;
    return newHeroId;
  }
}

