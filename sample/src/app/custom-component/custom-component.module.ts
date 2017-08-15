import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomComponentComponent } from './custom-component.component';

const routes = [
  { path: '', component: CustomComponentComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [CustomComponentComponent]
})
export class CustomComponentPageModule {
}
