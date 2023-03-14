import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Employee } from '../Models/employee.model';
import { EmployeesService } from '../Services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit{

  employeeDetails: Employee ={
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: ''
  }
  router: any;

  constructor(private route: ActivatedRoute, private employeeService: EmployeesService) { }

    ngOnInit(): void {
       this.route.paramMap.subscribe(
          (params: ParamMap) => {
            const id = params.get('id');

            if(id){
              this.employeeService.updateEmployee(id).subscribe({
                next: (response) => {
                  this.employeeDetails = response;
              }
            })
          }
        }
    )
  }

  updateEmployee(){
    this.employeeService.updateEmployee(this.employeeDetails.id).subscribe({
      next: (response) => {
        this.employeeDetails = response;
      }
    })
  }

  officialUpdate(){
    this.employeeService.officialUpdate(this.employeeDetails.id, this.employeeDetails).subscribe({
      next: (response) => {
        this.employeeDetails = response;
      }
    })
  }

  deleteEmployee(id: string){
    this.employeeService.deleteEmployee(this.employeeDetails.id).subscribe({
      next: (response) => {
       this.router.navigate(['/employees']);
      }
    })
  }
}
