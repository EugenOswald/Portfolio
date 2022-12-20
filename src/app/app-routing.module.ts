import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { OnePagerComponent } from './one-pager/one-pager.component';

const routes: Routes = [
  { path: '', component: OnePagerComponent },
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
