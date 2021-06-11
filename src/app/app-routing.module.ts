import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [

  { path: 'zone', component: HomeComponent, data: {animation: 'HomePage'}},
  { path: 'price', component: AboutComponent, data: {animation: 'AboutPage'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
