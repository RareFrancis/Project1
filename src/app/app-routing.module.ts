import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
{path:'data',component:DataComponent},
{path:'update/:id',component:UpdateComponent},
{path:'',redirectTo:'data',pathMatch:'full'}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
