import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

const routes: Routes = [
  {path: 'employees/edit/:id', component: EditEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
