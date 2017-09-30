import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './DataService/in-memory-data.service';

import { AppComponent } from './app.component';
import { HeroDetailComponent} from './hero-detail.component';
import { HeroService} from './hero.service';
import { HeroesComponent} from './heroes.component';
import { DashboardComponent} from './dashboard.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  
  providers: [HeroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
