import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjectsComponent } from './component/projects/projects.component';
import { GamesComponent } from './component/games/games.component';
import { ArtComponent } from './component/art/art.component';
import { BlogComponent } from './component/blog/blog.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './component/main/main.component';
import { FooterComponent } from './component/footer/footer.component';
import { HeaderComponent } from './component/header/header.component';
import { ResumeComponent } from './component/resume/resume.component';
import { ProfileComponent } from './component/profile/profile.component';
import { PrintComponent } from './component/print/print.component';
import { MenuComponent } from './component/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SlidingcardComponent } from './component/slidingcard/slidingcard.component';
import { SkillsComponent } from './component/skills/skills.component';

import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    GamesComponent,
    ArtComponent,
    BlogComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent,
    ResumeComponent,
    ProfileComponent,
    PrintComponent,
    MenuComponent,
    SlidingcardComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      "radius": 60,
      "space": -10,
      "outerStrokeGradient": true,
      "outerStrokeWidth": 10,
      "outerStrokeColor": "#4882c2",
      "outerStrokeGradientStopColor": "#53a9ff",
      "innerStrokeColor": "#e7e8ea",
      "innerStrokeWidth": 10,
      "title": "UI",
      "animateTitle": false,
      "animationDuration": 300,
      "showUnits": false,
      "showBackground": false,
      "clockwise": false,
      "startFromZero": false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
