import { Component, OnInit ,ViewChild} from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { MatTableDataSource, MatSort , MatPaginator } from '@angular/material';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }
  listData : MatTableDataSource<any>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['fullName','email','mobile','city','actions'];
  searchKey: string;

  ngOnInit() {
    this.employeeService.getEmployees().subscribe(
      list => {
        let array  = list.map(item => {
          return {
            $key : item.key,
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

}
