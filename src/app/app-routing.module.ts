import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfListComponent } from './components/conf-list/conf-list.component';

const routes: Routes = [
  {path:'', component: ConfListComponent},
  {path: '**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
