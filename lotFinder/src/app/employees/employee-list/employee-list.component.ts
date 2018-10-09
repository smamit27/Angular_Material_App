import { Component, OnInit ,ViewChild} from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatTableDataSource, MatSort , MatPaginator, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeComponent } from '../employee/employee.component';
import {DepartmentService} from '../../shared/department.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService ,public dialog: MatDialog,private departmentService : DepartmentService) { }
  listData : MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['fullName','email','mobile','city','departmentName','actions'];
  searchKey: string;

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      list => {
        let array  = list.map(item => {
          let departmentName = this.departmentService.getDepartmentName(item.payload.val()['department']);
          return {
            $key : item.key,
            departmentName: departmentName,
            ...item.payload.val()
          };
        });
          this.listData = new MatTableDataSource(array);
          this.listData.sort = this.sort;
          this.listData.paginator = this.paginator;
      });
  }
  onSearch() {
    this.searchKey = "";
    this.applyFilter();

  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  openDialog() {
    let dialogRef = this.dialog.open(EmployeeComponent, {
      height: '400px',
      width: '600px',
    });

  }

}
