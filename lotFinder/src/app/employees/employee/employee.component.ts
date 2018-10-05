import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  departments = [
    { id: 1, value: 'Dev 1'},
    { id: 2, value: 'Dev 2'},
    { id: 3, value: 'Dev 3'}];

  ngOnInit() {
  }

  onClear() {
    this.employeeService.form.reset();
    this.employeeService.initializeFormGroup();
  }


}
