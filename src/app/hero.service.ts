import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Hero } from './hero';
import { HEROES} from './mock-heroes';

@Injectable()
export class HeroService{
    private heroUrl = 'api/heroes'; //URL to Webapi
    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http: Http){}
    getHeroes(): Promise<Hero[]>{
        //return Promise.resolve(HEROES);

        // return new Promise((resolve)=>{
        //     resolve(HEROES);
        // })

        return this.http.get(this.heroUrl).
                            toPromise().
                            then(resp=>{
                                console.info('response:',resp);
                                var d = resp.json().data;
                                console.info(d);
                                return d as Hero[];}).
                            catch(this.handleError);

    }

    getHeroesSlowly():Promise<Hero[]>{
        return new Promise(resolve=>{
            setTimeout(()=>resolve(this.getHeroes()), 2000);
        });
    }

    getHero(id:number):Promise<Hero>{
        // return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id == id));
        const url = `${this.heroUrl}/${id}`;
        return this.http.get(url).toPromise()
                                .then(response=> response.json().data as Hero)
                                .catch(this.handleError);


    }

    update(hero:Hero):Promise<Hero>{
        const url =`${this.heroUrl}/${hero.id}`;
        return this.http.put(url,JSON.stringify(hero),{headers: this.headers})
        .toPromise()
        .then(()=>hero)
        .catch(this.handleError);
    }

    private handleError(error: any): Promise<any>{
        console.error('Error occured', error);
        return Promise.reject(error.message|| error);
    }
}