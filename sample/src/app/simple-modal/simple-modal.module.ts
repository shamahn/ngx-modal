import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SimpleModalComponent } from './simple-modal.component';

const routes = [
  { path: '', component: SimpleModalComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [SimpleModalComponent]
})
export class SimpleModalPageModule { }
