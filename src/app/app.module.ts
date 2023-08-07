import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { GuideComponent } from './components/guide/guide.component';
import { CardComponent } from './components/missing/card/card.component';
import { MissingListComponent } from './components/missing/missing-list/missing-list.component';
import { MissingDetailsComponent } from './components/missing/missing-details/missing-details.component';
import { CycloneMapComponent } from './components/cyclone/cyclone-map/cyclone-map.component';
import { PostCardComponent } from './components/post/post-card/post-card.component';


// Angular Materials
import {MatTabsModule} from '@angular/material/tabs';
import {MatListModule} from '@angular/material/list';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import { PostListComponent } from './components/post/post-list/post-list.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    CardComponent,
    MissingListComponent,
    MissingDetailsComponent,
    CycloneMapComponent,
    PostCardComponent,
    PostListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
