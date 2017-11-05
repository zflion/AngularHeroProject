import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

export class InMemoryDataService implements InMemoryDbService{
    createDb(){
        const heroes = [
            new Hero(0,'Zero'),
            new Hero(1,'Mr.Right'),
            new Hero(2,'Narco'),
            new Hero(3,'Bombasto'),
            new Hero(4,'Celeritas'),
            new Hero(5,'test'),
            new Hero(6,'Jasontset'),
            new Hero(7,'kjtest'),
            new Hero(8,'123test'),
            new Hero(9,'45dfftest'),
            new Hero(10,'ddaatt'),
            new Hero(11,'Private'),
        ];
        return {heroes};  
    }
}