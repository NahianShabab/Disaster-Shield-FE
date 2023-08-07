import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuideComponent } from './components/guide/guide.component';
import { CycloneMapComponent } from './components/cyclone/cyclone-map/cyclone-map.component';
import { AppComponent } from './app.component';
import { CardComponent } from './components/missing/card/card.component';
import { MissingListComponent } from './components/missing/missing-list/missing-list.component';
import { PostListComponent } from './components/post/post-list/post-list.component';

// const routes:Routes=[]
const routes: Routes = [
  { path: 'guide', component:GuideComponent  },
  { path: 'cyclone', component: CycloneMapComponent },
  { path: 'missing', component:MissingListComponent},
  {path:'post',component:PostListComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
