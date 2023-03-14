import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee.model';
import { EmployeesService } from '../Services/employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

employees: Employee[] = [];

constructor(private employeesService: EmployeesService) { }

ngOnInit(): void {
this.employeesService.getEmployees().subscribe({
next: (employees) => {
  this.employees = employees;
  console.log(this.employees);
},
  error: err => console.log(err)
})
}


}
