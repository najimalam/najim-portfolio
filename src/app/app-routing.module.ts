import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component'; // Path relative to app-routing.module.ts

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  // other routes if they exist (none for now)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
