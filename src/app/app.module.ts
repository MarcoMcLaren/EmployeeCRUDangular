import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { EditEmployeeComponent } from './edit-employee/edit-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: EmployeeListComponent },
      { path: 'employees', component: EmployeeListComponent },
      { path: 'add', component: AddEmployeeComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
